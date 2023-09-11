import { describe, it } from 'node:test'
import assert from 'node:assert'

function copySorted(arr) {
  return arr.slice().sort()
}

describe('Скопировать и отсортировать массив', () => {
  it('Возвращает текущую копию', () => {
    let arr = ['HTML', 'JavaScript', 'CSS']
    let sorted = copySorted(arr)

    assert.deepEqual(sorted, ['CSS', 'HTML', 'JavaScript'])
    assert.deepEqual(arr, ['HTML', 'JavaScript', 'CSS'])
  })
})
