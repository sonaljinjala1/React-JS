const Increment = () => {
    return {
        type: "inc"
    }
}
const Decrement = () => {
    return {
        type: "dec"
    }
}

const Reset = () => {
    return {
        type: "reset"
    }
}

export { Increment, Decrement, Reset }