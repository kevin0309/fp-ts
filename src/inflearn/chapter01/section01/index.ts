export namespace Chapter01_01 {
    // 순수함수
    // 외부 의존성: 없음
    // 부수효과: 없음
    export const add1 = (a: number, b: number): number => {
        return a + b
    }

    // 순수함수가 아닌경우
    // 1. 외부 의존성이 있는 경우
    export let add2AddNumber = 30
    export const add2 = (a: number): number => {
        return a + add2AddNumber
    }

    // 2. 부수효과가 있는 경우
    export let add3TempNumber = 50
    export const add3 = (a: number, b: number): number => {
        add3TempNumber = a + b
        return a + b
    }
}