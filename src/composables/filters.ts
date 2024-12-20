import { isEmpty, sleep } from '@lincy/utils'

/**
 * y-m-d h:i:s 格式时间去除秒
 * @param value 日期
 * @returns 去除秒的日期
 */
function cutSec(value: string) {
    if (!value || typeof value !== 'string') {
        return ''
    }
    const arr = value.split(':')
    return `${arr[0]}:${arr[1]}`
}

/**
 * 数组转字符串
 * @param value 数组或者字符串
 * @returns 字符串
 */
function arrToStr(value: any[] | string) {
    try {
        if (typeof value === 'string') {
            value = JSON.parse(value)
        }
        else if (Array.isArray(value)) {
            return value.join(', ')
        }

        return value
    }
    catch (error) {
        console.log(error)
        return ''
    }
}

/**
 * 取小数点后 N 位
 * @param value 数值
 * @param num 小数点位数
 * @returns number
 */
function toFixed(value: number | string, num = 2) {
    if (!Number(value)) {
        return value
    }
    return Number(value).toFixed(num)
}

/**
 * 若数值小于最大值, 则返回最大值, 反之返回数值
 * @param value 数值
 * @param maxValue 最大值
 * @returns number
 */
function maxVal(value: number | string, maxValue = 100) {
    if (Number(value) && Number(value) > maxValue) {
        return maxValue
    }
    return value
}

function resetData(tmpObj: Objable) {
    const obj: Objable = {}
    Object.keys(tmpObj).forEach((item) => {
        obj[item] = (tmpObj[item] && !isEmpty(tmpObj[item][0])) ? tmpObj[item][0] : tmpObj[item]
    })
    return obj
}

export function useFilters() {
    return {
        cutSec,
        arrToStr,
        toFixed,
        sleep,
        maxVal,
        resetData,
    }
}
