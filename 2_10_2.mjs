import {describe, it} from 'node:test'
import assert from 'node:assert'

function main(a) {
 	if (a==='ECMAScript') {
		console.log('Верно')
	} else { console.log('Не знаете? \nECMAScript!')
	}
}

let VvodPolzovatelia = 'ECMAScript'

main(VvodPolzovatelia)

	describe('Название JavaScript', () => {
		
		it('main(VvodPolzovatelia)', () => {
			assert.strictEqual(main(VvodPolzovatelia), 'Верно')
		})
	})
