import {combineReducers} from "redux";
import sum from "./sumReducer";

export default combineReducers({
    // Note here that comebineReducers will pass on the part of the state with the same
    // as the key to the reducer function
    // So if our state is {sum: 10, banana: 'yellow'}
    // Only the '10' is passed to the reducer
    sum: sum,
});
