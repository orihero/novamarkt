import SearchHeader from "@novomarkt/components/navigation/SearchHeader";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { CarouselItemProp } from ".";
import BrandsList from "./components/BrandsList";
import CarouselItem from "./components/CarouselItem";
import CategoriesList from "./components/CategoriesList";
import NewsList from "./components/NewsList";
import ProductsList from "./components/ProductsList";
import ShopsList from "./components/ShopsList";
import { styles } from "./style";

export let carouselData: CarouselItemProp[] = [
	"https://www.dmarge.com/wp-content/uploads/2019/04/skinny-jeans.jpg",
	"https://i.ytimg.com/vi/GXFHUqQQuDg/maxresdefault.jpg",
	"https://www.dmarge.com/wp-content/uploads/2019/04/skinny-jeans.jpg",
	"https://i.ytimg.com/vi/GXFHUqQQuDg/maxresdefault.jpg",
];

const HomeView = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	return (
		<ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} >
			<SearchHeader />
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
	);
};

export default HomeView;
