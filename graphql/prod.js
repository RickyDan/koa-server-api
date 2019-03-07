import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} from 'graphql'

export default new GraphQLObjectType({
  name: 'prod',
  fields () {
    return {
      id: {
        type: GraphQLID,
        description: "prod's id",
        resolve (prod) {
          return prod.id
        }
      },
      prodnmae: {
        type: GraphQLString,
        description: "prod's name",
        resolve (prod) {
          return prod.prodname
        }
      },
      category: {
        type: GraphQLString,
        description: "prod's category",
        resolve (prod) {
          return prod.category
        }
      },
      price: {
        type: GraphQLInt,
        descript: "prods' price",
        resolve (prod) {
          return prod.price
        }
      },
      count: {
        type: GraphQLInt,
        descript: "prods' count",
        resolve (prod) {
          return prod.count
        }
      },
    }
  }
})
