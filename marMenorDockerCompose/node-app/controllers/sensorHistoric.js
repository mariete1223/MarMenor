const SensorHistoric = require("../models/sensorHistoric");
const QueryUtils = require("../database/queryUtils");
const axios = require('axios');
const parse = require('csv-parser');
const fs = require('fs');
const path = require('path');
const mongoose = require("mongoose");

const batchSize = 10000;
isUpdateEnabled = false;
const collections = {};

lecturas = []



function obtainCollection(collectionName){
    let Colecction;
    if(collections[collectionName]){
        Colecction = collections[collectionName];
        return Colecction;
    }
    else{
        Colecction = mongoose.model(collectionName, SensorHistoric);
        collections[collectionName] = Colecction;
        return Colecction;
    }

}

function findKeyWithObject(data) {
    for (const key in data) {
        if (key == 'controlledAsset' || key == 'measureType') continue;
        const currentValue = data[key];
        if (typeof currentValue === 'object') {
            return key;
        } 
    }
    return null;
}

async function uploadSensorHistoricSingleValue(sensorId, controlledId, measuredPropertyComplete, measuredProperty, oldPropertyValue, observedAt, unitCode)  {

        if (isUpdateEnabled) {
            update(controlledId, measuredPropertyComplete, "singleValue", oldPropertyValue, observedAt, unitCode);
        }

        let collectionName = controlledId+"_"+sensorId;
        const Colecction = obtainCollection(collectionName);    

        const newMeasure = new Colecction({
            observedAt,
            value: oldPropertyValue,
            metadata: {
                type: measuredProperty,
                sensorId,
                controlledId,
                unitCode
            }
        });

        await newMeasure.save();
}

async function uploadSensorHistoricMultipleValue(sensorId, controlledId, measuredPropertyComplete, measuredProperty, oldPropertyValue)  {
    
    if (isUpdateEnabled) {
        update(controlledId, measuredPropertyComplete, "multipleValue", oldPropertyValue, oldPropertyValueObservedAt);
    }

    let collectionName = controlledId+"_"+sensorId;
    const Colecction = obtainCollection(collectionName);


    const newMeasure = new Colecction({
        observedAt,
        value: oldPropertyValue,
        metadata: {
            type: measuredProperty,
            sensorId,
            controlledId
        }
    });

    await newMeasure.save();
    
}


function update(controlledId, measuredPropertyComplete, measureType, oldPropertyValue, oldPropertyValueObservedAt, unitCode){
    
    const url = 'http://orion:1026/ngsi-ld/v1/entities/'+controlledId+'/attrs/'+measuredPropertyComplete;
    const headers = {
        'Content-Type': 'application/json',
        'Link': '<https://raw.githubusercontent.com/mariete1223/MarMenor/main/data_models_description/datamodels.context-ngsi.jsonld>; rel="http://www.w3.org/ns/json-ld#context"; type="application/ld+json"',
    };
    data = {}
    if (measureType == 'singleValue') {
        data = {
            "value": oldPropertyValue,
            "observedAt": oldPropertyValueObservedAt,
            "unitCode": unitCode
        };
    } else {
        data = oldPropertyValue;
    }
    axios.patch(url, data, { headers: headers })
        .then(response => {
            console.log('Response:', response.data);
        })
        .catch(error => {
            console.error('Error:', error.response ? error.response.data : error.message);
        });
}

module.exports.uploadFile = async (req, res, next) => {
        
    try{
        const payload = req?.body;
        const controlledId = req?.params?.idEntity;
        const sensorId = payload?.sensorId;
        const measuredProperty = payload?.controlledProperty;
        const measureType = payload?.measureType;
        const controlledCsvHeader = payload?.controlledCsvHeader;
        const unitCode = payload?.unitCode;
        const file = payload?.file;
        const filePath = __dirname+"/../historicData/SAIHdatasActualizados/"+file;
        var resultsStream = {};

        let collectionName = controlledId+"_"+sensorId;
        const Colecction = obtainCollection(collectionName);

        fs.createReadStream(filePath)
        .pipe(parse({delimiter: ','}))
        .on('data', async (row) => {
            const streamId = sensorId;

            if (!resultsStream[streamId]) {
                resultsStream[streamId] = [];
            }

            if (measureType == 'singleValue') {

                resultsStream[streamId].push(
                    {
                        "value": row[controlledCsvHeader],
                        "observedAt": row["Date"],
                        "metadata": {
                            "sensorId": sensorId,
                            "controlledId": controlledId,
                            "type": measuredProperty,
                            "unitCode": unitCode
                        }
                    }
                );
            } else {
                let multipleValues = [];
                for (header of controlledCsvHeader){
                    //añadir location en caso de ser una rambla
                    // quitar que sea un array el value en caso de ser una rambla
                    const regex = /_(-?\d+(\.\d+)?)$/;

                    const match = header.match(regex);
                    let value = {"value": row[header]}

                    if (match) {
                        value["depth"] = match[1]; 
                    }

                    multipleValues.push(value);
                }

                resultsStream[streamId].push(
                    {
                        "value": multipleValues,
                        "observedAt": row["Date"],
                        "metadata": {
                            "sensorId": sensorId,
                            "controlledId": controlledId,
                            "type": measuredProperty,
                            "unitCode": unitCode
                        }
                    }
                );
            }

            if ( resultsStream[streamId].length == batchSize) {
                let dataToInsert = [...resultsStream[streamId]];
                resultsStream[streamId] = [];
                await Colecction.insertMany( dataToInsert);
                dataToInsert= null;
                
            }
        }).on('end', async () => {
            const streamId = sensorId;
            if ( resultsStream[streamId].length > 0) {
                await Colecction.insertMany( resultsStream[streamId]);
                delete resultsStream[streamId];
            }
        });
        res.status(204).send();
    }
    catch(err){
        res.status(500).send(err);
    }

    
}

module.exports.debug = async (req, res, next) => {
    res.json(lecturas);
}



module.exports.uploadSensorHistoric = async (req, res, next) => {

    const oldValue = req?.body;
    const sensorId = req?.params?.idSensor;
    const controlledId = oldValue?.data[0]?.controlledAsset.object;
    const measureType = oldValue?.data[0]?.measureType.value;
    lecturas.push(controlledId);
    let measuredProperty;
    let measuredPropertyComplete;
    let oldPropertyValue;
    let observedAt;
    let unitCode;
    if (measureType == 'singleValue') {
        measuredProperty = findKeyWithObject(oldValue?.data[0])
        measuredPropertyComplete = measuredProperty
        oldPropertyValue = oldValue?.data[0]?.[measuredProperty].value
        observedAt = oldValue?.data[0]?.[measuredProperty].observedAt
        unitCode = oldValue?.data[0]?.[measuredProperty].unitCode

        await uploadSensorHistoricSingleValue(sensorId, controlledId, measuredPropertyComplete, measuredProperty, oldPropertyValue, observedAt, unitCode)

    }else{
        measuredPropertyComplete = findKeyWithObject(oldValue?.data[0])
        oldPropertyValue = oldValue?.data[0]?.[measuredPropertyComplete].value
        oldPropertyValueObservedAt = oldPropertyValue.observedAt
        measuredProperty = measuredPropertyComplete.split("Values")[0]

        await uploadSensorHistoricMultipleValue(sensorId, controlledId, measuredPropertyComplete, measuredProperty, oldPropertyValue)
    }
    
    res.status(204).send();
    return;
}

module.exports.enableUpdate = (req, res, next) => {
    isUpdateEnabled = true;
    res.status(204).send();
}

module.exports.unableUpdate = (req, res, next) => {
    isUpdateEnabled = false;
    res.status(204).send();
}


module.exports.getSensorHistoric = async (req, res, next) => {
    const sensorId = req?.params?.idSensor;
    const limit = Number(req.query.limit);
    const startDate = req.query.startDate; 
    const endDate = req.query.endDate;     

    const collectionNames = Object.keys(collections);

    const collectionsWithSensor = collectionNames.filter(cadena => cadena.includes(sensorId));

    if (collectionsWithSensor.length == 0){
        res.json({});
    }

    const Collection = collections[collectionsWithSensor[0]];

    let sensorHistoric = null;

    if(startDate && endDate){
        sensorHistoric = await QueryUtils.getHistoricByDate(Collection, startDate, endDate, null, null);
    } else if(limit){
        sensorHistoric = await QueryUtils.getLimitedHistoric(Collection, "$oldValues", limit, null, null);
    }else{
        sensorHistoric = await Collection.find({});
    }

    if (!sensorHistoric){
        sensorHistoric = {}
    }
        
    res.json(sensorHistoric);
}

module.exports.getEntityistoric = async (req, res, next) => {
    const limit = Number(req.query.limit);
    const startDate = req.query.startDate; 
    const endDate = req.query.endDate;     
    const entityId = req?.params?.idEntity;

    const collectionNames = Object.keys(collections);

    const collectionsWithEntity = collectionNames.filter(cadena => cadena.includes(entityId));

    if (collectionsWithEntity.length == 0){
        res.json({});
    }

    let finalResult = {};
    finalResult["controlledId"] = entityId;

    for (const collectionName of collectionsWithEntity){

        const Collection = collections[collectionName];
        const sensorId = collectionName.split("_")[1];

        let limitedSensorHistoricList = null;

        if(startDate && endDate){
            limitedSensorHistoricList = await QueryUtils.getHistoricByDate(Collection, startDate, endDate, null, null);
        }else if(limit){
            limitedSensorHistoricList = await QueryUtils.getLimitedHistoric(Collection, "$oldValues", limit, null, null);
        }else{
            limitedSensorHistoricList = await Collection.find({});
        }

        if (limitedSensorHistoricList){
            
            finalResult[sensorId] = limitedSensorHistoricList;
        }else{
            finalResult[sensorId] = {}
        }
    }

    res.json(finalResult);
}