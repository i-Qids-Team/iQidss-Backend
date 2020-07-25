const functions = require('firebase-functions');
//add express JS for Routing
const express = require("express");

const app = express();
// const db = require("./api/databaseVegetables");
const vegetableRouter = require("./api/controllers/vegetables_controller");

app.use(express.json());

app.use("/vegetable", vegetableRouter);

// app.use(app.router);
// vegetableRouter.initialize(app);

// app.get("/", (req, res, next) =>
//     res.json({ message: "Firebase function service is working" })
// );

// app.get("/vegetable", (req, res, next) =>
//     res.json({ message: "Get a list of vegetable questions" })
// );

// app.get("/newuser/:name", async (req, res, next) => {
//     const name = req.params.name;
//     const user = { name: name };
//     const result = await db.create("users", user);
//     user.id = result.id;
//     return res.json(user);
// });

// app.get("/deleteuser/:id", async (req, res, next) => {
//     const userId = req.params.id;
//     const result = await db.delete("users", userId);
//     console.log(result);
//     return res.json(userId);
// });


exports.vegetable = functions.https.onRequest(app);


// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
    timeoutSeconds: 300,
});

// exports.hello = functions.https.onRequest((req, res) => {
//     res.json({ message: "Hello World from Firebase function" });
//   });

//   exports.hi = functions.https.onRequest((req, res) => {
//     res.json({ message: "Hi there. Greeting from Firebase" });
//   });


