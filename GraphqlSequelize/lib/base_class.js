const _ = require('lodash')
const SequelizeHelper = require('./sequelize.helper')
const graphql = require('../../../ot-starter/node_modules/graphql')
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLID } = graphql


class GraphqlSequelize {
    
    constructor(opts){
        let defaults = {
            models: null
        }
        Object.assign(this, defaults, opts)
        if (_.isEmpty(this.models)) throw 'models are missing'
    }

    getTypeDefsList() {
        let typedef = {}
        let models = Object.keys(this.models)

        models.map((item)=>{
            typedef[item] = this.createTypeDefObject(this.models[item])
        })
        // for ( let name in models ){
        //     console.log(name)
//            typedef[name] = this.createTypeDefObject(this.models[name])

                
        // for (let model in models){
        //     console.log(Object.keys(model))
        // }
        // for ( let model in this.models ){
        //     console.log (model.name)
        //     if ( model.name === undefined ) continue;
        //     list.push(this.createTypeDefObject(model))
        // }
        return typedef
        
        // let typeDefList = [] 
        // let models = this.models
        // // return the list of all the graphql object types
        // let typedef
        // for ( let model in models ) {
        //     typedef = this.createTypeDefObject(model)
        //     typeDefList.push(arr)
        //     //            typeDefList.push(this.createTypeDefObject(model))
        // }         
        // return typeDefList
    }

    createTypeDefObject(model) {
        // passing model.attributes
        let obj = {} 
        obj.name = model.name 
        let attributes = this.abstractModelAttributes(model.attributes) 
        // object literal
        // attributes should be modelled with Graphql int or string types
        // nested attributes based on the associations   
        obj.fields = () => ({
            ...attributes
        })
        console.log(obj)
        return new GraphQLObjectType({...obj})
    }

    abstractModelAttributes(attributes) {
        let newAttributes = {}
        for ( let key in attributes ) {
            // console.log(key)
            //console.log(attributes[key].type)
            newAttributes[key] = { 
                type : this.graphqlType(attributes[key].type.key)
            }
        }
//        console.log('newattributes',newAttributes)
        return newAttributes
        
    }

    graphqlType(type) {
        if ( type == 'UUID' ) return GraphQLID
        else if ( type == 'STRING' ) return GraphQLString
        else if ( type == 'INTEGER') return GraphQLInt
        else return GraphQLString
    }

}

module.exports = GraphqlSequelize


