import {describe, it} from 'node:test'
import assert from 'node:assert'





function main(age) {
	let rod
	return (age > 18 ) ? true : rod = console.log('Родилтели разрешили?')
}

function main2(age) {
	let cr
	return (age > 18) || cr = console.log('Родители разрешили?')
}

describe('Перепишите функцию, используя оператор "?" или "||"', () => {

	it('main()', () => {
		assert.strictEqual(main(12), 'Родители разрешили?')
	})
	
	it('main2()', () => {
		assert.strictEqual(main2(11), 'Родители разрешили?')
	})
})
	
	
