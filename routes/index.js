const router = require('koa-router')()
const UserController = require('../controllers/user')

// 登录注册
router.post('/login', UserController.login)
router.delete('/delete', UserController.delete)
router.post('/register', UserController.register)
router.get('/', UserController.getUserList)

module.exports = router
