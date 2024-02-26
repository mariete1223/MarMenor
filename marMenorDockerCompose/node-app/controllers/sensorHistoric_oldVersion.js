const SensorHistoric = require("../models/sensorHistoric");
const QueryUtils = require("../database/queryUtils");
const axios = require('axios');
const parse = require('csv-parser');
const fs = require('fs');
const path = require('path');
const { set } = require("mongoose");

const batchSize = 10000;
isUpdateEnabled = false;

lecturas = []


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

async function checkExistsMoongose(sensorId){
    return await SensorHistoric.exists({sensorId});

}


async function uploadSensorHistoricSingleValue(sensorId, controlledId, measuredPropertyComplete, measuredProperty, oldPropertyValue, observedAt, unitCode)  {

        if (isUpdateEnabled) {
            update(controlledId, measuredPropertyComplete, measureType, oldPropertyValue, observedAt, unitCode);
        }

        const sensorEntity = await SensorHistoric.findOne({sensorId});
        if (sensorEntity) {
            const filter = { sensorId };
            const update = {
                $push: {
                    oldValues: [{
                        value: oldPropertyValue,
                        observedAt
                    }]
                }
            };
            await SensorHistoric.updateOne(filter, update);
            res.status(204).send();
            return;
        }
    

        // Si no se modificó ningún documento, entonces no existía uno con ese sensorId
        const sensorHistoric = new SensorHistoric({
            sensorId,
            controlledId,
            measuredProperty,
            unitCode,
            oldValues: [[{
                value: oldPropertyValue,
                observedAt
            }]]
        });
        await sensorHistoric.save();
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

async function updateFromFile( sensorId, controlledId, measuredProperty, unitCode, result){
    const exist = await checkExistsMoongose(sensorId);
    if(!exist){

        const sensorHistoric = new SensorHistoric({
            sensorId,
            controlledId,
            measuredProperty,
            unitCode,
            oldValues: result
        });
        await sensorHistoric.save();

    }else{
        const filter = { sensorId };
        const update = {
            $push: {
                oldValues: { $each: result}
            }
        };
        await SensorHistoric.updateOne(filter, update);
    }

}


module.exports.uploadFile = async (req, res, next) => {
        
    try{
        const payload = req?.body;
        const controlledId = req?.params?.idEntity;
        const sensorId = payload?.sensorId;
        const measuredProperty = payload?.controlledProperty;
        const controlledCsvHeader = payload?.controlledCsvHeader;
        const unitCode = payload?.unitCode;
        const file = payload?.file;
        const filePath = __dirname+"/../historicData/SAIHdatasActualizados/piezometros/"+file;
        lecturas.push(sensorId);
        lecturas.push(controlledId);
        var result = [];
        fs.createReadStream(filePath)
        .pipe(parse({delimiter: ','}))
        .on('data', async (row) => {
            result.push(
                {
                    "value": row[controlledCsvHeader],
                    "observedAt": row["Date"]
                }
            );

            if (result.length == batchSize) {
                await updateFromFile(sensorId, controlledId, measuredProperty, unitCode, result);
                result = [];
            }

            
        }).on('end', async () => {
            if (result.length > 0) {
                await updateFromFile(sensorId, controlledId, measuredProperty, unitCode, result);
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
    lecturas.push(oldValue);
    const sensorId = req?.params?.idSensor;
    const controlledId = oldValue?.data[0]?.controlledAsset.object;
    const measureType = oldValue?.data[0]?.measureType.value;
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

        uploadSensorHistoricSingleValue(sensorId, controlledId, measuredPropertyComplete, measuredProperty, oldPropertyValue, observedAt, unitCode)

    }else{
        measuredPropertyComplete = findKeyWithObject(oldValue?.data[0])
        oldPropertyValue = oldValue?.data[0]?.[measuredPropertyComplete].value
        oldPropertyValueObservedAt = oldPropertyValue.observedAt
        measuredProperty = measuredPropertyComplete.split("Values")[0]

        if (isUpdateEnabled) {
            update(controlledId, measuredPropertyComplete, measureType, oldPropertyValue, oldPropertyValueObservedAt);
        }

        const sensorEntity = await SensorHistoric.findOne({sensorId});
        if (sensorEntity) {
            const filter = { sensorId };
            const update = {
                $push: {
                    oldValues: oldPropertyValue
                }
            };
            await SensorHistoric.updateOne(filter, update);
            res.status(204).send();
            return;
        }


        const sensorHistoric = new SensorHistoric({
            sensorId,
            controlledId,
            measuredProperty,
            oldValues: [oldPropertyValue]
            
        });
        await sensorHistoric.save();
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


    let sensorHistoric = null;

    if(startDate && endDate){
        sensorHistoric = await QueryUtils.getHistoricByDate(SensorHistoric, startDate, endDate, "sensorId", sensorId);
    } else if(limit){
        sensorHistoric = await QueryUtils.getLimitedHistoric(SensorHistoric, "$oldValues", limit, "sensorId", sensorId);
    }else{
        sensorHistoric = await SensorHistoric.findOne({"sensorId":sensorId});
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

    let limitedSensorHistoricList = null;

    if(startDate && endDate){
        limitedSensorHistoricList = await QueryUtils.getHistoricByDate(SensorHistoric, startDate, endDate, "controlledId", entityId);
    }else if(limit){
        limitedSensorHistoricList = await QueryUtils.getLimitedHistoric(SensorHistoric, "$oldValues", limit, "controlledId", entityId);
    }else{
        limitedSensorHistoricList = await SensorHistoric.find({"controlledId": entityId});
    }

    res.json(limitedSensorHistoricList);
}