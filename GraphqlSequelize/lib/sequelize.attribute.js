class Attribues {
    constructor(opts) {
        let defaults = {
            name:null,
            schemaType:null,
            relation:'one',//opts one or many
            actual:null,
            type:'property',//opts property or assosiation
            parentType:null,//mongoose or sequelize
        }
        Object.assign(this, defaults, opts)
    }
}