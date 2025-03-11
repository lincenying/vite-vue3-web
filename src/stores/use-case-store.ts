import { defineStore } from 'pinia'

export const useCaseStore = defineStore('useCase', {
    state: () => ({
        count: 0,
        message: 'Hello, Pinia!',
    }),
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
        setMessage(newMessage: string) {
            this.message = newMessage
        },
    },
})
