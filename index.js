const htmlTags = require('html-tags')
const tag = require('xmltag')

module.exports = htmlTags.reduce((acc, t) => {
  return Object.assign({}, acc, { [t]: tag(t) })
}, {})
