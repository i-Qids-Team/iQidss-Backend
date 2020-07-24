const database = require('../database');

// Here, we are implementing the class with Singleton design pattern

class ColorModel {
    constructor() {
        if (this.instance) return this.instance;
        ColorModel.instance = this;
    }

    get() { return database.getList('color') }

    getById(id) { return database.get('color', id) }

    create(name) { return database.create('color', name) }

    delete(id) { return database.delete('color', id) }

    update(id, name) { return database.set('color', id, score) }
}

module.exports = new ColorModel();