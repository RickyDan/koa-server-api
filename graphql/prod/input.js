const graphql = require('graphql')

module.exports = new graphql.GraphQLInputObjectType({
  name: 'Prod',
  description: 'a prod',
  fields: () => ({
    id: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLInt),
      description: 'prod id'
    },
    prodname: {
      type: graphql.GraphQLString,
      description: 'name of the prod'
    },
    price: {
      type: graphql.GraphQLInt,
      description: 'price of the prod'
    },
    count: {
      type: graphql.GraphQLInt,
      description: 'count of the prod'
    },
    prodImg: {
      type: graphql.GraphQLString,
      description: 'prod img'
    },
    supplier: {
      type: graphql.GraphQLString,
      description: 'supplier of the prod'
    },
    category: {
      type: graphql.GraphQLString,
      description: 'category of the prod'
    },
    createdAt: {
      type: graphql.GraphQLString,
      description: 'the prod created date'
    },
    updatedAt: {
      type: graphql.GraphQLString,
      description: 'the prod update date'
    }
  })
})
