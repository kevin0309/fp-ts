import {Chapter01_01} from "./index";

const a = 10
const b = 20

console.log(`--- CASE: add1 ---`)
console.log(`If)  a: ${a}, b: ${b}`)
console.log(`Then) a + b = ${Chapter01_01.add1(a, b)}`)
console.log()

console.log(`--- CASE: add2 ---`)
console.log(`If) a: ${a}, external variable: ${Chapter01_01.add2AddNumber}`)
console.log(`Then) a + external variable = ${Chapter01_01.add2(a)}`)
console.log()
console.log(`Assume) Assign 40 to external variable`)
Chapter01_01.add2AddNumber = 40
console.log(`Then) a + external variable = ${Chapter01_01.add2(a)}`)
console.log()

console.log(`--- CASE: add3 ---`)
console.log(`If) a: ${a}, b: ${b}, external variable: ${Chapter01_01.add3TempNumber}`)
console.log(`Assume) add3 function has the side-effect of assigning a + b to an external variable.`)
console.log(`Then) a + b = ${Chapter01_01.add3(a, b)}, external variable: ${Chapter01_01.add3TempNumber}`)