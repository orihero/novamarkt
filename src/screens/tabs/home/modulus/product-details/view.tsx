import {
	ArrowBottomMarked,
	BasketIcon,
	CheckedItem,
	RightArrow,
} from "@novomarkt/assets/icons/icons";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { STRINGS } from "@novomarkt/locales/strings";
import BackHeaderDefault from "./components/BackHeaderDefault";
import Carousel, { Pagination } from "react-native-snap-carousel";
import React, { useState } from "react";
import { styles } from "./style";
import {
	FlatList,
	LayoutAnimation,
	ScrollView,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import CustomCarouselItem, {
	CustomCarouselItemProps,
} from "./components/CustomCarouselItem";
import DotElement from "./components/DotElement";
import { useRoute } from "@react-navigation/core";
import ProductItem, { ProductItemProps } from "../../components/ProductItem";
import ProductsList, { productsData } from "../../components/ProductsList";
import ReviewBox from "./components/ReviewBox";
import CommentItem from "@novomarkt/screens/tabs/settings/moduels/comments/components/CommentItem";
import ShopsList from "../../components/ShopsList";
import BrandsList from "../../components/BrandsList";

export let customCarouselData: string[] = [
	"https://jooinn.com/images/model-girl-1.jpg",
	"https://wallpapercave.com/wp/wp7105804.jpg",
	"https://c4.wallpaperflare.com/wallpaper/403/913/79/girl-girl-beautiful-beautiful-wallpaper-preview.jpg",
];

const ProductDetailsView = () => {
	let { params } = useRoute();
	let item: ProductItemProps = params.item;
	const [activeSlide, setActiveSlide] = useState(0);
	const [shouldShow, setShouldShow] = useState(true);
	return (
		<ScrollView
			style={styles.container}
			showsVerticalScrollIndicator={false}
		>
			<BackHeaderDefault />
			<View style={styles.header}>
				<Text style={styles.headerText}>1400 ₽</Text>
				<DefaultButton containerStyle={styles.buttonCon}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>
							{STRINGS.addToCart}
						</Text>
						<BasketIcon fill={COLORS.white} />
					</View>
				</DefaultButton>
			</View>
			<View style={styles.carousel}>
				<Carousel
					onSnapToItem={(index) => setActiveSlide(index)}
					itemWidth={WINDOW_WIDTH}
					windowSize={WINDOW_WIDTH}
					sliderWidth={WINDOW_WIDTH}
					itemHeight={200}
					sliderHeight={200}
					data={customCarouselData}
					renderItem={CustomCarouselItem}
					pagingEnabled
				/>
				<Pagination
					activeDotIndex={activeSlide}
					dotsLength={customCarouselData.length}
					// dotElement={<DotElement />}
					// inactiveDotElement={<DotElement inactive={true} />}
				/>
				<Text style={styles.itemName}>{item.name}</Text>
			</View>
			<View style={styles.credit}>
				<View>
					<CheckedItem />
				</View>
				<View style={styles.creditPrice}>
					<Text style={styles.creditName}>{STRINGS.credit}</Text>
					<Text style={styles.creditPriceText}>
						444 ₽ {STRINGS.creditPrice}
					</Text>
				</View>
			</View>
			<View>
				<View style={styles.compos}>
					<Text style={styles.composition}>
						{STRINGS.composition}
					</Text>
					<RightArrow fill={COLORS.blue} />
				</View>
				{item.options?.map((e) => {
					return (
						<View style={styles.map}>
							<Text style={styles.key}>{e.key}</Text>
							<Text>{e.value}</Text>
						</View>
					);
				})}
			</View>
			<DefaultButton>
				<Text style={styles.buttonTxt}>{STRINGS.allDetails}</Text>
			</DefaultButton>
			<TouchableOpacity
				onPress={() => {
					LayoutAnimation.configureNext(
						LayoutAnimation.Presets.easeInEaseOut
					);
					setShouldShow(!shouldShow);
				}}
			>
				<View style={styles.composTwo}>
					<Text style={styles.composition}>
						{STRINGS.reviews} 105
					</Text>
					<RightArrow fill={COLORS.blue} />
				</View>
			</TouchableOpacity>
			<ReviewBox />
			{!shouldShow ? (
				<View>
					<View style={styles.rowHeader}>
						<Text style={styles.txt}>Сортировать по:</Text>
						<Text style={styles.blueText}>Дате</Text>
						<ArrowBottomMarked
							fill={COLORS.blue}
							style={styles.arrow}
						/>
						<Text style={styles.blueText2}>Оценке</Text>
					</View>
					<FlatList
						data={productsData}
						renderItem={CommentItem}
						showsVerticalScrollIndicator={false}
					/>
				</View>
			) : null}
			<Text style={styles.flexEnd}>{STRINGS.comments}</Text>
			<DefaultButton containerStyle={styles.marginBottom}>
				<Text style={styles.buttonReview}>{STRINGS.sendReview}</Text>
			</DefaultButton>
			<Text style={styles.title}>{STRINGS.advertBlock}</Text>
			<FlatList
				numColumns={2}
				data={productsData}
				renderItem={ProductItem}
				style={styles.containerFlat}
				contentContainerStyle={styles.contentContainerStyle}
			/>
			<DefaultButton containerStyle={styles.marginBottom}>
				<Text style={styles.buttonReview}>{STRINGS.sendCustomer}</Text>
			</DefaultButton>
		</ScrollView>
	);
};

export default ProductDetailsView;
