const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sensorHistoricSchema = new Schema({
    observedAt: {
        type: Date,
        required: true
    },
    value: {
        type: Schema.Types.Mixed,
        required: true
    },
    metadata: {
        type: {
            type: String,
            required: false
        },
        sensorId: {
            type: String,
            required: true
        },
        controlledId: {
            type: String,
            required: true
        },
        unitCode: {
            type: String,
            required: false
        },
    }
    
}, 
{
    timeseries: {
      timeField: 'observedAt',
      metaField: 'metadata',
      granularity: 'seconds'
    },
    autoCreate: false,
});


module.exports = sensorHistoricSchema;