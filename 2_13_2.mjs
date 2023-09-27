import {describe, it} from 'node:test'
import assert from 'node:assert'

function main(a) {
	while (a++ <5) console.log(a)
	return a
}

describe('Какое значение выведет цикл while?', () => {
	it('main()', () => {
		assert.strictEqual(main(2), 6)
	})
})