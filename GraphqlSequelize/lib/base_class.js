const _ = require('lodash')
const SequelizeHelper = require('./sequelize.helper')

class GraphqlSequelize {
    constructor(opts) {
        let defaults = {
            models: null                  
//          schemaPath: capability to add custom paths
        }
        Object.assign(this,defaults,opts)
        this.seqModels = {}
        this.initModels()
        if(_.isEmpty(this.seqModels)) 
            throw 'models are missing'
    }

    initModels() {
        let models = this.models
        let formattedModels = SequelizeHelper.AbstractAllModels(models, this)
        console.log(formattedModels)
        _.merge(this.seqModels, formattedModels)
    }
    
}

module.exports = GraphqlSequelize