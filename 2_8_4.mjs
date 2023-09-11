import { describe, it } from 'node:test'
import assert from 'node:assert'


	function main(str1,str2) {
	a = Number(str1)
	b = Number(str2)
		return (a + b)
		}

	let a = '1'
	let b = '2'
	main(a,b)
	console.log(a + b)

describe('Исправление сложения', () => {
	it(main(a,b), () => {
		assert.strictEqual(main(a,b), 3)
	})
})

/* 
Задание из учебника:
Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.

Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).

В чём ошибка? Исправьте её. Результат должен быть 3.
	
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b); // 12*/
