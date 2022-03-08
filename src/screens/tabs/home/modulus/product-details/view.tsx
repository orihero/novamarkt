import { appendUrl } from "@novomarkt/api/requests";
import {
	ArrowBottomMarked,
	BasketIcon,
	CheckedItem,
	RightArrow,
} from "@novomarkt/assets/icons/icons";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import CommentItem from "@novomarkt/screens/tabs/settings/modules/comments/components/CommentItem";
import { useRoute } from "@react-navigation/core";
import React, { ReactElement, useState } from "react";
import {
	FlatList,
	Image,
	LayoutAnimation,
	ScrollView,
	TouchableOpacity,
	View,
} from "react-native";
import ProductsList from "../../components/ProductsList";
import BackHeaderDefault from "./components/BackHeaderDefault";
import ReviewBox from "./components/ReviewBox";
import { styles } from "./style";

export let customCarouselData: string[] = [
	"https://jooinn.com/images/model-girl-1.jpg",
	"https://wallpapercave.com/wp/wp7105804.jpg",
	"https://c4.wallpaperflare.com/wallpaper/403/913/79/girl-girl-beautiful-beautiful-wallpaper-preview.jpg",
];

const ProductDetailsView = ({}): ReactElement => {
	let {
		params: { item },
	} = useRoute();
	const [activeSlide, setActiveSlide] = useState(0);
	const [shouldShow, setShouldShow] = useState(true);
	let carouselPhoto = () => {
		item`${appendUrl}`.photo;
	};
	return (
		<View style={styles.container}>
			<BackHeaderDefault />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.header}>
					<Text style={styles.headerText}>{item.price}</Text>
					<DefaultButton containerStyle={styles.buttonCon}>
						<View style={styles.button}>
							<Text style={styles.buttonText}>{STRINGS.addToCart}</Text>
							<BasketIcon fill={COLORS.white} />
						</View>
					</DefaultButton>
				</View>
				<Image
					source={{ uri: appendUrl(item.photo) }}
					style={styles.productImage}
				/>
				<Text style={styles.itemName}>{item.name}</Text>
				<View style={styles.credit}>
					<View>
						<CheckedItem />
					</View>
					<View style={styles.creditPrice}>
						<Text style={styles.creditName}>{STRINGS.credit}</Text>
						<Text style={styles.creditPriceText}>
							{item.price_old} {STRINGS.creditPrice}
						</Text>
					</View>
				</View>
				<View>
					<View style={styles.compos}>
						<Text style={styles.composition}>{STRINGS.composition}</Text>
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
				<DefaultButton containerStyle={{ marginHorizontal: 20 }}>
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
							{STRINGS.reviews} {item.rating}
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
							<ArrowBottomMarked fill={COLORS.blue} style={styles.arrow} />
							<Text style={styles.blueText2}>Оценке</Text>
						</View>
						<FlatList
							data={customCarouselData}
							renderItem={CommentItem}
							showsVerticalScrollIndicator={false}
						/>
					</View>
				) : null}
				<Text style={styles.flexEnd}>{STRINGS.comments}</Text>
				<DefaultButton containerStyle={styles.marginBottom}>
					<Text style={styles.buttonReview}>{STRINGS.sendReview}</Text>
				</DefaultButton>
				<View style={{ marginHorizontal: 10 }}>
					<ProductsList title={STRINGS.advertBlock} />
				</View>
				<DefaultButton containerStyle={styles.marginBottomEnd}>
					<Text style={styles.buttonReview}>{STRINGS.sendCustomer}</Text>
				</DefaultButton>
			</ScrollView>
		</View>
	);
};

export default ProductDetailsView;
