import { combineReducers } from "redux";
import counter from "./counterReducer";

const mainReducer = combineReducers({
    milansir : counter,
})

export default mainReducer;