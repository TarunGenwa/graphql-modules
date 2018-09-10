const util = require('./util')

class SequelizeModel {
    constructor(opts) {
        let defaults = {
            type: 'sequelize', // based on orm 
            name: null,
            schemaName:null,
            model: null,
            attributes:null,
        }
        Object.assign(this, defaults, opts)
    }


    get capName() {
        return util.capitalizeFirstLetter(this.name)
    }
}

module.exports = SequelizeModel

// let info = {
//     type                :'sequelize',
//     name                : model.name,
//     objectKey           : key,
//     attributes          : attributes,
//     model               : model,
//     options             : options,
// }
