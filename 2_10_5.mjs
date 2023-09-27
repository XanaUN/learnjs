import {describe, it} from 'node:test'
import assert from 'node:assert'


function main(str) {
	        let message = (str == 'Сотрудник') ? 'Привет':
		(str == 'Директор') ? 'Здравствуйте':
		(str == '') ? 'Нет логина':
		'';
	        return message
}

describe('Перепешите "if..else" в "?"', () => {
	        it('main()', () => {
			                assert.strictEqual(main('Сотрудник'), 'Привет')
			        })
	        it('main()', () => {
			                assert.strictEqual(main('Директор'), 'Здравствуйте')
			        })
		it('main()', () => {
			                assert.strictEqual(main(''), 'Нет логина')
			        })
	it('main()', () => {
			                assert.strictEqual(main('fjfj'), '')
			        })
})