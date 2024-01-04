import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	totalQuantity: 0,
	isChanged: false,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		replaceCart(state, action) {
			state.items = action.payload.items;
			state.totalQuantity = action.payload.totalQuantity;
		},

		addItem(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find((s) => s.id === newItem.id);
			state.totalQuantity++;
			state.isChanged = true;

			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					title: newItem.title,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
			}
		},

		removeItem(state, action) {
			const { id } = action.payload;
			state.totalQuantity--;
			const existingItem = state.items.find((i) => i.id === id);
			state.isChanged = true;

			if (existingItem.quantity === 1) {
				state.items = state.items.filter((i) => i.id !== id);
			} else {
				existingItem.quantity--;
				existingItem.totalPrice -= existingItem.price;
			}
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;
