import requests from "@novomarkt/api/requests";
import { ROUTES } from "@novomarkt/constants/routes";
import { useAppDispatch } from "@novomarkt/store/hooks";
import { userLoggedIn } from "@novomarkt/store/slices/userSlice";
import { validatePhoneNumber } from "@novomarkt/utils/validation";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";

export interface LoginState {
	phone?: string;
	password?: string;
	code?: string;
}

const useLoginHook = () => {
	let navigation = useNavigation();
	//TODO remove initial value
	const [state, setState] = useState<LoginState>({
		password: "206190",
		phone: "+998932300500",
	});
	let [loading, setLoading] = useState<boolean>(false);
	let dispatch = useAppDispatch();
	let onLogin = async () => {
		//validate phone matches +998 ** *** ** **
		if (validatePhoneNumber(state.phone)) {
			//send data to remote
			try {
				setLoading(true);
				let res = await requests.auth.login(state);
				// let res = await axios.get("http://qwerty.uz");
				//write these data to redux and AsyncStorage
				dispatch(userLoggedIn(res.data));
				//@ts-ignore
				navigation.navigate(ROUTES.VERIFICATION);
			} catch (error) {
				console.warn(error.toJSON());
				console.warn(Object.keys(error));
			} finally {
				setLoading(false);
			}
		} else {
			//TODO warn that data is incorrect
			console.log("INCORRECT PHONE NUMBER");
		}
	};

	let onForgotPassNavigation = () =>
		navigation.navigate(ROUTES.FORGOTPASSWORD);

	let onLoginNavigation = () => navigation.navigate(ROUTES.REGISTER);

	let onStateChange = (key: string) => (value: string) => {
		setState({ ...state, [key]: value });
	};

	return {
		onLogin,
		onStateChange,
		state,
		loading,
		onLoginNavigation,
		onForgotPassNavigation,
	};
};

export default useLoginHook;
