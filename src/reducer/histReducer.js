export default function histReducer(state = [], action) {
    if (action.type === "APPEND") {
        state.unshift(parseInt(action.value))
        return state
    }
    return state;
}