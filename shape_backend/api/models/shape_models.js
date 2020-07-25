const database = require("../database");

// Here, we are implementing the class with Singleton design pattern

class ShapeModel {
  constructor() {
    if (this.instance) return this.instance;
    ShapeModel.instance = this;
  }

  get() {
    return database.getList("shape");
  }

  getById(id) {
    return database.get("shape", id);
  }

  create(shapes) {
    return database.create("shape", shapes);
  }

  delete(id) {
    return database.delete("shape", id);
  }

  update(id, shapes) {
    return database.set("shape", id, shapes);
  }
}

module.exports = new ShapeModel();