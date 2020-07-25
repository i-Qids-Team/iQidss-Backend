const database = require('../database');

// Here, we are implementing the class with Singleton design pattern

class AnimalModel {
    constructor() {
        if (this.instance) return this.instance;
        AnimalModel.instance = this;
    }

    get() { return database.getList('animal') }

    getById(id) { return database.get('animal', id) }

    create(name) { return database.create('animal', name) }

    delete(id) { return database.delete('animal', id) }

    update(id, name) { return database.set('animal', id, score) }
}

module.exports = new AnimalModel();