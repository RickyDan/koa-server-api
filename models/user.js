const dayjs = require('dayjs')

module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define(
    'user',
    {
      // id sequelize 默认创建...
      id: {
        type: dataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: dataTypes.STRING(50),
        allowNull: false,
        unique: true
      },
      auth: {
        type: dataTypes.TINYINT,
        defaultValue: 2,
        comment: '用户权限：1 - admin, 2 - 普通用户'
      },
      nickname: {
        type: dataTypes.STRING(150),
        unique: true
      },
      password: {
        type: dataTypes.STRING,
        allowNull: false,
        comment: '通过 bcrypt 加密后的密码'
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
    },
    {
      timestamps: true
    }
  )
  return User
}
