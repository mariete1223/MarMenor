const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OldValueSchemaSingle = new Schema({
    value: {
        type: Number,
        required: true
    },
    observedAt: {
        type: Date,
        required: true
    }
});

const SchemaMultipleBasic = new Schema({
    depth: {
        value: {
            type: Number,
            required: true
        },
        unitCode: {
            type: String,
            required: false
        }
    },
    measure: {
        value: {
            type: Number,
            required: true
        },
        unitCode: {
            type: String,
            required: false
        }
    },
    observedAt: {
        type: Date,
        required: true
    },
    
});

const OldValueSchemaMultiple = new Schema({
    value: {
        type: [SchemaMultipleBasic],
        required: true
    },
    
});

const sensorHistoricSchema = new Schema({
    sensorId: {
        type: String,
        required: true,
        unique: true
    },
    controlledId: {
        type: String,
        required: true,
    },
    measuredProperty: {
        type: String,
        required: true,
    },
    unitCode: {
        type: String,
        required: false
    },
    oldValues: {
        type: [Schema.Types.Mixed],
        required: true,
    }
    
});


module.exports = mongoose.model("SensorHistoric", sensorHistoricSchema);