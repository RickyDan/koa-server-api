const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const mount = require('koa-mount')
const graphql = require('graphql')
const graphqlHTTP = require('koa-graphql')
const graphqlModel = require('./graphql')
const path = require('path')
const logger = require('koa-logger')
const static = require('koa-static')
const errorHandle = require('./middlewares/errorHandle')
const checkToken = require('./middlewares/checkToken')

// const router = require('./routes')
const db = require('./models')

const app = new Koa()

let schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      prods: {
        type: new graphql.GraphQLList(graphqlModel.Prod.type)
      }
    }
  })
})
app
  .use(cors())
  .use(errorHandle)
  .use(checkToken)
  .use(logger())
  .use(bodyParser())
  .use(static(
    path.join(__dirname, './public/static')
  ))

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})))

// app.use(router.routes(), router.allowedMethods())

app.listen(8000, () => {
   db.sequelize
    .sync({ force: false, logging: false })
    .then(() => {
      console.log('sequelize connect success')
      console.log('sever listen on http://127.0.0.1:8000')
    })
    .catch(err => {
      console.log(err)
    })
})
