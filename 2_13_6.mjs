import {describe, it} from 'node:test'
import assert from 'node:assert'

function main() {
	let summ = 0
	for (let i = 2; i <= 10; i++) {
		if (i % 2 == 0) {
			console.log(i)
		}
	summ = summ + i
	}
	return summ
}

describe('Выведите четные числа', () => {
	it('main()', () => {
		assert.strictEqual(main(), 54)
	})
})
