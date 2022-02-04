import { combineReducers } from "redux";
import appSettingsReducer from "./appSettings";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

export const rootReducer = combineReducers({
	cart: cartReducer,
	user: userReducer,
	appSettings:appSettingsReducer
});
