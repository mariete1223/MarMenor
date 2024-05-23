
const fetch = require('node-fetch');

const endpointURL = 'http://localhost:3030/prueba';

notificacion = {
    "id": "urn:ngsi-ld:Notification:3ade18e8-00b8-11ef-b15a-0242ac120106",
    "type": "Notification",
    "subscriptionId": "urn:ngsi-ld:subscription:2deb7112-00b8-11ef-8053-0242ac120106",
    "notifiedAt": "2024-04-22T14:54:33.318Z",
    "data": [
        {
            "id": "urn:ngsi-ld:Buoy:001",
            "type": "Buoy",
            "identifier": {
                "type": "Property",
                "value": "urn:ngsi-ld:Buoy:001"
            },
            "description": {
                "type": "Property",
                "value": "Buoy E10 for measuring water quality in the Mar Menor"
            },
            "address": {
                "type": "Property",
                "value": {
                    "addressCountry": "ES",
                    "addressRegion": "Murcia",
                    "addressLocality": "Maradona",
                    "postalCode": "30383"
                }
            },
            "location": {
                "type": "GeoProperty",
                "value": {
                    "type": "Point",
                    "coordinates": [
                        -0.88,
                        38.65
                    ]
                }
            },
            "name": {
                "type": "Property",
                "value": "UNA PRUEBA HISTORICA"
            },
            "source": {
                "type": "Property",
                "value": "https://idearm.imida.es/cgi/siomctdmarmenor/#CTD-E10"
            }
        }
    ]
}

data = notificacion["data"][0]

const name = data["name"]["value"];
const addressCountry = data["address"]["value"]["addressCountry"];
const addressLocality = data["address"]["value"]["addressLocality"];
const addressRegion = data["address"]["value"]["addressRegion"];
const postalCode = data["address"]["value"]["postalCode"];
const source = data["source"]["value"];
const description = data["description"]["value"];
const coordinates1 = data["location"]["value"]["coordinates"][0];
const coordinates2 = data["location"]["value"]["coordinates"][1];
const entityId = data["id"];

const sparqlUpdate = `
    PREFIX : <https://uri.etsi.org/ngsi-ld/default-context/>
    PREFIX ngsi-ld: <https://uri.etsi.org/ngsi-ld/>
    PREFIX ns1: <https://smartdatamodels.org/>
    PREFIX ns2: <https://raw.githubusercontent.com/mariete1223/MarMenor/main/SoundingPlace/soundingPlace.yaml#/>
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

    DELETE {
        ?entity ngsi-ld:name ?name ;
            ns1:address ?address ;
            ns1:source ?source ;
            ngsi-ld:description ?description ;
            ngsi-ld:location ?location .
    }
    INSERT {
        ?entity a <https://raw.githubusercontent.com/mariete1223/MarMenor/main/Buoy/buoy.yaml#/Buoy> ;
            ngsi-ld:name [ a ngsi-ld:Property ; ngsi-ld:hasValue "${name}" ] ;
            ns1:address [ a ngsi-ld:Property ;
                ngsi-ld:hasValue [ ns1:addressCountry "${addressCountry}" ;
                        ns1:addressLocality "${addressLocality}" ;
                        ns1:addressRegion "${addressRegion}" ;
                        ns1:postalCode "${postalCode}" ] ] ;
            ns1:source [ a ngsi-ld:Property ; ngsi-ld:hasValue "${source}" ] ;
            ngsi-ld:description [ a ngsi-ld:Property ; ngsi-ld:hasValue "${description}" ] ;
            ngsi-ld:location [ a ngsi-ld:GeoProperty ;
            ngsi-ld:hasValue [ a :Point ;
                    ngsi-ld:coordinates "${coordinates1}"^^xsd:double,
                        "${coordinates2}"^^xsd:double ] ] .
    }
    WHERE {
        ?entity a <https://raw.githubusercontent.com/mariete1223/MarMenor/main/Buoy/buoy.yaml#/Buoy> ;
                ns1:identifier [ ngsi-ld:hasValue "${entityId}" ] .
        OPTIONAL {
            ?entity ngsi-ld:name ?name ;
                        ns1:address ?address ;
                        ns1:source ?source ;
                        ngsi-ld:description ?description ;
                        ngsi-ld:location ?location .
        }
    }
`;

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/sparql-query',
  },
  body: sparqlUpdate,
};

fetch(endpointURL, requestOptions)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error al realizar la solicitud:', error);
  });



  const sparqlQuery = `
    PREFIX : <https://uri.etsi.org/ngsi-ld/default-context/>
    PREFIX ngsi-ld: <https://uri.etsi.org/ngsi-ld/>
    PREFIX ns1: <https://smartdatamodels.org/>
    PREFIX ns2: <https://raw.githubusercontent.com/mariete1223/MarMenor/main/SoundingPlace/soundingPlace.yaml#/>
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

    SELECT ?entity ?name ?location ?addressCountry ?addressLocality ?addressRegion ?postal ?source ?description ?coordinates1 ?coordinates2
    WHERE {{
        ?entity a <https://raw.githubusercontent.com/mariete1223/MarMenor/main/Buoy/buoy.yaml#/Buoy> ;
                ns1:identifier [ ngsi-ld:hasValue "urn:ngsi-ld:Buoy:001" ] ;
                ngsi-ld:name [ ngsi-ld:hasValue ?name ] ;
                ns1:address [ ngsi-ld:hasValue [ ns1:addressCountry ?addressCountry ;
                            ns1:addressLocality ?addressLocality ;
                            ns1:addressRegion ?addressRegion ;
                            ns1:postalCode ?postal ] ] ;
                ns1:source [ ngsi-ld:hasValue ?source ] ;
                ngsi-ld:description [ ngsi-ld:hasValue ?description ] ;
                ngsi-ld:location [ ngsi-ld:hasValue [ ngsi-ld:coordinates ?coordinates1 ;
                                                    ngsi-ld:coordinates ?coordinates2  ] ] .
                FILTER(?coordinates1 > ?coordinates2)
    }}
`;

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/sparql-query',
  },
  body: sparqlQuery,
};

fetch(endpointURL, requestOptions)
  .then(response => response.json())
  .then(data => {
    console.log(data.results.bindings);
  })
  .catch(error => {
    console.error('Error al realizar la solicitud:', error);
  });