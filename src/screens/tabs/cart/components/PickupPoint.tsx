import React from "react";
import {
	Image,
	StyleSheet,
	TouchableNativeFeedbackBase,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import Text from "@novomarkt/components/general/Text";
import { STRINGS } from "@novomarkt/locales/strings";
import { COLORS } from "@novomarkt/constants/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/core";
import { ROUTES } from "@novomarkt/constants/routes";

export let imageURL =
	"https://static.theblacktux.com/products/suits/gray-suit/1_2018_0326_TBT_Spring-Ecomm_Shot03_-31_w1_1812x1875.jpg?width=1024";

const PickupPoint = () => {
	let navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={styles.headerTxt}>{STRINGS.pickupPoint}</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate(ROUTES.CHECKOUT_POINT)}
			>
				<Text style={styles.buttonTxt}>
					{STRINGS.selectPickupPoint}
				</Text>
			</TouchableOpacity>
			<View style={styles.box}>
				<Text style={styles.boxTxt}>
					Срок доставки будет расчитан после выбора пункт самовывоза
				</Text>
				<View style={styles.boxNum}>
					<Image source={{ uri: imageURL }} style={styles.boxImage} />
					<View style={styles.imageNum}>
						<Text style={styles.num}>1</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default PickupPoint;

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		marginHorizontal: 20,
	},

	headerTxt: {
		color: COLORS.defaultBlack,
		fontSize: 19,
		fontWeight: "700",
		letterSpacing: 0.5,
	},

	button: {
		marginVertical: 10,
		backgroundColor: COLORS.menuBackground,
		paddingVertical: 10,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
	},

	buttonTxt: {
		fontSize: 16,
		color: COLORS.blue,
	},

	box: {
		marginVertical: 20,
		padding: 15,
		backgroundColor: COLORS.white,
		borderRadius: 8,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
	},

	boxTxt: {
		fontSize: 13,
		color: COLORS.defaultBlack,
	},

	boxImage: {
		borderRadius: 8,
		width: 80,
		height: 80,
		marginTop: 5,
	},

	boxNum: {
		marginTop: 10,
		flexDirection: "row",
		zIndex: 2,
	},

	imageNum: {
		zIndex: 1,
		marginLeft: -10,
		width: 20,
		height: 20,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.lighBlue,
	},

	num: {
		fontSize: 12,
		color: COLORS.white,
	},
});
