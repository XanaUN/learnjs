import {describe, it} from 'node:test'
import assert from 'node:assert'

function main(a) {
	if (a>0) {
		return 1
	} else if (a<0){
		return -1
	} else {
		return 0
	}
}



describe('Покажите знак числа', () => {

	it('main()', () => {
		assert.strictEqual(main(5), 1)
		assert.strictEqual(main(0), 0)
		assert.strictEqual(main(-5), -1)
	})
})
