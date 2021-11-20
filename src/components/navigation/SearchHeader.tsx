import { DeliveryIcon, SearchIcon } from "@novomarkt/assets/icons/icons";
import { COLORS } from "@novomarkt/constants/colors";
import { REGULAR_FONT_FAMILY } from "@novomarkt/constants/fonts";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const SearchHeader = () => {
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder={STRINGS.searching}
				/>
				<SearchIcon fill={COLORS.gray} />
			</View>
			<DeliveryIcon fill={COLORS.gray} />
		</View>
	);
};

export default SearchHeader;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		paddingRight: 16,
	},
	inputContainer: {
		flexDirection: "row",
		backgroundColor: COLORS.lightGray,
		borderRadius: 8,
		paddingVertical: 4,
		paddingHorizontal: 10,
		marginHorizontal: 16,
		marginVertical: 12,
		fontSize: 16,
		alignItems: "center",
		flex: 1,
		justifyContent: "space-between",
	},
	input: {
		fontFamily: REGULAR_FONT_FAMILY,
	},
});
