import DefaultButton from "@novomarkt/components/general/DefaultButton";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { ReactElement } from "react";
import { Image, ListRenderItemInfo, StyleSheet, View } from "react-native";

export interface ProductItemProps {
	image: string;
	price: string;
	shopName: string;
	category: string;
	name: string;
}

const ProductItem = ({
	item: { image, category, price, shopName, name },
}: ListRenderItemInfo<ProductItemProps>): ReactElement => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: image }} style={styles.image} />
			<View style={styles.details}>
				<View style={styles.row}>
					<Text style={styles.brand}>{category}</Text>
					<Text style={styles.brand}>{shopName}</Text>
				</View>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.price}>{price}</Text>
				<DefaultButton containerStyle={styles.button} >
					<Text>{STRINGS.addToCart}</Text>
				</DefaultButton>
			</View>
		</View>
	);
};

export default ProductItem;

const styles = StyleSheet.create({
	button: {
		marginHorizontal: 0,
	},
	price: {
		color: COLORS.blue,
		fontSize: 15,
		marginVertical: 10,
	},
	name: {
		color: COLORS.defaultBlack,
		fontSize: 13,
	},
	brand: {
		fontWeight: "400",
		color: COLORS.gray,
		fontSize: 11,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	image: {
		width: 160,
		height: 160,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
	container: {
		backgroundColor: COLORS.white,
		borderRadius: 8,
		elevation: 2,
		width: 180,
		margin: 16,
	},
	details: {
		paddingHorizontal: 8,
		paddingBottom: 24,
		paddingTop: 8,
	},
});
