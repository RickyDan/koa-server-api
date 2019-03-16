module.exports = (params = {}) => {
  let targetParams = {}
  Object.keys(params).forEach(item => {
    switch (item) {
      case 'page':
      case 'pageSize':
        break
      default:
        params[item] ? targetParams[item] = params[item] : null
        break
    }
  })
  return targetParams
}

