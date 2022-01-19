import { LoginState } from "@novomarkt/screens/auth/login/hooks";
import { RegisterState } from "@novomarkt/screens/auth/register/hooks";
import axios, { AxiosResponse } from "axios";
import {
	LoginResponse,
	RegisterResponse,
	RegisterResponseErrors,
} from "./types";

export let url = "http://novamarket.qwertyuz.ru/api";

let requests = {
	auth: {
		login: (credentials: LoginState) =>
			axios.post<LoginState, AxiosResponse<LoginResponse>>(
				`${url}/user/sign-in`,
				credentials
			),

		register: (credentials: RegisterState) =>
			axios.post<
				RegisterState,
				AxiosResponse<RegisterState>,
				RegisterState
			>(`${url}/user/sign-up`, credentials),
	},
};
export default requests;
