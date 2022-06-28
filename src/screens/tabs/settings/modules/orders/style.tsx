import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 20,
		// paddingHorizontal: 20,
		backgroundColor: COLORS.white,
	},

	headerText: {
		marginTop: 20,
		marginHorizontal: 20,
		fontSize: 16,
		color: COLORS.defaultBlack,
	},

	header: {
		marginHorizontal: 20,
		marginVertical: 10,
	},

	shadowBox: {
		marginVertical: 10,
		marginHorizontal: 20,
		elevation: 5,
		borderRadius: 8,
		backgroundColor: COLORS.white,
		padding: 10,
		flexDirection: "row",
		borderWidth: 1,
		flex: 1,
	},

	img: {
		width: 100,
		height: 120,
	},

	text: {
		fontSize: 13,
		fontFamily: "Montserrat-Bold",
		color: COLORS.defaultBlack,
		textTransform: "uppercase",
	},

	contentBox: {
		flex: 1,
		paddingLeft: 5,
	},

	name: {
		marginTop: 10,
		marginBottom: 5,
		fontSize: 13,
		color: COLORS.defaultBlack,
	},

	items: {
		color: COLORS.defaultBlack,
		fontSize: 13,
		alignItems: "center",
		marginBottom: 5,
	},

	price: {
		fontSize: 20,
		color: COLORS.blue,
		fontFamily: "Montserrat-Bold",
		alignSelf: "flex-end",
		// padding: 10,
		// marginBottom: 5,
	},

	cards: {
		width: 35,
		height: 12,
		marginHorizontal: 5,
	},
	cardsV: {
		width: 35,
		height: 10,
		marginRight: 5,
	},
	cardsM: {
		width: 35,
		height: 10,
	},

	row: {
		flexDirection: "row",
	},
});
