const readdir = require('recursive-readdir-synchronous')

module.exports = function (dir, filter = alwaysTrue) {
  return readdir(dir).filter(filter).map(file => require(file))
}

function alwaysTrue () {
  return true
}