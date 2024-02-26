const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync.js");
const sensorHistoric = require("../controllers/sensorHistoric");



router.route("/debug")
    .get(catchAsync(sensorHistoric.debug))

router.route("/enable")
    .get(catchAsync(sensorHistoric.enableUpdate))

router.route("/disable")
    .get(catchAsync(sensorHistoric.unableUpdate))

router.route("/uploadFile/:idEntity")
    .post(catchAsync(sensorHistoric.uploadFile))

router.route("/:idSensor")
    .get(catchAsync(sensorHistoric.getSensorHistoric))
    .post(catchAsync(sensorHistoric.uploadSensorHistoric))

router.route("/entity/:idEntity")
    .get(catchAsync(sensorHistoric.getEntityistoric))

module.exports = router;