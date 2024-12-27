import pkg from 'mockjs'

const { Random } = pkg

export const baseApi = 'mock-api'

export function getArray(length: number, min = 1, max = 100) {
    return Array.from({ length }, () => Random.integer(min, max))
}

export function getTwoArray(num1: number, num2: number, min = 1, max = 100) {
    return Array.from({ length: num1 }, () => Array.from({ length: num2 }, () => Random.integer(min, max)))
}

export function getRandomValue(arr: string[]) {
    if (arr.length === 0)
        return undefined // 如果数组为空，返回undefined
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}