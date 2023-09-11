import {describe, it } from 'node:test'
import assert from 'node:assert'

function main() {
	let a = 5 > 4
	let b = 'ананас' > 'яблоко'
	let c = '2' > '12'
	let d = undefined == null
	let e = undefined === null
	let f = null == '\n0\n'
	let g = null === +'\n0\n'
	
	console.log('a=', a)
	console.log('b=', b)
	console.log('c=', c)
	console.log('d=', d)
	console.log('e=', e)
	console.log('f=', f)
	console.log('g=', g)
}

main()

describe('Операторы сравнения', () => {
	it('5 > 4', () => {
		assert.strictEqual(5 > 4, true)
	})
	
	it("'ананас' > 'яблоко'", () => {
		assert.strictEqual('ананас' > 'яблоко', false)
	})

	it("'2' > '12'", () => {
		assert.strictEqual('2' > '12', true)
	})

	it('undefined == null', () => {
		assert.strictEqual(undefined == null, true)
	})

	it('undefined === null', () => {
		assert.strictEqual(undefined === null, false)
	})

	it('null == "\n0\n"', () => {
		assert.strictEqual(null == "\n0\n", false)
	})

	it('null === +"\n0\n"', () => {
		assert.strictEqual(null === +"\n0\n", false)
	})
})

	
