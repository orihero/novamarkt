import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
	},

	logoText: {
		alignSelf: "center",
		fontSize: 45,
		color: "#0057FF",
		fontWeight: "bold",
		marginVertical: 30,
	},

	inputBox: {
		borderRadius: 10,
		paddingVertical: 30,
		marginHorizontal: 20,
		marginVertical: 40,
		backgroundColor: "#fff",
		elevation: 5,
	},

	rowText: {
		marginVertical: 15,
		marginHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	blueText: {
		fontSize: 14,
		color: "#0052FF",
		textDecorationLine: "underline",
		textDecorationStyle: "solid",
	},

	inputStyle: {
		paddingHorizontal: 10,
	},

	askText: {
		color: "#023047",
		fontSize: 14,
	},

	button: {
		marginHorizontal: 20,
	},

	input: {
		marginHorizontal: 20,
	},

	buttonTxt: {
		fontSize: 18,
	},
});
