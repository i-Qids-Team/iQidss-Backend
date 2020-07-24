const functions = require('firebase-functions')
const express = require("express")
const app = express();
const colorRouter = require('./api/controllers/color_controller')

app.use(express.json())
app.use('/color', colorRouter)

exports.colors = functions.https.onRequest(app)

// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
    timeoutSeconds: 300
})

exports.colorsetupdb = functions.https.onRequest(require('./setup_database'))