const htmlTags = require('html-tags')
const jshtml = require('../index')

describe('jssvg', () => {
  it('has the tag functions', () => {
    expect(jshtml.div({ foo: 'bar' })).toEqual('<div foo="bar" />')
  })

  it('works with children', () => {
    expect(jshtml.div(jshtml.div())).toEqual('<div><div /></div>')
  })

  it('has all the functions', () => {
    expect(Object.keys(jshtml).length).toEqual(htmlTags.length)
  })
})
