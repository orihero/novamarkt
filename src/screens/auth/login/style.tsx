import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
	},

	logoText: {
		alignSelf: "center",
		fontSize: 40,
		color: "#0057FF",
		fontFamily: "Montserrat-Bold",
		marginBottom: 20,
	},

	inputBox: {
		borderRadius: 10,
		paddingVertical: 20,
		marginHorizontal: 20,
		marginVertical: 20,
		backgroundColor: "#fff",
	},

	elevation: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4.84,

		elevation: 15,
	},

	rowLogos: {
		marginHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-around",
		marginVertical: 20,
	},
	logo: {
		width: 50,
		height: 40,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
	},

	input: {
		marginHorizontal: 20,
	},

	inputStyle: {
		paddingHorizontal: 10,
	},

	button: {
		marginVertical: 10,
		marginHorizontal: 20,
	},

	text: {
		padding: 0,
		fontSize: 18,
	},
});
