import { BasketIcon, CrashIcon } from "@novomarkt/assets/icons/icons";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import SecondaryButton from "@novomarkt/components/general/SecondaryButton";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import {
	Image,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { productsData } from "../../home/components/ProductsList";

export let imageURL =
	"https://static.theblacktux.com/products/suits/gray-suit/1_2018_0326_TBT_Spring-Ecomm_Shot03_-31_w1_1812x1875.jpg?width=1024";

export let ProductsData = {
	name: "Элегантный Костюм с брюками ZARA стиль",
	price: "1400  ₽",
};

export default function Products() {
	return (
		<View style={styles.container}>
			<View>
				<Image source={{ uri: imageURL }} style={styles.image} />
			</View>
			<View style={styles.textBox}>
				<Text style={styles.text}>{ProductsData.name}</Text>
				<View style={styles.row}>
					<Text style={styles.price}>{ProductsData.price}</Text>
					<DefaultButton
						containerStyle={styles.button}
						secondary={true}
					>
						<View style={styles.buttonContainer}>
							<Text style={[styles.inactiveCartText]}>
								{STRINGS.addToCart}
							</Text>
							<BasketIcon fill={COLORS.cartColor3} />
						</View>
					</DefaultButton>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: "row",
	},
	inactiveCartText: {
		color: COLORS.cartColor3,
		marginRight: 4,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 8,
	},
	container: {
		// marginHorizontal: 20,
		paddingHorizontal: 20,
		paddingVertical: 15,
		flexDirection: "row",
		flex: 1,
		borderBottomWidth: 1,
		borderColor: COLORS.lightGray,
	},

	text: {
		color: COLORS.defaultBlack,
		fontSize: 13,
		// width: "80%",
		fontWeight: "700",
		letterSpacing: 0.5
	},
	textBox: {
		paddingHorizontal: 15,
		marginRight: 120,
		// justifyContent: "space-between",
	},

	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingRight: 50,
		// flex: 1,
		alignItems: "flex-end",
		marginBottom: 5,
	},

	price: {
		color: COLORS.blue,
		fontSize: 15,
	},

	button: {
		backgroundColor: COLORS.white,
		// flex: 1,
		// marginLeft: 10,
	},

	buttonText: {
		color: COLORS.defaultBlack,
	},
});
