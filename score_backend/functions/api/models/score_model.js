// Here, we are implementing the class with Singleton design pattern

const database = require('../database');

class ScoreModel{
    constructor() {
        if (this.instance) return this.instance;
        ScoreModel.instance = this;
    }

    get() { return database.getList('scores') }

    getById(id) { return database.get('scores', id) }

    create(score) { return database.create('scores', score) }

    delete(id) { return database.delete('scores', id) }

    update(id, score) { return database.set('scores', id, score) }
}

module.exports = new ScoreModel();