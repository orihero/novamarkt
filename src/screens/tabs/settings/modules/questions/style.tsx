import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		paddingVertical: 20,
		// paddingBottom: 20,
		// height: 600,
	},

	header: {
		marginHorizontal: 20,
	},

	headerTxt: {
		marginHorizontal: 20,
		marginVertical: 20,
		color: COLORS.defaultBlack,
		fontSize: 20,
	},

	
});
