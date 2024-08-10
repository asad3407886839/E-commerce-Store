// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer'; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers here
  },
});

export default store;
