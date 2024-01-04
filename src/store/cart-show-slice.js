import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isShown: true,
};

const cartShowSlice = createSlice({
	name: 'cart-show',
	initialState,
	reducers: {
		toggle(state) {
			state.isShown = !state.isShown;
		},
	},
});
const cartShowReducer = cartShowSlice.reducer;

export const cartShowActions = cartShowSlice.actions;
export default cartShowReducer;
