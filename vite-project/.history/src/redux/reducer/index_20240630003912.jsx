// reducers/index.js
import { combineReducers } from "redux";
import cartHandle from "./cartReducer"; // Adjust the path as necessary

const rootReducer = combineReducers({
  cart: cartHandle,
  // Add other reducers here
});

export default rootReducer;
