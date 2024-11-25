import { combineReducers } from "redux";
import crudReducer from "./crudReducer";

const mainReducer = combineReducers({
    crud: crudReducer
})

export default mainReducer;