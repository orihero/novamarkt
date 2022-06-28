import requests from "@novomarkt/api/requests";
import SearchHeader from "@novomarkt/components/navigation/SearchHeader";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { STRINGS } from "@novomarkt/locales/strings";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useDispatch } from "react-redux";
import BrandsList from "./components/BrandsList";
import CarouselItem from "./components/CarouselItem";
import CategoriesList from "./components/CategoriesList";
import NewsList from "./components/NewsList";
import ProductsList from "./components/ProductsList";
import ShopsList from "./components/ShopsList";
import { useHomeScreenHooks } from "./hooks";
import { styles } from "./style";

const HomeView = () => {
	let { setActiveSlide, activeSlide, slide, loading } = useHomeScreenHooks();

	return loading == true ? (
		<View />
	) : (
		<>
			<SearchHeader />
			<ScrollView style={styles.scroll}>
				<View style={styles.container}>
					<Carousel
						onSnapToItem={(index) => setActiveSlide(index)}
						itemWidth={WINDOW_WIDTH}
						windowSize={WINDOW_WIDTH}
						sliderWidth={WINDOW_WIDTH}
						itemHeight={200}
						sliderHeight={200}
						data={slide}
						renderItem={CarouselItem}
						pagingEnabled
					/>
					<Pagination activeDotIndex={activeSlide} dotsLength={slide.length} />
				</View>
				<BrandsList />
				<ShopsList />
				<ProductsList />
				<CategoriesList />
				<ProductsList title={STRINGS.productsOnSale} />
				<NewsList />
				<ProductsList title={STRINGS.recentlyWatched} />
			</ScrollView>
		</>
	);
};

export default HomeView;

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
