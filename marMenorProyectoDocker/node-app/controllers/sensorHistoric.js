const SensorHistoric = require("../models/sensorHistoric");
const QueryUtils = require("../database/queryUtils");

function findKeyWithObject(data) {
    for (const key in data) {
        if (key == 'controlledAsset') continue;
        const currentValue = data[key];
        if (typeof currentValue === 'object') {
            return key;
        } 
    }
    return null;
}


module.exports.uploadSensorHistoric = async (req, res, next) => {
    const oldValue = req?.body;
    const sensorId = req?.params?.idSensor;
    const controlledId = oldValue?.data[0]?.controlledAsset.object;
    const measuredProperty = findKeyWithObject(oldValue?.data[0])
    const oldPropertyValue = oldValue?.data[0]?.[measuredProperty].value
    const observedAt = oldValue?.data[0]?.[measuredProperty].observedAt
    const unitCode = oldValue?.data[0]?.[measuredProperty].unitCode

    const sensorEntity = await SensorHistoric.findOne({sensorId});
    if (sensorEntity) {
        const filter = { sensorId };
        const update = {
            $push: {
                oldValues: {
                    value: oldPropertyValue,
                    observedAt,
                    unitCode
                }
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
        oldValues: {
            value: oldPropertyValue,
            observedAt,
            unitCode
        }
    });
    
    await sensorHistoric.save();
    
    res.status(204).send();
    return;
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