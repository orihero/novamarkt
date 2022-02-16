import requests, { appendUrl } from "@novomarkt/api/requests";
import { ProductItemResponse } from "@novomarkt/api/types";
import { BasketIcon, HeartIcon } from "@novomarkt/assets/icons/icons";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useAppSelector } from "@novomarkt/store/hooks";
import { cartSelector } from "@novomarkt/store/slices/cartSlice";
import { useNavigation } from "@react-navigation/core";
import React, { ReactElement } from "react";
import {
	Image,
	ListRenderItemInfo,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { useDispatch } from "react-redux";

const ProductItem = ({
	item,
}: ListRenderItemInfo<ProductItemResponse>): ReactElement => {
	let secondary = true;
	const dispatch = useDispatch();
	let navigation = useNavigation();
	const cart = useAppSelector(cartSelector);
	console.log(cart);

	let { photo, brand, category, name, price, discount, price_old } = item;

	// const onCartPress = async () => {
	// 	try {
	// 		let res = await requests.products.addToCart({
	// 			amount,
	// 			product_id,
	// 		});
	// 	} catch (error) {}
	// };

	return (
		<TouchableWithoutFeedback
			onPress={() =>
				//@ts-ignore
				navigation.navigate(ROUTES.PRODUCT_DETAILS, { item })
			}
		>
			<View style={styles.container}>
				<Image
					source={{ uri: appendUrl(photo) }}
					style={styles.image}
				/>
				<View style={styles.absolute}>
					<HeartIcon fill={COLORS.red} />
					{discount && (
						<View style={styles.discount}>
							<Text style={styles.dscountText}>{discount}%</Text>
						</View>
					)}
				</View>
				<View style={styles.details}>
					<View style={styles.row}>
						<Text style={styles.brand}>{category?.name}</Text>
						<Text style={styles.brand}>{brand?.name}</Text>
					</View>
					<Text style={styles.name}>{name}</Text>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<Text style={styles.price}>{price} ₽</Text>
						<Text style={styles.oldPrice}>{price_old} ₽</Text>
					</View>
					<DefaultButton
						containerStyle={styles.button}
						secondary={secondary}
					>
						<View style={styles.buttonContainer}>
							<Text
								style={[
									secondary
										? styles.inactiveCartText
										: styles.cartText,
								]}
							>
								{STRINGS.addToCart}
							</Text>
							<BasketIcon
								fill={
									secondary ? COLORS.cartColor3 : COLORS.white
								}
							/>
						</View>
					</DefaultButton>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ProductItem;

const styles = StyleSheet.create({
	dscountText: { fontSize: 12, color: COLORS.defaultBlack },
	discount: {
		borderRadius: 8,
		padding: 4,
		backgroundColor: COLORS.white,
	},
	absolute: {
		position: "absolute",
		right: 10,
		top: 10,
		justifyContent: "space-between",
		height: 162,
		alignItems: "flex-end",
	},
	cartText: {
		color: COLORS.white,
		marginRight: 4,
		fontWeight: "700",
	},
	inactiveCartText: {
		color: COLORS.cartColor3,
		marginRight: 8,
		fontFamily: "Montserrat-Medium",
	},
	button: {
		marginHorizontal: 0,
	},
	price: {
		color: COLORS.blue,
		fontSize: 15,
		marginVertical: 10,
		fontWeight: "700",
		letterSpacing: 0.5,
	},
	name: {
		color: COLORS.defaultBlack,
		fontSize: 13,
		fontWeight: "700",
		letterSpacing: 0.5,
	},
	brand: {
		color: COLORS.gray,
		fontSize: 11,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	image: {
		width: WINDOW_WIDTH / 2 - 20,
		height: 180,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
	container: {
		backgroundColor: COLORS.white,
		borderRadius: 8,
		elevation: 2,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		width: WINDOW_WIDTH / 2 - 20,
		marginVertical: 15,
		marginHorizontal: 5,
	},
	details: {
		paddingHorizontal: 8,
		paddingBottom: 24,
		paddingTop: 8,
	},
	buttonContainer: {
		flexDirection: "row",
	},

	oldPrice: {
		color: COLORS.gray,
		textDecorationLine: "line-through",
	},
});
