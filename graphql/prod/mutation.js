const graphql = require('graphql')
const path = require('path')

const db = require(path.join(__dirname, '../../models'))

const graphSequel = require('graphql-sequelize')

module.exports = new graphql.GraphQLObjectType({
  name: 'prods',
  fields: () => ({
    getAll: {
      type: new graphql.GraphQLList(require(path.join(__dirname, './type'))),
      description: 'get all prod',
      args: {
        name: {
          type: graphql.GraphQLString
        },
        limit: {
          type: graphql.GraphQLInt
        }
      },
      resolve: graphSequel.resolver(db.prod)
    }
  })
})
