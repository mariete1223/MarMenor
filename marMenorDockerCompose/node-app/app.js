
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ExpressError = require("./utils/ExpressError");
const sensorHistoricRoutes = require("./routes/sensorHistoric")
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

//Exported routes
app.use("/health", (req,res,next) => {
    res.json({status: "ok"})
    }
);

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
                "value": "Tomas come pingas"
            },
            "source": {
                "type": "Property",
                "value": "https://idearm.imida.es/cgi/siomctdmarmenor/#CTD-E10"
            }
        }
    ]
}

app.use("/historic",sensorHistoricRoutes);

app.all('*', (req,res,next) => {
    next(new ExpressError("Page Not Found!!",404));
})

app.use((err,req,res,next) => {
    if(!err.message) err.message= "Something Went Wrong!!"
    res.json({error: err.message});
})

app.listen(3000,() => {
    console.log("serving in port 3000")
});