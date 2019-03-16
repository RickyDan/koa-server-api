const router = require('koa-router')()
const UserController = require('../controllers/user')
const ProdController = require('../controllers/prod')
const OrderController = require('../controllers/order')
const UploadMethod = require('../controllers/upload')
const upload = require('../utils/upload')

// 登录注册
router.post('/login', UserController.login)
router.delete('/delete', UserController.delete)
router.post('/register', UserController.register)
router.get('/', UserController.getUserList)
// 商品模块
router.get('/prods', ProdController.getProdList)
router.post('/prod/add', ProdController.createProd)
// 订单模块
router.get('/orders', OrderController.getOrderList)
router.post('/order/add', OrderController.createOrder)
// 上传图片路由
router.post('/upload', upload.single('file'), UploadMethod)
module.exports = router
