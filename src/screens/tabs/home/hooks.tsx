import requests from "@novomarkt/api/requests";
import { CartItemResponse } from "@novomarkt/api/types";
import { loadCart } from "@novomarkt/store/slices/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useHomeScreenHooks = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const dispatch = useDispatch();

	const effect = async () => {
		try {
			let res = await requests.products.getCarts();
			dispatch(loadCart(res.data.data));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		effect();
	}, []);

	return { activeSlide, setActiveSlide };
};
