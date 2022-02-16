import { LoginState } from "@novomarkt/screens/auth/login/hooks";
import { RegisterState } from "@novomarkt/screens/auth/register/hooks";
import { store } from "@novomarkt/store/configureStore";
import axios, { AxiosResponse } from "axios";
import {
	AddCardRequest,
	BaseResponse,
	CardItem,
	CardTypeItem,
	CartItemResponse,
	LoginResponse,
	NewsItemResponse,
	ProductItemResponse,
	QuestionsResponse,
	SendQuestionValue,
} from "./types";

export let url = "https://novamarket.qwertyuz.ru/api";
export let assetUrl = "https://novamarket.qwertyuz.ru";
axios.interceptors.request.use((config) => {
	let token = store.getState().user.token;
	if (token) {
		config.headers = {
			...config.headers,
			Authorization: `Bearer ${token}`,
		};
	}
	return config;
});

export const appendUrl = (str: string) => {
	return `${assetUrl}${str}`;
};

export const formData = (data: any): FormData => {
	let form = new FormData();
	for (let key in data) {
		form.append(key, data[key]);
	}
	return form;
};

let requests = {
	auth: {
		login: (credentials: LoginState) =>
			axios.post<LoginState, AxiosResponse<LoginResponse>>(
				`${url}/user/sign-in`,
				credentials
			),

		register: (credentials: RegisterState) =>
			axios.post<
				{ token: string; code: string },
				AxiosResponse<{ data: { token: string; code: string } }>,
				RegisterState
			>(`${url}/user/sign-up`, credentials),
		verify: (credentials: { code: string; phone: string }, token: string) =>
			axios.post(`${url}/user/send-code`, credentials, {
				headers: { Authorization: `Bearer ${token}` },
			}),
	},
	profile: {
		getProfile: () =>
			axios.get<{ data: LoginResponse }>(`${url}/user/profile`),
		editProfile: (data: Partial<LoginResponse>) =>
			axios.post<any, any, FormData>(
				`${url}/user/update`,
				formData(data)
			),
		addCard: (creds: AddCardRequest) =>
			axios.post(`${url}/user/card-add`, creds),
		getCardTypes: () =>
			axios.get<{ data: CardTypeItem[] }>(`${url}/category?type=card`),
		getCards: () => axios.get<{ data: CardItem[] }>(`${url}/user/cards`),
		removeCard: (data: { card_id: number }) =>
			axios.post<{ data: CardItem[] }>(`${url}/user/card-remove`, data),
	},

	categories: {
		getCategories: () => axios.get(`${url}/category?type=product`),
		getSubCategories: (id: number) =>
			axios.get(`${url}/category/sub-category?id=${id}`),
	},

	brands: {
		getBrands: () => axios.get(`${url}/category?type=brand`),
	},

	frequentQuestions: {
		getQuestions: () =>
			axios.get<{ data: QuestionsResponse[] }>(`${url}/question`),
		sendQuestion: (creds: SendQuestionValue) =>
			axios.post(`${url}/feedback/send`, creds),
	},

	products: {
		getProducts: () =>
			axios.get<BaseResponse<ProductItemResponse>>(`${url}/product`),
		searchProducts: (query: string) =>
			axios.get<BaseResponse<ProductItemResponse>>(
				`${url}/product/search?query=${query}`
			),
		getCarts: () => axios.get<{ data: CartItemResponse[] }>(`${url}/cart`),

		addToCart: (creds: { product_id: number; amount: number }) =>
			axios.post(`${url}/cart/add`, creds),
	},

	news: {
		getNews: () => axios.get<BaseResponse<NewsItemResponse>>(`${url}/news`),
	},
};
export default requests;
