import {describe, it} from 'node:test'
import assert from 'node:assert'

function main() {
	for (a=0; a<5; ++a) console.log(a)
	return a
}

describe('Какие значения выведет цикл for', () => {
	it('main()', () => {
		assert.strictEqual(main(2), 5)
	})
})
