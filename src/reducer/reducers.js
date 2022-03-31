import {combineReducers} from "redux";
import sumReducer from "./sumReducer";
import histReducer from "./histReducer";

export default combineReducers({
    // Note here that comebineReducers will pass on the part of the state with the same
    // as the key to the reducer function
    // So if our state is {sum: 10, banana: 'yellow'}
    // Only the '10' is passed to the reducer
    sum: sumReducer,
    hist : histReducer
});
