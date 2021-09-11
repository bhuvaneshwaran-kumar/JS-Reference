export const InitialState = 0

function CounterReducer(state = InitialState, action) {
    switch (action.type) {
        case "INCREMENT":
            console.log("Increment")
            return state + 1
        case "DECREMENT":
            return state - 1
        default:
            return state
    }
}

export default CounterReducer
