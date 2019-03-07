import {
  GraphQLList,
  GraphQLInt,
} from 'graphql'

import models from '../models/prod'
import Prod from './prod'

export default {
  type: new GraphQLList(Prod),
  args: {
    first: {
      type: GraphQLInt,
      description: 'Limits the number of results returned in the page. Defaults to 10.',
    },
    offset: {
      type: GraphQLInt
    }
  },
  resolve (root, args) {
    const offset = args.offset || 0
    const limit = args.first || 10
    delete args.offset
    delete args.first
    return models.prod.findAll({where: args, offset, limit})
  }
}
