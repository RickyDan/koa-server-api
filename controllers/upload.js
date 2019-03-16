const uploadMethod = async (ctx) => {
  ctx.body = {
    filename: `${ctx.origin}/${ctx.req.file.filename}` //返回文件名
  }
}

module.exports = uploadMethod
