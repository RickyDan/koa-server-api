const { SALT_WORK_FACTOR } = require('../config')
const bcrypt = require('bcrypt')

exports.encrypt = password => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      if (err) reject(password)
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) resolve(password)
        resolve(hash)
      })
    })
  })
}

exports.comparePassword = (_password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(_password, hash, function (err, isMatch) {
      if (err) reject(err)
      resolve(isMatch)
    })
  })
}
