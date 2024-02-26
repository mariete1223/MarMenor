
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ExpressError = require("./utils/ExpressError");
const sensorHistoricRoutes = require("./routes/sensorHistoric")
const mongoSanitize = require('express-mongo-sanitize');
const mongoUri = process.env.MONGO_URI;
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database Connected");
})

const app = express();

app.use(bodyParser.json());
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))
app.use(mongoSanitize());
app.use(cors());



//Exported routes

app.use("/health", (req,res,next) => {
    res.json({status: "ok"})
}
)

app.use("/historic",sensorHistoricRoutes)



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