const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OldValueSchema = new Schema({
    value: {
        type: Number,
        required: true
    },
    observedAt: {
        type: Date,
        required: true
    },
    unitCode: {
        type: String,
        required: false
    }
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
    oldValues: [OldValueSchema],
    
});


module.exports = mongoose.model("SensorHistoric", sensorHistoricSchema);