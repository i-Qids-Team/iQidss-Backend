const databaseVege = require ("../databaseVegetables");

class VegetablesModel {
    constructor() {
        if (this.instance) return this.instance;
        VegetablesModel.instance = this;
    }

    get() {
        return databaseVege.getList('vegetable');
    }

    getByid(id) {
        return databaseVege.get('vegetable', id);

    }

    // create(vege) {
    //     return databaseVege.create('vegetable', vege);
    // }

    // delete(id) {
    //     return databaseVege.delete('vegetable', id);
    // }

    // update(id, vege) {
    //     return databaseVege.set('vegetable', id, vege);
    // }
}

module.exports = new VegetablesModel();