import { describe, it } from 'node:test'
import assert from 'node:assert'

function checkAge(age) {
  return  age > 18 ? true : false
}

describe('Перепишите функцию, используя оператор "?" или "||"', () => {
  it('Функция возвращает true', () => {
    const age = 19
    const result = checkAge(age)
    assert.strictEqual(result, true)
  })

  it('Функция возвращает false', () => {
    const age = 10
    const result = checkAge(age)
    assert.strictEqual(result, false)
  })
})
