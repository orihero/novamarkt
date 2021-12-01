import { DeliveryIcon, SearchIcon } from "@novomarkt/assets/icons/icons";
import { COLORS } from "@novomarkt/constants/colors";
import { REGULAR_FONT_FAMILY } from "@novomarkt/constants/fonts";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchHeader = () => {
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder={STRINGS.searching}
					placeholderTextColor={COLORS.whiteGray}
				/>
				<SearchIcon fill={COLORS.whiteGray} />
			</View>
			<DeliveryIcon fill={COLORS.whiteGray} />
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
		flex: 1,
		borderRadius: 8,
		marginVertical: 10,
		marginLeft: 16,
		marginRight: 10,
		paddingHorizontal: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: COLORS.lightGray,
	},
	input: {
		fontFamily: REGULAR_FONT_FAMILY,
	},
});
