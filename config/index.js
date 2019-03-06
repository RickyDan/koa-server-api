const db = require('./db')

module.exports = {
  db,
  SALT_WORK_FACTOR: 10,
  TOKEN_SECRET: 'rickydan',
  TOKEN_EXPIRESIN: '24h'
}
