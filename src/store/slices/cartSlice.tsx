import { CartItemResponse } from "@novomarkt/api/types";
import { ProductItemProps } from "@novomarkt/screens/tabs/home/components/ProductItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

export interface CartItemProps {
	data: ProductItemProps;
	count: number;
}
export interface CartItemProps {
	data: ProductItemProps;
	count: number;
}

interface InitialState {
	[key: string]: CartItemResponse;
	// items: [];
}

let initialState: InitialState = {};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, { payload }: PayloadAction<CartItemResponse>) => {
			state[payload.id?.toString() || ""] = payload;
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

		loadCart: (state, action: PayloadAction<CartItemResponse[]>) => {
			let obj = action.payload.reduce((previous, current) => {
				if (!previous) {
					return { [current.id]: current };
				}
				return { ...previous, [current.id]: current };
			});
		},
	},
});

export const cartSelector = (state: RootState) => state.cart;

export const { loadCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
