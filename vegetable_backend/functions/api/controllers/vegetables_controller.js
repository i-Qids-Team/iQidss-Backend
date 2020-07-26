const vegetablesModel = require("../models/vegetables_model");
const express = require("express");
const router = express.Router();

//Get all Vegetable Question
router.get('/', async (req, res, next) => {
    try {
        const result = await vegetablesModel.get();
        return res.json(result);

    }
    catch (e) {
        return next(e);
    }
})


//get one question
router.get('/:id', async (req, res, next) => {
    try {
        const result = await vegetablesModel.getById(req.params.id);
        if (!result) return res.sendStatus(404)
        return res.json(result)
    }
    catch (e) {
        return next(e);
    }
})

module.exports = router;
