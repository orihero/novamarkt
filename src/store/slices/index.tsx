import { combineReducers } from "redux";
import cartReducer from "./cartSlice";

export const rootReducer = combineReducers({
	cart: cartReducer,
});
