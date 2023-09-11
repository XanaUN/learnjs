import { describe, it } from 'node:test'
import assert from 'node:assert'

describe('Преобразование типов', () => {
  it('"" + 1 + 0', () => {
    assert.strictEqual("" + 1 + 0, '10')
  })
})

// Преобразование типов

function main() {

  let a = "" + 1 + 0 // 1
  let b = "" - 1 + 0 // -1
  let c = true + false // undefined
  let d = 6 / "3" // 2
  let i = "2" * "3" // 6
  let f = 4 + 5  + "px" // 45px
  let g = "$" + 4 + 5 // $45
  let u = "4" - 2 // 2 
  let t = "4px" - 2 // undefinded
  let p = " -9 " - 5 // -9-5
  let q = " -9 " + 5 // -4
  let m = null + 1 // NaN
  let y = undefined + 1 // NaN
  let o = " \t \n" - 2 // -2

  console.log("a=", a)
  console.log("b=", b)
  console.log("c=", c)
  console.log("d=", d)
  console.log("i=", i)
  console.log("f=", f)
  console.log("g=", g)
  console.log("u=", u)
  console.log("t=", t)
  console.log("p=", p)
  console.log("q=", q)
  console.log("m=", m)
  console.log("y=", y)
  console.log("o=", o)
}

main()

  
