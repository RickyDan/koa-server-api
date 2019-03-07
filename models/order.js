const dayjs = require('dayjs')

module.exports = (sequelize, dataTypes) => {
  const Order = sequelize.define(
    'order',
    {
      id: {
        type: dataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
      },
      orderNum: {
        type: dataTypes.INTEGER(20),
        allowNull: false
      },
      prodName: {
        type: dataTypes.STRING(120),
        allowNull: false
      },
      status: {
        type: dataTypes.TINYINT,
        defaultValue: 0,
        comment: '订单状态'
      },
      count: dataTypes.INTEGER(11),
      price: dataTypes.INTEGER(11),
      createdAt: {
        type: dataTypes.DATE,
        defaultValue: dataTypes.NOW,
        get() {
          return dayjs(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss')
        }
      },
      updatedAt: {
        type: dataTypes.DATE,
        defaultValue: dataTypes.NOW,
        get() {
          return dayjs(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss')
        }
      }
    }, {
      timestamp: true
    }
  )
  Order.associate = models => {
    Order.belongsTo(models.user, {
      foreignKey: 'userId',
      targetKey: 'id',
      constraints: false
    })
  }
  return Order
}
