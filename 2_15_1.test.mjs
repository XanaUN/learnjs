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
    expect(result).toBeTruthy()
  })

  it('Функция возвращает false', () => {
    // Given
    const age = 10
    // When
    const result = checkAge(age)
    // Then
    expect(result).toBeFalsy()
  })
})
