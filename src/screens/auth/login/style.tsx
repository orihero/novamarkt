import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 50,
		backgroundColor: "#fff",
		justifyContent: 'center',
	},

	logoText: {
		alignSelf: "center",
		fontSize: 40,
		color: "#0057FF",
		fontFamily: "Montserrat-Bold",
		marginBottom: 20,
	},

	inputBox: {
		// borderWidth: 1,
		borderRadius: 10,
		paddingVertical: 20,
		marginHorizontal: 15,
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
		// borderWidth: 1,
		marginHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
	},
	logo: {
		width: 50,
		height: 40,
		alignItems: "center",
		justifyContent: 'center',
		borderRadius: 8,
	}
});
