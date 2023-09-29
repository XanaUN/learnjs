import {describe, it} from 'node:test'
import assert from 'node:assert'


function main(a,b) {
	let massage = a + b < 4? 'Мало' : 'Много'
	return massage
}

describe('Перепешите "if" в "?"', () => {
	it('main()', () => {
		assert.strictEqual(main(1, 2), 'Мало')
	})
	it('main()', () => {
		assert.strictEqual(main(4, 5), 'Много')
	})
})



