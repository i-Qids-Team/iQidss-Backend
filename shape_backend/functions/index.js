const functions = require("firebase-functions");
const express = require("express");
const app = express();
const quotesRouter = require("./api/controller/shape_controller");

app.use(express.json());
app.use("/shape", quotesRouter);

exports.api = functions.https.onRequest(app);

// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
  timeoutSeconds: 300,
});


