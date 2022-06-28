import requests from "@novomarkt/api/requests";
import { CartItemResponse, SliderTypes } from "@novomarkt/api/types";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";
import { loadCart } from "@novomarkt/store/slices/cartSlice";
import { loadFavorite } from "@novomarkt/store/slices/favoriteSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useHomeScreenHooks = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const [slide, setSlide] = useState<SliderTypes[]>([]);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	const getLoader = async () => {
		try {
			setLoading(true);
			dispatch(toggleLoading());
			let res1 = await requests.shops.getShops();
			let res2 = await requests.products.getProducts();
			let res3 = await requests.news.getNews();
			let res4 = await requests.categories.getCategories();
			let res5 = await requests.brands.getBrands();
			dispatch(toggleLoading());
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getLoader();
	}, []);

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
	}, []);

	useEffect(() => {
		effect();
	}, []);

	useEffect(() => {
		getSlides();
	}, []);

	return { activeSlide, setActiveSlide, slide, loading };
};
