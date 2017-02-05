import {splitLines, splitItems} from './parser.js'

import assert from 'assert'

describe('Parser', () => {
  describe('#splitLines', () => {
    it('should split a string by new line', () => {
      assert.equal(3, splitLines('1\n2\n3').length)
    })
  })

  describe('#splitItems', () => {
    it('should split items by comma', () => {
      assert.equal(6, splitItems('a,b,c,d,e,f').length)
    })
  })
})
