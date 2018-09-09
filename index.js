//decide whether to use an encapsulated class

const GraphqlResolvers = require('./GraphqlResolvers')
const GraphqlSequelize = require('./GraphqlSequelize')
const GraphApi         = require('./lib/class')

module.exports = {
    GraphApi,
    GraphqlResolvers,
    GraphqlSequelize
}
