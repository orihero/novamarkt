import { combineReducers } from "redux";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

export const rootReducer = combineReducers({
	cart: cartReducer,
	user: userReducer,
});
