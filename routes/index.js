const router = require('koa-router')()
const UserController = require('../controllers/user')
const ProdController = require('../controllers/prod')
const UploadMethod = require('../controllers/upload')
const upload = require('../utils/upload')

// 登录注册
router.post('/login', UserController.login)
router.delete('/delete', UserController.delete)
router.post('/register', UserController.register)
router.get('/', UserController.getUserList)
router.get('/prods', ProdController.getProdList)
router.post('/prod/add', ProdController.createProd)
// 上传图片路由
router.post('/upload', upload.single('file'), UploadMethod)
module.exports = router
