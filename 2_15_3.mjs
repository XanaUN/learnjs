import {describe, it} from 'node:test'
import assert from 'node:assert'







function main(a, b) {
	return (a < b) ? a : b;
}

describe('Функция min(a, b)', () => {
	it('main()', () => {
		assert.strictEqual(main(1, 5), 1)
	})
})
