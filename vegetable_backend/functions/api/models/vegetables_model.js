const databaseVege = require("../databaseVegetables");

class VegetablesModel {
    constructor() {
        if (this.instance) return this.instance;
        VegetablesModel.instance = this;
    }

    get() {
        return databaseVege.getList('vegetable')
    }

    getById(id) {
        return databaseVege.get('vegetable', id)

    }

}

module.exports = new VegetablesModel();