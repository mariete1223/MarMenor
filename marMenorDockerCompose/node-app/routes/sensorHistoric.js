const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync.js");
const sensorHistoric = require("../controllers/sensorHistoric");



router.route("/debug")
    .get(catchAsync(sensorHistoric.debug))


router.route("/subscription/Buoy")
    .post(catchAsync(sensorHistoric.updateBuoy))

router.route("/subscription/Device")
    .post(catchAsync(sensorHistoric.updateDevice))

router.route("/subscription/Ravine")
    .post(catchAsync(sensorHistoric.updateRavine))

router.route("/subscription/SoundingPlace")
    .post(catchAsync(sensorHistoric.updateSoundingPlace))

router.route("/subscription/DeviceMeasurement")
    .post(catchAsync(sensorHistoric.updateDeviceMeasurement))

router.route("/subscription/DeviceMeasurement/filtered")
    .post(catchAsync(sensorHistoric.updateDeviceMeasurementFiltered))

module.exports = router;