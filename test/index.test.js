const requireAll = require('../index')

describe('requireAll', function () {
  it('should require all modules', () => {
    const modules = requireAll(__dirname + '/a')
    expect(modules.length).toBe(3)
    expect(modules.includes('a')).toBe(true)
    expect(modules.includes('b')).toBe(true)
    expect(modules.includes('c')).toBe(true)
  })

  it('should not require c in lib dir', () => {
    const modules = requireAll(__dirname + '/a', file => !/\/lib\//.test(file))
    expect(modules.length).toBe(2)
    expect(modules.includes('a')).toBe(true)
    expect(modules.includes('b')).toBe(true)
    expect(modules.includes('c')).toBe(false)
  })

  it('should only require c in lib dir', () => {
    const modules = requireAll(__dirname + '/a', /\/lib\//)
    expect(modules.length).toBe(1)
    expect(modules.includes('a')).toBe(false)
    expect(modules.includes('b')).toBe(false)
    expect(modules.includes('c')).toBe(true)
  })
})