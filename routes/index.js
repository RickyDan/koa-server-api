const router = require('koa-router')()
const UserController = require('../controllers/user')

// 登录注册
router.post('/login', UserController.login)
router.get('/userList', UserController.getUserList)
router.delete('/delete', UserController.delete)
router.post('/register', UserController.register)

router.get('/', async ctx => {
  ctx.body = 'hello Koa2'
})

module.exports = router
