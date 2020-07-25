
const animalModel = require('../models/animal_model')
const express = require('express')
const router = express.Router()

// Get all animals
router.get('/', async (req, res, next) => {
    try {
        const result = await animalModel.get()
        return res.json(result)
    }
    catch (e) {
        return next(e)
    }
})

// Get one animal
router.get('/:id', async (req, res, next) => {
    try {
        const result = await animalModel.getById(req.params.id)
        if (!result) return res.sendStatus(404)
        return res.json(result)
    }
    catch (e) {
        return next(e)
    }
})


// Create a new score
router.post('/', async (req, res, next) => {
    try {
        const result = await animalModel.create(req.body)
        if (!result) return res.sendStatus(409)
        return res.status(201).json(result)
    }
    catch (e) {
        return next(e)
    }
})

// Delete a score
router.delete('/:id', async (req, res, next) => {
    try {
        const result = await animalModel.delete(req.params.id)
        if (!result) return res.sendStatus(404)
        return res.sendStatus(200)
    }
    catch (e) {
        return next(e)
    }
})

// Update a score
router.patch('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body

        const doc = await animalModel.getById(id)
        if (!doc) return res.sendStatus(404)

        // Merge existing fields with the ones to be updated
        Object.keys(data).forEach((key) => doc[key] = data[key])

        const updateResult = await animalModel.update(id, doc)
        if (!updateResult) return res.sendStatus(404)

        return res.json(doc)
    }
    catch (e) {
        return next(e)
    }
})

// Replace a score
router.put('/:id', async (req, res, next) => {
    try {
        const updateResult = await scoresModel.update(req.params.id, req.body)
        if (!updateResult) return res.sendStatus(404)

        const result = await scoressModel.getById(req.params.id)
        return res.json(result)

    }
    catch (e) {
        return next(e)
    }
})

module.exports = router