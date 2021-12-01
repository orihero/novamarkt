import {
	CrashIcon,
	HeartIcon,
	MinusIcon,
	PlusCounterIcon,
} from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS, GRADIENT_COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export let imageURL =
	"https://static.theblacktux.com/products/suits/gray-suit/1_2018_0326_TBT_Spring-Ecomm_Shot03_-31_w1_1812x1875.jpg?width=1024";

export let ProductsData = {
	name: "Элегантный Костюм с брюками ZARA стиль",
	price: "1400  ₽",
};

export default function ChooseItemNum() {
	return (
		<View style={styles.container}>
			<View>
				<Image style={styles.leftImage} source={{ uri: imageURL }} />
			</View>
			<View style={styles.textBox}>
				<Text style={styles.headerTxt}>{ProductsData.name}</Text>
				<Text style={styles.itemTxt}>
					{STRINGS.color}
					<Text> Белый</Text>
				</Text>
				<Text style={styles.itemTxt}>
					{STRINGS.size}
					<Text> XXL - 44</Text>
				</Text>
				<View style={styles.rowTxt}>
					<Text style={styles.blueTxt}>1400 ₽</Text>
					<Text style={styles.lineThrough}>2000 рубл</Text>
				</View>
				<View style={styles.counter}>
					<TouchableOpacity>
						<LinearGradient
							start={{ x: 0, y: 0 }}
							end={{ x: 3, y: 0 }}
							colors={GRADIENT_COLORS}
							style={styles.minus}
						>
							<MinusIcon fill={COLORS.white} />
						</LinearGradient>
					</TouchableOpacity>
					<View style={styles.topBottom}>
						<Text>1 шт</Text>
					</View>
					<TouchableOpacity>
						<LinearGradient
							start={{ x: 0, y: 0 }}
							end={{ x: 3, y: 0 }}
							colors={GRADIENT_COLORS}
							style={styles.plus}
						>
							<PlusCounterIcon fill={COLORS.white} />
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.iconBox}>
				<HeartIcon fill={COLORS.gray} />
				<CrashIcon fill={COLORS.gray} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// borderWidth: 1,
		// padding: 10,
		marginHorizontal: 20,
		marginVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	leftImage: {
		width: 80,
		height: 90,
		borderRadius: 8,
	},

	textBox: {
		flexShrink: 1,
		paddingHorizontal: 10,
	},

	headerTxt: {
		fontSize: 14,
		letterSpacing: 0.5,
		fontWeight: "700",
		color: COLORS.defaultBlack,
	},

	itemTxt: {
		fontSize: 11,
		color: COLORS.defaultBlack,
	},

	rowTxt: {
		alignItems: "center",
		flexDirection: "row",
		marginVertical: 5,
	},

	blueTxt: {
		fontSize: 15,
		fontWeight: "700",
		color: COLORS.blue,
	},

	lineThrough: {
		fontSize: 12,
		marginLeft: 10,
		textDecorationLine: "line-through",
	},

	counter: {
		// alignItems: "center",
		flexDirection: "row",
	},

	iconBox: {
		paddingVertical: 5,
		justifyContent: "space-between",
	},

	item: {
		color: COLORS.white,
	},

	minus: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
	},

	plus: {
		padding: 10,
		paddingHorizontal: 15,
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
	},

	topBottom: {
		// height: "100%",
		paddingHorizontal: 15,
		borderColor: COLORS.whiteGray,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		justifyContent: "center",
	},
});
