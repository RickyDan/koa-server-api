const multer = require('koa-multer')

const storage = multer.diskStorage({
  // 文件保存路径
  destination: function (req, file, cb) {
    console.log(file)
    cb(null, 'public/static/')
  },
  // 修改文件名称
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".")  //以点分割成数组，数组的最后一项就是后缀名
    cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1])
  }
})

// 加载配置
const upload = multer({ storage: storage })
module.exports = upload
