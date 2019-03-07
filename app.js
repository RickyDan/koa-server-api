const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const logger = require('koa-logger')
const errorHandle = require('./middlewares/errorHandle')
const checkToken = require('./middlewares/checkToken')

const router = require('./routes')
const db = require('./models')

const app = new Koa()

app
  .use(cors())
  .use(errorHandle)
  .use(checkToken)
  .use(logger())
  .use(bodyParser())

app.use(router.routes(), router.allowedMethods())

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
