import Text from "@novomarkt/components/general/Text";
import SearchHeader from "@novomarkt/components/navigation/SearchHeader";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import React from "react";
import { StyleSheet, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { CarouselItemProps } from ".";
import CarouselItem from "./components/CarouselItem";
import { styles } from "./style";

export let carouselData: CarouselItemProps[] = [
	"https://www.dmarge.com/wp-content/uploads/2019/04/skinny-jeans.jpg",
	"https://i.ytimg.com/vi/GXFHUqQQuDg/maxresdefault.jpg",
];

const HomeView = () => {
	return (
		<View style={styles.container}>
			<SearchHeader />
			<Carousel
				itemWidth={WINDOW_WIDTH - 32}
				windowSize={WINDOW_WIDTH - 32}
				sliderWidth={WINDOW_WIDTH - 32}
				data={carouselData}
				renderItem={CarouselItem}
			/>
		</View>
	);
};

export default HomeView;
