const readdir = require('recursive-readdir-synchronous')

module.exports = function (dir, filter = alwaysTrue) {
  if (filter instanceof RegExp) filter = buildFilterByRegex(filter)
  return readdir(dir).filter(filter).map(file => require(file))
}

function buildFilterByRegex (regex) {
  return function (x) {
    return regex.test(x)
  }
}

function alwaysTrue () {
  return true
}