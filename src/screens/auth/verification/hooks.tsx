import requests from "@novomarkt/api/requests";
import { ROUTES } from "@novomarkt/constants/routes";
import { useAppDispatch } from "@novomarkt/store/hooks";
import { userLoggedIn } from "@novomarkt/store/slices/userSlice";
import { validatePhoneNumber } from "@novomarkt/utils/validation";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { LoginState } from "../login/hooks";

let timer = () => {};

const useVerificationHook = () => {
	const [timeLeft, setTimeLeft] = useState(10);
	let navigation = useNavigation();
	let [loading, setLoading] = useState<boolean>(false);
	let dispatch = useAppDispatch();
	const [state, setState] = useState<LoginState>({
		code: "111111",
		phone: "+998932300500",
	});

	const startTimer = () => {
		timer = setTimeout(() => {
			if (timeLeft <= 0) {
				clearTimeout(timer);
				return false;
			}
			setTimeLeft(timeLeft - 1);
		}, 1000);
	};

	useEffect(() => {
		startTimer();
		return () => clearTimeout(timer);
	});

	let resendCode = async () => {
		setTimeLeft(10);
	};

	let onVerificate = async () => {
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
			} catch (error) {
				console.warn(error.toJSON());
				console.warn(Object.keys(error));
			} finally {
				setLoading(false);
				navigation.navigate(ROUTES.TABS);
			}
		}
	};

	let onStateChange = (key: string) => (value: string) => {
		setState({ ...state, [key]: value });
	};

	let onChangePhoneNumber = () => navigation.goBack();

	return {
		timeLeft,
		onChangePhoneNumber,
		onVerificate,
		state,
		onStateChange,
		loading,
		resendCode,
	};
};

export default useVerificationHook;
