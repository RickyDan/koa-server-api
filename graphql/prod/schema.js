const { GraphQLSchema, GraphQLID, GraphQLNonNull, GraphQLObjectType } = require('graphql')
const prodType = require('./type')
const prodModel = require('../../models/prod')

const prods = {
  type: prodType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    return prodModel.findById(params.id)
  }
}

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'prod',
    fields: prods
  })
})
