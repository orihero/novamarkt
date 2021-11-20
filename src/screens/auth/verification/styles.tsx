import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    txt: {
        fontWeight: 'bold',
    },

    btn: {
        marginBottom: 12,
    },

    timer:{
        marginHorizontal: 25,
        marginTop: -15,
        color: "#0052FF",
    },

    end: {
        color: "#0052FF",
        textDecorationLine: "underline",
		textDecorationStyle: "solid",
        marginTop: 10,
        marginHorizontal: 25,
    },

    textView: {
        marginHorizontal: 23,
    },

	endText: {
		alignSelf: "flex-end",
	},
    
	blueEnd: {
        alignSelf: "flex-end",
        marginVertical: 10,
		color: "#0057FF",
	},

	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
	},

	logoText: {
		alignSelf: "center",
		fontSize: 40,
		color: "#0057FF",
		// fontFamily: "Montserrat-Bold",
		fontWeight: "bold",
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

	rowText: {
		// alignSelf: "center",
		marginVertical: 10,
		marginHorizontal: 27,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	blueText: {
		fontSize: 14,
		color: "#0052FF",
		textDecorationLine: "underline",
		textDecorationStyle: "solid",
	},

	askText: {
		color: "#023047",
		fontSize: 14,
	},

	title: {
		color: "gray",
		fontSize: 15,
	},
});
