import { describe, it } from 'node:test'
import assert from 'node:assert'

function confirm(message) {
  return false
}

function checkAge(age) {
  if (age > 18) {
    return true
  }
  return confirm('Родители разрешили?')
}


describe('Обязателен ли "else"', () => {
  it('Функция возварщает true', () => {
    // Given 
    const age = 19
    // When 
    const result = checkAge(age)
    // Then
    assert.strictEqual(result, true)
  })

  it('Функция возвращает false', () => {
    // Given
    const age = 7
    // When 
    const result = checkAge(age)
    // Then
    assert.strictEqual(result, false)
  })
})
