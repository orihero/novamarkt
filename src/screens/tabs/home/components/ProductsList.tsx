import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductItem, { ProductItemProps } from "./ProductItem";

let productsData: ProductItemProps[] = [
	{
		category: "Костюми",
		image: "https://static.theblacktux.com/products/suits/black-suit/2_161129_TBT_Ecom_Black_Suit_1_1664_w1_1812x1875.jpg",
		price: "1400  ₽",
		shopName: "ZARA",
		name: "Элегантный Костюм с брюками ZARA стиль",
		discount: -21,
	},
	{
		category: "Костюми",
		image: "https://ydbrand.imgix.net/YD/Products/19ASUX04_BLK_1.png",
		price: "1400  ₽",
		shopName: "ZARA",
		name: "Элегантный Костюм с брюками ZARA стиль",
		discount: -50,
	},
	{
		category: "Костюми",
		image: "https://ydbrand.imgix.net/YD/Products/19ASUX04_BLK_1.png",
		price: "1400  ₽",
		shopName: "ZARA",
		discount: -46,
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

export interface PropularProductsProps {
	title?: string;
}

const ProductsList = ({
	title = STRINGS.popularProducts,
}: PropularProductsProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={productsData}
				renderItem={ProductItem}
				style={styles.container}
				contentContainerStyle={styles.contentContainerStyle}
			/>
		</View>
	);
};

export default ProductsList;

const styles = StyleSheet.create({
	title: {
		color: COLORS.defaultBlack,
		fontSize: 19,
		marginLeft: 16,
		marginBottom: 20,
	},
	container: { marginBottom: 20 },
	contentContainerStyle: { paddingHorizontal: 12 },
});
