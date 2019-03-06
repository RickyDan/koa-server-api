const config = {
  database: 'graph_demo',
  user: 'root',
  password: '19901112',
  options: {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      charset: 'utf8mb4'
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 1000
    },
    define: {
      timestamps: false,
      freezeTableName: true
    },
    timezone: '+08:00' // 东八区时间
  }
}

module.exports = config
