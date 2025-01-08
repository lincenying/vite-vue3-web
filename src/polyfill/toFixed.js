/**
 * Created by lincenying on 18/7/20.
 */

/* eslint-disable no-extend-native */
Number.prototype.toFixed = function (n, toNumber) {
    if (n > 20 || n < 0) {
        throw new RangeError('toFixed() digits argument must be between 0 and 20')
    }

    // eslint-disable-next-line ts/no-this-alias
    const number = this
    if (Number.isNaN(number) || number >= 10 ** 21) {
        return number.toString()
    }

    if (typeof n == 'undefined' || n === 0) {
        if (toNumber) {
            return Math.round(number)
        }
        return Math.round(number).toString()
    }

    let result = number.toString()
    const arr = result.split('.')

    // 整数的情况
    if (arr.length < 2) {
        result += '.'
        for (let i = 0; i < n; i += 1) {
            result += '0'
        }

        if (toNumber) {
            return Number(result)
        }
        return result
    }

    const integer = arr[0]
    const decimal = arr[1]
    if (decimal.length === n) {
        if (toNumber) {
            return Number(result)
        }
        return result
    }
    if (decimal.length < n) {
        for (let i = 0; i < n - decimal.length; i += 1) {
            result += '0'
        }

        if (toNumber) {
            return Number(result)
        }
        return result
    }
    result = `${integer}.${decimal.substring(0, n)}`
    const last = decimal.substring(n, n + 1)

    // 四舍五入，转换为整数再处理，避免浮点数精度的损失
    if (Number.parseInt(last, 10) >= 5) {
        const x = 10 ** n
        if (result < 0) {
            result = (Math.round(Number.parseFloat(result) * x) - 1) / x
        }

        else {
            result = (Math.round(Number.parseFloat(result) * x) + 1) / x
        }

        result = Number(result).toFixed(n)
    }

    if (toNumber) {
        return Number(result)
    }
    return result
}
