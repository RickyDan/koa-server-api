const dayjs = require('dayjs')

module.exports = (sequelize, dataTypes) => {
  const Prod = sequelize.define('prod', {
    id: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true
    },
    prodname: {
      type: dataTypes.STRING(250),
      allowNull: false
    },
    category: {
      type: dataTypes.STRING(120),
      allowNul: false
    },
    supplier: dataTypes.STRING(120),
    price: {
      type: dataTypes.INTEGER(11),
      allowNull: false
    },
    count: {
      type: dataTypes.INTEGER(11),
      allowNull: false
    },
    prodImg: {
      type: dataTypes.STRING(250),
      allowNull: false
    },
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
  })
  return Prod
}
