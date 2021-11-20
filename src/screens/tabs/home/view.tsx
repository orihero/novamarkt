import SearchHeader from "@novomarkt/components/navigation/SearchHeader";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { CarouselItemProp } from ".";
import Brands from "./components/Brands";
import CarouselItem, { DotElement } from "./components/CarouselItem";
import PopularProducts from "./components/PopularProducts";
import Shops from "./components/Shops";
import { styles } from "./style";

export let carouselData: CarouselItemProp[] = [
	"https://www.dmarge.com/wp-content/uploads/2019/04/skinny-jeans.jpg",
	"https://i.ytimg.com/vi/GXFHUqQQuDg/maxresdefault.jpg",
];

const HomeView = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	return (
		<ScrollView style={styles.scroll}>
			<SearchHeader />
			<View style={styles.container}>
				<Carousel
					onSnapToItem={(index) => setActiveSlide(index)}
					itemWidth={WINDOW_WIDTH - 32}
					windowSize={WINDOW_WIDTH - 32}
					sliderWidth={WINDOW_WIDTH - 32}
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
			<Brands />
			<Shops />
			<PopularProducts />
		</ScrollView>
	);
};

export default HomeView;
