import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		// paddingVertical: 40,
		backgroundColor: COLORS.white,
	},

	header: {
		// marginTop: 20,
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: COLORS.white,
		elevation: 4,
	},

	headerText: {
		fontSize: 15,
		color: COLORS.blue,
	},

	button: {
		flexDirection: "row",
	},

	buttonText: {
		color: COLORS.white,
		marginRight: 10,
	},

	buttonCon: {
		paddingHorizontal: 10,
		paddingVertical: 0,
		marginTop: 0,
		marginRight: 0,
	},

	carousel: {
		paddingVertical: 20,
	},

	itemName: {
		color: COLORS.defaultBlack,
		marginHorizontal: 25,
		fontSize: 17,
	},

	credit: {
		padding: 18,
		backgroundColor: COLORS.lightGray,
		marginHorizontal: 20,
		borderRadius: 8,
		flexDirection: "row",
		alignItems: "center",
	},

	creditPrice: {
		marginLeft: 10,
	},

	creditName: {
		color: COLORS.defaultBlack,
		fontSize: 14,
	},

	creditPriceText: {
		color: COLORS.defaultBlack,
		fontSize: 15,
	},

	map: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderColor: COLORS.lightGray,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	key: {
		color: COLORS.defaultBlack,
		fontSize: 14,
	},

	compos: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		// marginHorizontal: 20,
		paddingHorizontal: 20,
		paddingVertical: 15,
		marginTop: 20,
		borderBottomWidth: 1,
		borderColor: COLORS.lightGray,
	},

	composition: {
		color: COLORS.defaultBlack,
		fontSize: 15,
	},

	buttonTxt: {
		color: COLORS.white,
		fontSize: 16,
		marginHorizontal: 20,
	},

	composTwo: {
		marginVertical: 20,
		marginHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	rowHeader: {
		marginTop: 20,
		marginVertical: 10,
		marginHorizontal: 20,
		flexDirection: "row",
	},

	arrow: {
		alignSelf: "center",
		marginLeft: 0.5,
	},

	txt: {
		fontSize: 14,
	},

	blueText: {
		// textDecorationLine: "underline",
		// textDecorationStyle: 'solid',
		// textDecorationColor: COLORS.blue,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.blue,
		marginLeft: 10,
		fontSize: 14,
	},

	blueText2: {
		fontSize: 14,
		marginLeft: 10,
	},

	flexEnd: {
		color: COLORS.blue,
		marginHorizontal: 20,
		alignSelf: "flex-end",
		textDecorationLine: "underline",
		textDecorationColor: COLORS.blue,
	},

	buttonReview: {
		fontSize: 16,
		color: COLORS.white,
	},

	contentContainerStyle: { paddingHorizontal: 12 },

	containerFlat: {
		marginBottom: 20,
		alignSelf: 'center',
	},

	title: {
		color: COLORS.defaultBlack,
		fontSize: 20,
		marginHorizontal: 20,
		marginVertical: 20,
	},

	marginBottom: {
		marginBottom: 20,
	}
});
