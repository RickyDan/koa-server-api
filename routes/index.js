const router = require('koa-router')()
const UserController = require('../controllers/user')
const ProdController = require('../controllers/prod')

// 登录注册
router.post('/login', UserController.login)
router.delete('/delete', UserController.delete)
router.post('/register', UserController.register)
router.get('/', UserController.getUserList)
router.get('/prods', ProdController.getProdList)
router.post('/prod/add', ProdController.createProd)

module.exports = router
