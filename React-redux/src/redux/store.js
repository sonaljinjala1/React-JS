import { createStore } from "redux"; // Corrected this line
import mainReducer from "./Reducer";

const store = createStore(mainReducer);

export default store;
