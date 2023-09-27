import {describe, it} from 'node:test'
import assert from 'node:assert'

function main(a) {
	while (a) {
		console.log( a-- )
	}
	return a
}

describe('Последние значение цикла', () => {
	it('main()', () => {
		assert.strictEqual(main(5), 0)
	})
})
