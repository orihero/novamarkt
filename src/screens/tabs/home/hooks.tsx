import requests from "@novomarkt/api/requests";
import { CartItemResponse } from "@novomarkt/api/types";
import { loadCart } from "@novomarkt/store/slices/cartSlice";
import { loadFavorite } from "@novomarkt/store/slices/favoriteSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useHomeScreenHooks = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const [slide, setSlide] = useState();
	const dispatch = useDispatch();

	const effect = async () => {
		try {
			let res = await requests.products.getCarts();
			dispatch(loadCart(res.data.data));
		} catch (error) {
			console.log(error);
		}
	};

	const getFavs = async () => {
		try {
			let res = await requests.favorites.getFavorites();
			dispatch(loadFavorite(res.data.data));
		} catch (error) {
			console.log(error);
		}
	};

	const getSlides = async () => {
		try {
			let res = await requests.slider.getSliders();
			setSlide(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getFavs();
	}, [getFavs]);

	useEffect(() => {
		effect();
	}, []);

	return { activeSlide, setActiveSlide, slide };
};
