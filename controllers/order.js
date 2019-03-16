const uuid = require('node-uuid')
const { order: OrderModel } = require('../models')
const { checkAuth } = require('../lib/token')
const checkParams = require('../utils/checkParams')

module.exports = {
  async createOrder (ctx) {
    const isAuth = checkAuth(ctx)
    if (isAuth) {
      await OrderModel.create({...ctx.request.body, orderNum: uuid.v4()})
      ctx.body = { code: 200, message: '成功添加订单' }
    } else {
      ctx.body = { code: 400, message: '您无权限进行此操作' }
    }
  },

  async getOrderList (ctx) {
    let { page = 1, pageSize = 10 } = ctx.query,
    offset = (page - 1) * pageSize
    pageSize = parseInt(pageSize)
    const params = checkParams(ctx.query)
    const data = await OrderModel.findAll({
      where: params,
      limit: pageSize,
      offset: offset,
      order: [['createdAt']],
      row: true,
      distinct: true
    })
    ctx.body  = { code: 200, data }
  }
}
