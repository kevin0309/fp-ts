const a = 10
const b = 20

// 순수함수
// 외부 의존성: 없음
// 부수효과: 없음
const add1 = (a: number, b: number): number => {
    return a + b
}

// console.log(add1(a, b))

// 순수함수가 아닌경우
// 1. 외부 의존성이 있는 경우
let add2AddNumber = 30
const add2 = (a: number): number => {
    return a + add2AddNumber
}

/*
console.log(add2(a))
add2AddNumber = 40
console.log(add2(a))
*/

// 2. 부수효과가 있는 경우
let add3TempNumber = 50
const add3 = (a: number, b: number): number => {
    add3TempNumber = a + b
    return a + b
}

console.log(add3TempNumber)
console.log(add3(a, b))
console.log(add3TempNumber)