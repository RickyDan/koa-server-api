const router = require('koa-router')()
const UserController = require('../controllers/user')

// 登录注册
router.post('/login', UserController.login)
router.post('/register', UserController.register)

router.get('/', async ctx => {
  ctx.body = 'hello Koa2'
})

module.exports = router
