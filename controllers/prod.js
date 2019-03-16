const { prod: ProdModel } = require('../models')
const { checkAuth } = require('../lib/token')
const checkParams = require('../utils/checkParams')

module.exports = {
  async createProd (ctx) {
    const isAuth = checkAuth(ctx)
    if (isAuth) {
      await ProdModel.create(ctx.request.body.prod)
      ctx.body = { code: 200, message: ' 成功添加商品' }
    } else {
      ctx.body = { code: 400, message: '您无权限进行此操作' }
    }
  },

  async getProdList (ctx) {
    let { page = 1, pageSize = 10 } = ctx.query,
    offset = (page - 1) * pageSize
    pageSize = parseInt(pageSize)
    const params = checkParams(ctx.query)
    const data = await ProdModel.findAll({
      where: params,
      limit: pageSize,
      offset: offset,
      order: [['createdAt']],
      row: true,
      distinct: true
    })
    ctx.body = { code: 200, data }
  }
}
