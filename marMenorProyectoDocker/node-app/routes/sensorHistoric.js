const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync.js");
const sensorHistoric = require("../controllers/sensorHistoric");





router.route("/:idSensor")
    .get(catchAsync(sensorHistoric.getSensorHistoric))
    .post(catchAsync(sensorHistoric.uploadSensorHistoric))

router.route("/entity/:idEntity")
    .get(catchAsync(sensorHistoric.getEntityistoric))



module.exports = router;