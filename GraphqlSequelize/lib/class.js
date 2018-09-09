class GraphqlSequelize {
    constructor(opts) {
        let defaults = {
            def: 'seq'
        }
        Object.assign(this,defaults,opts)
    }
    
}

module.exports = GraphqlSequelize