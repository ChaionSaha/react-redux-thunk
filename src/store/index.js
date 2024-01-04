import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart';
import cartShowReducer from './cart-show-slice';

const store = configureStore({
	reducer: { cartShow: cartShowReducer, cart: cartSlice.reducer },
});
export default store;
