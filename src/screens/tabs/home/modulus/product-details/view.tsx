import requests, { appendUrl } from "@novomarkt/api/requests";
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
import { useAppSelector } from "@novomarkt/store/hooks";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";
import { cartSelector, loadCart } from "@novomarkt/store/slices/cartSlice";
import { useNavigation, useRoute } from "@react-navigation/core";
import React, { ReactElement, useState } from "react";
import {
	FlatList,
	Image,
	LayoutAnimation,
	ScrollView,
	TouchableOpacity,
	View,
} from "react-native";
import { useDispatch } from "react-redux";
import ProductsList from "../../components/ProductsList";
import BackHeaderDefault from "./components/BackHeaderDefault";
import ReviewBox from "./components/ReviewBox";
import { styles } from "./style";

// export let customCarouselData: string[] = [
// 	"https://jooinn.com/images/model-girl-1.jpg",
// 	"https://wallpapercave.com/wp/wp7105804.jpg",
// 	"https://c4.wallpaperflare.com/wallpaper/403/913/79/girl-girl-beautiful-beautiful-wallpaper-preview.jpg",
// ];

const ProductDetailsView = ({}): ReactElement => {
	let {
		params: { item, id },
	} = useRoute();
	const [activeSlide, setActiveSlide] = useState(0);
	const [shouldShow, setShouldShow] = useState(true);
	let carouselPhoto = () => {
		item`${appendUrl}`.photo;
	};

	const dispatch = useDispatch();
	let navigation = useNavigation();
	const cart = useAppSelector(cartSelector);
	let isInCart = !!cart[id];

	const onCartPress = async () => {
		try {
			if (isInCart) {
				dispatch(toggleLoading());
				let clear = await requests.products.removeItem({
					product_id: id,
				});
				let cartGet = await requests.products.getCarts();
				dispatch(loadCart(cartGet.data.data));
				dispatch(toggleLoading());
			} else {
				dispatch(toggleLoading());
				let res = await requests.products.addToCart({
					amount: 1,
					product_id: id,
				});
				let cartRes = await requests.products.getCarts();
				dispatch(loadCart(cartRes.data.data));
				dispatch(toggleLoading());
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<View style={styles.container}>
			<BackHeaderDefault />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.header}>
					<Text style={styles.headerText}>{item.price}</Text>
					<DefaultButton
						containerStyle={styles.button}
						secondary={isInCart}
						onPress={onCartPress}
					>
						<View style={styles.buttonContainer}>
							<Text
								style={[isInCart ? styles.inactiveCartText : styles.cartText]}
							>
								{isInCart ? `${STRINGS.addToCart}е` : `${STRINGS.addToCart}у`}
							</Text>
							<BasketIcon fill={isInCart ? COLORS.cartColor3 : COLORS.white} />
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
