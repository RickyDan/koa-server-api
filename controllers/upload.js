const uploadMethod = async (ctx) => {
  console.log('upload')
  ctx.body = {
    filename: ctx.req.file.filename//返回文件名
  }
}

module.exports = uploadMethod
