import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 20,
		backgroundColor: COLORS.white,
	},

	header: {
		marginHorizontal: 20,
	},

	rowHeader: {
		marginVertical: 20,
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

	containerComment: {
		backgroundColor: COLORS.white,
	},

	boxes: {
		marginHorizontal: 20,
		marginVertical: 10,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		backgroundColor: COLORS.white,
		borderRadius: 8,
		padding: 15,
	},

	nameRow: {
		flexDirection: "row",
	},

	name: {
		color: COLORS.defaultBlack,
		fontSize: 16,
	},

	stars: {
		marginLeft: 30,
		alignSelf: "center",
		flexDirection: "row",
	},

	comment: {
		maxWidth: 200,
		marginVertical: 10,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	icon: {
		marginRight: 5,
	},
});
