import { DeliveryIcon, SearchIcon } from "@novomarkt/assets/icons/icons";
import { COLORS } from "@novomarkt/constants/colors";
import { REGULAR_FONT_FAMILY } from "@novomarkt/constants/fonts";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";

interface SearchProps {
	autoFocus?: boolean;
	onChange?: () => void;
}

const SearchHeader = ({ autoFocus, onChange }: SearchProps) => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder={STRINGS.searching}
					placeholderTextColor={COLORS.whiteGray}
					autoFocus={autoFocus}
					autoCorrect={false}
					onChange={onChange}
					onFocus={() => {
						navigation.navigate(ROUTES.SEARCH);
					}}
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
		backgroundColor: COLORS.white,
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
		color: COLORS.defaultBlack,
	},
	input: {
		paddingVertical: Platform.OS == "android" ? 10 : 12,
		fontFamily: REGULAR_FONT_FAMILY,
		width: "90%",
	},
});
