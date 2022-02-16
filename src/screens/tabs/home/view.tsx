import SearchHeader from "@novomarkt/components/navigation/SearchHeader";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
//@ts-ignore
import { CarouselItemProp } from ".";
import BrandsList from "./components/BrandsList";
import CarouselItem from "./components/CarouselItem";
import CategoriesList from "./components/CategoriesList";
import NewsList from "./components/NewsList";
import ProductsList from "./components/ProductsList";
import ShopsList from "./components/ShopsList";
import { useHomeScreenHooks } from "./hooks";
import { styles } from "./style";

export let carouselData: CarouselItemProp[] = [
	"https://www.dmarge.com/wp-content/uploads/2019/04/skinny-jeans.jpg",
	"https://i.ytimg.com/vi/GXFHUqQQuDg/maxresdefault.jpg",
	"https://www.dmarge.com/wp-content/uploads/2019/04/skinny-jeans.jpg",
	"https://i.ytimg.com/vi/GXFHUqQQuDg/maxresdefault.jpg",
];

const HomeView = () => {
	let { setActiveSlide, activeSlide } = useHomeScreenHooks();
	return (
		<>
			<SearchHeader />
			<ScrollView
				style={styles.scroll}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.container}>
					<Carousel
						onSnapToItem={(index) => setActiveSlide(index)}
						itemWidth={WINDOW_WIDTH}
						windowSize={WINDOW_WIDTH}
						sliderWidth={WINDOW_WIDTH}
						itemHeight={200}
						sliderHeight={200}
						data={carouselData}
						renderItem={CarouselItem}
						pagingEnabled
					/>
					<Pagination
						activeDotIndex={activeSlide}
						dotsLength={carouselData.length}
					/>
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
