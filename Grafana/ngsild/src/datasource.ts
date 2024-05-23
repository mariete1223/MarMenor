import defaults from 'lodash/defaults';

import {
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
  MutableDataFrame,
  FieldType,
} from '@grafana/data';

import { getBackendSrv, BackendSrv, FetchResponse, BackendSrvRequest, getTemplateSrv } from "@grafana/runtime";

import { NgsildQuery, NgsildSourceOptions, defaultQuery, NgsildQueryType } from './types';
import { JsUtils } from 'utils';
import { Measurement, EntityTemporal, INVALID_ATTRIBUTES, Entity, Attribute, getValue, Property } from 'ngsildTypes';
import { isNumber, lte } from 'lodash';
import { GeoHandler } from 'GeoHandler';
import { NodeGraphHandler } from 'NodeGraphHandler';


export class NgsildDataSource extends DataSourceApi<NgsildQuery, NgsildSourceOptions> {

  private readonly baseUrl: string;  // http://broker:1026/ngsi-ld/v1
  private readonly timeseriesUrl: string;  // http://broker-ts:8080
  private readonly contextUrl: string; // http://context/ngsi-context.jsonld
  private readonly contextLinkHeader: string; // <http://context/ngsi-context.jsonld>; rel="http://www.w3.org/ns/json-ld#context"; type="application/ld+json

  constructor(instanceSettings: DataSourceInstanceSettings<NgsildSourceOptions>) {
    super(instanceSettings);
    let baseUrl = instanceSettings.url || "";
    if (baseUrl.indexOf("/ngsi-ld/v1") < 0)
      {baseUrl = JsUtils.concatPaths(baseUrl, "/ngsi-ld/v1");}
    this.baseUrl = baseUrl;
    const actualTimeseriesUrl: string = instanceSettings.jsonData?.timeseriesUrl || "";
    // note: the route alias "temporal" for instanceSettings.jsonData.timeseriesUrl in the backend proxy 
    // is defined in plugin.json, see https://community.grafana.com/t/grafana-datasource-backend-proxy/6861/4
    // it is a bit strange though that we need to prepend the broker url for this
    const timeseriesUrl: string = instanceSettings.access === "proxy" ? 
      JsUtils.concatPaths(instanceSettings.url?.replace("/ngsi-ld/v1", "")||"", "temporal") : actualTimeseriesUrl; 
    this.timeseriesUrl = timeseriesUrl;
    this.contextUrl = instanceSettings.jsonData?.contextUrl || "";
    this.contextLinkHeader = !this.contextUrl ? "" :
      "<" + this.contextUrl + ">; rel=\"http://www.w3.org/ns/json-ld#context\"; type=\"application/ld+json\"";
  }

  async query(options: DataQueryRequest<NgsildQuery>): Promise<DataQueryResponse> {
    const backend: BackendSrv = getBackendSrv();
    const {range} = options; 
    const data0: Array<Promise<MutableDataFrame[]>> = options.targets!.map((target: NgsildQuery) => this.querySingle(defaults(target, defaultQuery), 
        {backend: backend, from: range?.from?.valueOf(), to: range?.to?.valueOf()}));
    const frames: MutableDataFrame[] = (await Promise.all(data0))
      .filter(f => f?.length > 0)
      .flatMap(f => f);
    return { data: frames };
  }

  async metricFindQuery(query: string, options?: any) {
    // Retrieve DataQueryResponse based on query.
    

    let posicion = query.indexOf("|");
    let prop = "id";

    // Verificar si la letra fue encontrada y obtener su posición
    if (posicion !== -1) {
      // Dividir la cadena en base al delimitador
      let queryArray = query.split("|");
      query = queryArray[0];
      prop = queryArray[1];
    }

    let response: { data: EntityTemporal|EntityTemporal[]|Entity|Entity[], status: number } = await this.requestSimple(query, options);
    let results: EntityTemporal|EntityTemporal[]|Entity|Entity[] = response.data;

    let getStringValue = (frame: Entity, property: string) => {
      if (typeof(frame[property]) !== "string")
        {return getValue(frame[property] as Property);}
      else
       {return frame[property];}
    }

    return Array.isArray(results)
        ? results.map(frame => ({ text: getStringValue(frame as Entity, prop) }))
        : [{ text: (results as EntityTemporal | Entity)[prop].toString()}];
  }

  private addDataToFrame(frames: MutableDataFrame[], results: EntityTemporal|EntityTemporal[]|Entity|Entity[], query: NgsildQuery, extraInfo: string, replaceName: string, options?: {from?: number, to?: number}) {
    for (const result of results as any) {
      let name: string = result.id;
      if (!query.useLongEntityName) {
        const col: number = name.lastIndexOf(":");
        if (col >= 0 && col < name.length-1)
          {name = name.substring(col + 1);} // avoid lengthy expanded names // TODO configurable
      }
      const attributes: string[] = Object.keys(result);
      INVALID_ATTRIBUTES.forEach(key => {
        const idx: number = attributes.indexOf(key);
        if (idx >= 0)
          {attributes.splice(idx, 1);}
      });
      for (const attribute of attributes) {
        if (result[attribute].type === "Relationship")
          {continue;}
        if (result[attribute].values) {
          const data: Measurement[] = result[attribute].values;
          let attributeChanged = replaceName
          if (attributeChanged === ""){
            attributeChanged = attribute
          }
          if (extraInfo !== ""){
            attributeChanged = attributeChanged+":"+extraInfo
          }
          const field = { 
            name:  name + ":" + attributeChanged, 
            values: data.map(point => point[0]), 
            type: FieldType.number 
          };
          const time = { 
            name: "Time", 
            values: data.map(point => new Date(point[1]).getTime()), // in case of aggregated values there is another entry, period end time interval point[2]
            type: FieldType.time 
          };
          frames.push(new MutableDataFrame({
            refId: query.refId,
            fields: [time, field]
          }));
        } else if (result[attribute].value !== undefined) {
          let value: any = result[attribute].value;
          if (typeof value === "object" && "@value" in value)
            {value = value["@value"];}
          const type: FieldType = isNumber(value) ? FieldType.number : typeof value === "string" ? FieldType.string:
              value === false || value === true ? FieldType.boolean : FieldType.other; 
          const field = { 
            name:  name + ":" + attribute, 
            values: [value], 
            type: FieldType.number 
          };
          const t: number = isFinite(result[attribute].observedAt) ? result[attribute].observedAt : 
            isFinite(options?.from!) && isFinite(options?.to!) ? (options?.from! + options?.to!)/2 :
            isFinite(options?.from!) ? options?.from : isFinite(options?.to!) ? options!.to : Date.now();
          const time = { 
            name: "Time", 
            values: [t], 
            type: FieldType.time 
          };
          frames.push(new MutableDataFrame({
            refId: query.refId,
            fields: [time,field]
          }));
        }
      }
    }
  }


  // it is somewhat ugly that we need to create multiple data fromes from a single request,
  // but different attributes may not be time-aligned, so there is little we can do
  private async querySingle(query: NgsildQuery, options?: {backend?: BackendSrv, from?: number, to?: number;}): Promise<MutableDataFrame[]> {
    if (!query.entityType&&!query.entityId&&!(query.attributes?.length! > 0))
      {return [];}
    
    const frames: MutableDataFrame[] = [];
    let results: EntityTemporal|EntityTemporal[]|Entity|Entity[] = [];

    if(query.queryType === NgsildQueryType.MULTITEMPORAL){
      let entities_to_fetch = query.entitiesIds;
      if (entities_to_fetch && entities_to_fetch.length > 0){
      }else{
        let variableName = "$DeviceMeasurement"
        if (query.variableMultitemp && query.variableMultitemp !== "")
          {
            variableName = query.variableMultitemp;
          }
        entities_to_fetch = getTemplateSrv().replace(variableName, undefined, "csv").split(",");
      }
      let temp_results = []
      let temp_controlled: string[] = []
      let temp_extra_att: string[] = []

      for( let entity of entities_to_fetch){
        let response: { data: EntityTemporal|EntityTemporal[]|Entity|Entity[], status: number } = await this.request({queryType: NgsildQueryType.ENTITY, attributes: ["controlledProperty","depth", "target"], entityId: entity},options)
        let resControlled: Entity = response.data as Entity
        temp_controlled.push(getValue(resControlled["controlledProperty"] as Property))
        let depth = getValue(resControlled["depth"] as Property)
        let target = getValue(resControlled["target"] as Property)
        if (depth !== undefined){
          temp_extra_att.push("depth_"+depth.toString())
        }
        if (target !== undefined){
          temp_extra_att.push("place_"+target)
        }
        if (depth === undefined && target === undefined){
          temp_extra_att.push("")
        }
        let response2: { data: EntityTemporal|EntityTemporal[]|Entity|Entity[], status: number, headers: any } = await this.request({queryType: NgsildQueryType.TEMPORAL, entityId: entity},options)
        let res = response2.data

        while (response2.status === 206){

          let content_range = response2.headers.get("Content-Range").split(" ")[1];
          content_range = content_range.split("/")[0];
          content_range = content_range.split("-");
          content_range = content_range.slice(3).join("-")+"Z";

          const fecha = new Date(content_range);

          // Obtener el número de milisegundos desde el 1 de enero de 1970
          const numeroDeMilisegundos = fecha.getTime();
          
          if(options === undefined){
            options = {from: numeroDeMilisegundos}
          }
          else{
            options.from = numeroDeMilisegundos
          }
          
          response2 = await this.request({queryType: NgsildQueryType.TEMPORAL, entityId: entity},options)
          let res2 = response2.data
          temp_results.push(res2)
        }
        temp_results.push(res)
      } 

      let i = 0;
      for (const result of temp_results as any) {
        if (!Array.isArray(result))
        {results = [result] as any;}
        this.addDataToFrame(frames, results, query,temp_extra_att[i] ,temp_controlled[i], options);
        i++;
      }
    
    }

    if ( query.queryType !== NgsildQueryType.MULTITEMPORAL){
      let response: { data: EntityTemporal|EntityTemporal[]|Entity|Entity[], status: number } = await this.request(query, options);
      results = response.data
      if (!Array.isArray(results))
      {results = [results] as any;}
      this.addDataToFrame(frames, results, query,"", "", options);
    }

    if (query.queryType === NgsildQueryType.GEO)
      {return [GeoHandler.handleGeoResult(results as Entity[], query.refId)];}
      
    if (query.queryType === NgsildQueryType.NODE_GRAPH)
      {return new NodeGraphHandler(this, query).handleGraphResult(results as Entity[], 4);} // TODO max depth

    return frames;
  }

  async request<T=any>(
      query: Omit<NgsildQuery, "refId">, 
      options?: { 
        backend?: BackendSrv, 
        from?: number, 
        to?: number; 
        limit?: number;
        offset?: number;
        lastN?: number;
      }): Promise<{ data: T, status: number, headers: any }> {
    const backend: BackendSrv = options?.backend || getBackendSrv();
    let endpoint: string;
    const ngsildOptionsParam: string[] = [];
    switch (query.queryType) {
    case NgsildQueryType.TEMPORAL:
      endpoint = "/temporal/entities";
      console.log("primero "+endpoint)
      if (query.entityId)
        {endpoint += "/" + query.entityId;}
      ngsildOptionsParam.push("temporalValues"); // make sure to query the simplified temporal representation
      console.log("primero "+endpoint)
      if (query.aggrMethod) {
        ngsildOptionsParam.push("aggregatedValues"); // 
        endpoint = JsUtils.appendQueryParam(endpoint, "aggrMethod=" + query.aggrMethod);
        if (query.aggrPeriodDuration)
          {endpoint = JsUtils.appendQueryParam(endpoint, "aggrPeriodDuration=" + query.aggrPeriodDuration);}
      }
      break;
    case NgsildQueryType.VERSION:
      endpoint = "/version";
      break;
    case NgsildQueryType.TYPES:
      endpoint = "/types?details=true";
      break;
    case NgsildQueryType.ATTRIBUTES:
      if (!query.entityId) {
        endpoint = "/attributes";
        break;
      }
      // fallthrough
    case NgsildQueryType.GEO:
    case NgsildQueryType.NODE_GRAPH:
    case NgsildQueryType.ENTITY:
      endpoint = "/entities";
      if (query.entityId) {
        const hasComma: boolean = query.entityId.indexOf(",")>=0;
        if (hasComma)
          {endpoint += "?id=" + query.entityId.split(",").map(id=>id.trim()).filter(id=>id).map(encodeURIComponent).join(",");}
        else
          {endpoint += "/" + getTemplateSrv().replace(query.entityId);} // note: encoding does not work with the backend proxy
      }
      if (query.queryType === NgsildQueryType.GEO) {
        if (query.attributes?.length!>0) {
          if (query.attributes!.indexOf("location") < 0)
            {query.attributes!.push("location");}
        } else {
          endpoint = JsUtils.appendQueryParam(endpoint, "q=location");
        }
      }
      else if (query.queryType === NgsildQueryType.NODE_GRAPH) {
        let attributes: string[] = query.attributes || [];
        const addAttributes = (statAttributes?: Record<string, string[]>) => {
          if (!statAttributes)
            {return;}
          attributes.push(...new Set(Object.values(statAttributes).flatMap(arr => arr)));
        }
        addAttributes(query.primaryNodeAttributes);
        addAttributes(query.secondaryNodeAttributes);
        addAttributes(query.arcColorNodeAttributes);
        attributes = [...new Set(attributes)]; // keep only unique values
        if (attributes.length > 0)
          {query.attributes = attributes;}
      }
      break;
    default:
      throw new Error("Invalid query type " + query.queryType);
    }
    if (query.entityType)
      {endpoint = JsUtils.appendQueryParam(endpoint, "type=" + encodeURIComponent(query.entityType));}
    if (query.attributes?.length!>0)
      {endpoint = JsUtils.appendQueryParam(endpoint, "attrs=" + query.attributes?.map(encodeURIComponent).join(","));}
    if (query.queryType === NgsildQueryType.TEMPORAL)
      {endpoint = NgsildDataSource.setTimeInterval(endpoint, options?.from, options?.to);}
    if (query.georel) {
      endpoint = JsUtils.appendQueryParam(endpoint, "georel=" + encodeURIComponent(query.georel));
      if (query.geometry)
        {endpoint = JsUtils.appendQueryParam(endpoint, "geometry=" + encodeURIComponent(query.geometry));}
      if (query.coordinates)
        {endpoint = JsUtils.appendQueryParam(endpoint, "coordinates=" + encodeURIComponent(query.coordinates));}
      if (query.geoproperty)
        {endpoint = JsUtils.appendQueryParam(endpoint, "geoproperty=" + encodeURIComponent(query.geoproperty));}
    }
    if (query.customQuery){
        if (query.variableValue && query.variableValue !== ""){
          query.customQuery = query.customQuery+"%3BrefDevice==%22"+query.variableValue+"%22";
        }
        endpoint = JsUtils.appendQueryParam(endpoint, "q=" + getTemplateSrv().replace(query.customQuery)); 
    }
    else {
      if (query.variableValue && query.variableValue !== ""){
        endpoint = JsUtils.appendQueryParam(endpoint, "q=refDevice==%22"+query.variableValue+"%22"); 
      }
    }

    const appendNumericParam = (url: string, key: string, value?: number): string => 
        isFinite(value!) ? JsUtils.appendQueryParam(url, encodeURIComponent(key) + "=" + encodeURIComponent(value as any)) : url;
    const appendAll = (url: string, params: Record<string, number|undefined>, keys: string[]): string => {
      for (const key of keys) {
        url = appendNumericParam(url, key, params[key]);
      }
      return url;
    }
    if (options)
      {endpoint = appendAll(endpoint, options as any, ["limit", "offset", "lastN"]);}
    if (ngsildOptionsParam.length > 0)
      {endpoint = JsUtils.appendQueryParam(endpoint, "options=" + ngsildOptionsParam.join(","))}
    const baseUrl = query.queryType === NgsildQueryType.VERSION ? this.baseUrl.replace("/ngsi-ld/v1", "") : 
      query.queryType === NgsildQueryType.TEMPORAL ? this.timeseriesUrl :  this.baseUrl;
    const url: string = JsUtils.concatPaths(baseUrl, endpoint);
    console.log("url")
    console.log(url)
    const fetchOptions: BackendSrvRequest = {
      method: "GET",
      url: url,
      responseType: "json",
      headers: {Accept: "application/json"}
    };
    if (this.contextUrl && query.queryType !== NgsildQueryType.VERSION) {
      fetchOptions.headers = {
        Link: this.contextLinkHeader,
        Accept: "application/ld+json"
      };
    }

    const result0: { data: T, status: number, headers: any } = await NgsildDataSource.toPromise(backend.fetch(fetchOptions));
    return result0;
  }

  async requestSimple<T=any>(
    query: string, 
    options?: { 
      backend?: BackendSrv, 
      from?: number, 
      to?: number; 
      limit?: number;
      offset?: number;
      lastN?: number;
    }): Promise<{ data: T, status: number, headers: any }> {
  const backend: BackendSrv = options?.backend || getBackendSrv();
  let urlComposed  = getTemplateSrv().replace(query,undefined,"csv");
  let paramsString = urlComposed.split("?")[1];
  let params = paramsString.split("&").filter((param) => param.startsWith("q="));
  let paramsToKeep = paramsString.split("&").filter((param) => !param.startsWith("q=")).join("&");
  let newParams = "q=";
  let urlmodified = urlComposed;
  if (params.length === 1) {
    let paramsQuery = params[0].substring(2).split("%3B");
    
    paramsQuery.forEach((param) => {
      if (param.startsWith("controlledProperty==")){
        newParams+= "controlledProperty=="
        let values = param.split('%22')[1].split(',');
        values.forEach((value) => {
          newParams += "%22"+value+"%22,";
        })
        newParams = newParams.substring(0, newParams.length-1);
        newParams+="%3B";
      }else{
        newParams+=param+"%3B";
      }
    });
    newParams = newParams.substring(0, newParams.length-3);
    urlmodified = urlComposed.split("?")[0]+"?"+paramsToKeep+"&"+newParams;
  }

  const fetchOptions: BackendSrvRequest = {
    method: "GET",
    url: urlmodified,
    responseType: "json",
    headers: {Accept: "application/json"}
  };
  if (this.contextUrl) {
    fetchOptions.headers = {
      Link: this.contextLinkHeader,
      Accept: "application/ld+json"
    };
  }

  const result0: { data: T, status: number, headers: any } = await NgsildDataSource.toPromise(backend.fetch(fetchOptions));
  return result0;
}

  private static setTimeInterval(url: string, from?: number, to?: number): string {
    // @ts-ignore
    const hasFrom: boolean = isFinite(from);
    // @ts-ignore
    const hasTo: boolean = isFinite(to);
    if (hasFrom||hasTo) {
      const timerel = (hasFrom&&hasTo) ? "between" : hasFrom ? "after" : "before";
      url = JsUtils.appendQueryParam(url, "timerel=" + timerel);
      const timeAt: number = hasFrom ? from! : to!;
      url = JsUtils.appendQueryParam(url, "timeAt=" + new Date(timeAt).toISOString());
      if (hasFrom&&hasTo)
        {url = JsUtils.appendQueryParam(url, "endTimeAt=" + new Date(to!).toISOString());}
    }
    return url;
  }

  async testDatasource() {
    return this.request({queryType: NgsildQueryType.VERSION});
  }

  // TODO would like to use lastValueFrom here, but import is unclear
  private static toPromise<T>(observable: any /* Observable<FetchResponse<T>> */): Promise<{ data: T, status: number, headers: any }> {
    return new Promise((resolve, reject) => {
      observable.subscribe({
        next: (response: FetchResponse<T>) => {
          if (!response.ok) {
            let message: string = response.status + ": " + response.statusText;
            if (response.data)
              {message += " (" + response.data + ")";}
            reject("Failed to contact data source " + message);
          }
          resolve({data: response.data, status: response.status, headers: response.headers});
        },
        error: (e: any) => reject(e)
      })
    });
  }


}
