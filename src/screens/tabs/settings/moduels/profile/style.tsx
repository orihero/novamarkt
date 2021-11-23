import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingVertical: 20,
	},

	header: {
		fontSize: 20,
		color: COLORS.defaultBlack,
		marginTop: 20,
		marginHorizontal: 20,
	},

	shadowBox: {
		padding: 15,
		marginVertical: 10,
		borderRadius: 8,
		elevation: 5,
		backgroundColor: COLORS.white,
		marginHorizontal: 20,
	},

	row: {
		alignItems: "center",
		flexDirection: "row",
	},

	text: {
		fontSize: 18,
		color: COLORS.defaultBlack,
		marginHorizontal: 15,
	},

	inputBox: {
		marginTop: 20,
	},

	rowButtons: {
		marginTop: 5,
		marginRight: 10,
		flexDirection: "row",
	},

	dot: {
		width: 17,
		height: 17,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: COLORS.purple,
		backgroundColor: COLORS.white,
		alignItems: "center",
		justifyContent: "center",
	},

	background: {
		width: 9,
		height: 9,
		borderRadius: 6,
		backgroundColor: COLORS.purple,
	},
	dotGray: {
		width: 17,
		height: 17,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: COLORS.gray,
		backgroundColor: COLORS.white,
		alignItems: "center",
		justifyContent: "center",
	},

	backgroundGray: {
		width: 9,
		height: 9,
		borderRadius: 6,
		backgroundColor: COLORS.gray,
	},

	black: {
		marginLeft: 5,
		color: COLORS.defaultBlack,
	},

	head: {
		// marginTop: -10,
		alignSelf: "center",
		color: COLORS.defaultBlack,
		fontFamily: "Montserrat-Medium",
	},

	shadowBoxTwo: {
		padding: 15,
		marginVertical: 10,
		borderRadius: 8,
		elevation: 5,
		backgroundColor: COLORS.white,
		marginHorizontal: 20,
		paddingRight: 50,
	},

	bank: {
		color: COLORS.defaultBlack,
		fontSize: 18,
		marginBottom: 10,
	},

	border: {
		borderRadius: 8,
		borderWidth: 2,
		borderColor: COLORS.blue,
		alignItems: "center",
		justifyContent: "center",
		padding: 35,
	},

	blueText: {
		color: COLORS.blue,
		fontSize: 14,
		marginTop: 10,
	},

	round: {
		width: 50,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 2,
		borderRadius: 30,
		borderColor: COLORS.blue,
	},

	locate: {
		padding: 15,
		marginVertical: 10,
		borderRadius: 8,
		elevation: 5,
		backgroundColor: COLORS.white,
		marginHorizontal: 20,
	},

	moscow: {
		marginLeft: 10,
	},

	txt: {
		color: COLORS.defaultBlack,
		fontSize: 18,
		marginBottom: 10,
	},

	delete: {
		padding: 15,
		marginVertical: 10,
		borderRadius: 8,
		elevation: 5,
		backgroundColor: COLORS.white,
		marginHorizontal: 20,
	},

	recover: {
		padding: 15,
		marginVertical: 10,
		borderRadius: 8,
		elevation: 5,
		backgroundColor: COLORS.white,
		marginHorizontal: 20,
		marginBottom: 60,
	},

	left:{
		marginHorizontal: 20,
	}
});
