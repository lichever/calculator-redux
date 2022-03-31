export default function sum(state = 0, action) {
    if (action.type === "ADD") {
        return state + parseInt(action.value);
    } else if (action.type === "SUBTRACT") {
        return state - parseInt(action.value);
    }
    return state;
}
