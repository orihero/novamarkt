import { ProductItemProps } from "@novomarkt/screens/tabs/home/components/ProductItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItemProps {
	data: ProductItemProps;
	count: number;
}
export interface CartItemProps {
	data: ProductItemProps;
	count: number;
}

interface InitialState {
	[key: string]: CartItemProps;
}

let initialState: InitialState = {};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, { payload }: PayloadAction<CartItemProps>) => {
			state[payload.data.id?.toString() || ""] = payload;
			return state;
		},
		removeFromCart: (state, action: PayloadAction<string>) => {
			let st = Object.keys(state).reduce((p, c) => {
				if (c === action.payload) return p;
				return { ...p, [c]: state[c] };
			}, {});
			return st;
		},
		clearCart: () => initialState,
	},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
