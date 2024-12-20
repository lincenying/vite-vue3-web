/**
 * Created by lincenying on 18/7/20.
 */

/* eslint-disable no-extend-native */

// 数组乱序
Array.prototype.shuffle = function () {
    // eslint-disable-next-line ts/no-this-alias
    const arr = this
    for (let i = arr.length; i; i--) {
        const j = Math.floor(Math.random() * i)
        ;[arr[i - 1], arr[j]] = [arr[j], arr[i - 1]]
    }
    return arr
}
