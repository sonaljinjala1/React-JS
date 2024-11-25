import { combineReducers } from "redux";
import counter from "./counterReducer";

const mainReducer = combineReducers({
    cnt: counter
})


export default mainReducer;