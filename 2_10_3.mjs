/*import {describe, it} from 'node:test'
import assert from 'node:assert'*/

function main(a) {
	if (a>0) {
		console.log(1)
	} else if (a==Number && a<0){
		console.log(-1)
	} else {
		console.log(0)
	}
}

let vp = 5	
console.log(typeof vp)

main(vp)



/*describe('Покажите знак числа', () => {
	it('main(vp)', () => {
		assert.strictEqual(main(vp), 1)
	})
})*/
