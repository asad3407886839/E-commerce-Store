// store.js
import { createStore } from "redux";
import rootReducer from "./reducers"; // Adjust the path as necessary

const store = createStore(rootReducer);

export default store;
