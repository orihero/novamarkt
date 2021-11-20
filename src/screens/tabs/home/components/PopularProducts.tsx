import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductItem, { ProductItemProps } from "./ProductItem";

let productsData: ProductItemProps[] = [
	{
		category: "Костюми",
		image: "https://ydbrand.imgix.net/YD/Products/19ASUX04_BLK_1.png",
		price: "1400  ₽",
		shopName: "ZARA",
		name: "Элегантный Костюм с брюками ZARA стиль",
	},
	{
		category: "Костюми",
		image: "https://ydbrand.imgix.net/YD/Products/19ASUX04_BLK_1.png",
		price: "1400  ₽",
		shopName: "ZARA",
		name: "Элегантный Костюм с брюками ZARA стиль",
	},
	{
		category: "Костюми",
		image: "https://ydbrand.imgix.net/YD/Products/19ASUX04_BLK_1.png",
		price: "1400  ₽",
		shopName: "ZARA",
		name: "Элегантный Костюм с брюками ZARA стиль",
	},
	{
		category: "Костюми",
		image: "https://ydbrand.imgix.net/YD/Products/19ASUX04_BLK_1.png",
		price: "1400  ₽",
		shopName: "ZARA",
		name: "Элегантный Костюм с брюками ZARA стиль",
	},
	{
		category: "Костюми",
		image: "https://ydbrand.imgix.net/YD/Products/19ASUX04_BLK_1.png",
		price: "1400  ₽",
		shopName: "ZARA",
		name: "Элегантный Костюм с брюками ZARA стиль",
	},
	{
		category: "Костюми",
		image: "https://ydbrand.imgix.net/YD/Products/19ASUX04_BLK_1.png",
		price: "1400  ₽",
		shopName: "ZARA",
		name: "Элегантный Костюм с брюками ZARA стиль",
	},
	{
		category: "Костюми",
		image: "https://ydbrand.imgix.net/YD/Products/19ASUX04_BLK_1.png",
		price: "1400  ₽",
		shopName: "ZARA",
		name: "Элегантный Костюм с брюками ZARA стиль",
	},
];

const PopularProducts = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{STRINGS.popularProducts}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={productsData}
				renderItem={ProductItem}
				style={styles.container}
			/>
		</View>
	);
};

export default PopularProducts;

const styles = StyleSheet.create({
	title: {
		color: COLORS.defaultBlack,
		fontSize: 19,
		marginLeft: 16,
	},
	container: { marginBottom: 20 },
});
