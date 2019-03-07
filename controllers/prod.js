const { prod: ProdModel } = require('../models')
const { checkAuth } = require('../lib/token')

module.exports = {
  async createProd (ctx) {
    const isAuth = checkAuth(ctx)
    if (isAuth) {
      const data = ProdModel.create(ctx.request.body)
      ctx.body = { code: 200, message: ' 成功添加商品', data }
    } else {
      ctx.body = { code: 400, message: '您无权限进行此操作' }
    }
  },

  async getProdList (ctx) {
    let { page = 1, pageSize = 10, prodname, category, supplier } = ctx.query,
    offset = (page - 1) * pageSize
    pageSize = parseInt(pageSize)

    const data = await Prod.findAll({
      where: {
        prodname: prodname,
        category: category,
        supplier: supplier
      },
      offset,
      limit: pageSize,
      order: [['createdAt', 'DESC']],
      row: true,
      distinct: true
    })
    ctx.body = { code: 200, ...data }
  }
}
