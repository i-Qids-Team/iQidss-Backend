const functions = require('firebase-functions')
const express = require("express")
const app = express();
const animalRouter = require('./api/controllers/animal_controller')

app.use(express.json())
app.use('/animal', animalRouter)

exports.animal = functions.https.onRequest(app)

// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
    timeoutSeconds: 300
})

// exports.animalsetupdb = functions.https.onRequest(require('./setup_database'))