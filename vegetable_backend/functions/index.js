const functions = require('firebase-functions');
//add express JS for Routing
const express = require("express");

const app = express();
// const db = require("./api/databaseVegetables");
const vegetableRouter = require("./api/controllers/vegetables_controller");

app.use(express.json());

app.use("/vegetable", vegetableRouter);

exports.vegetable = functions.https.onRequest(app);


// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
    timeoutSeconds: 300,
});



