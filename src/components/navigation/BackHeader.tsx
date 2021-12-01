import { LeftArrow, SearchIcon } from "@novomarkt/assets/icons/icons";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
	StyleProp,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
	ViewStyle,
} from "react-native";
import { COLORS } from "../../constants/colors";
import Text from "../general/Text";

export interface BackHeaderProps {
	name?: string;
	style?: StyleProp<ViewStyle>;
	hasSearch?: boolean;
}

const BackHeader = ({
	name = STRINGS.backHeaderName,
	style,
	hasSearch,
}: BackHeaderProps) => {
	let navigation = useNavigation();
	return (
		<View style={[styles.container, style]}>
			<View style={styles.row}>
				<TouchableWithoutFeedback
					hitSlop={{ bottom: 10, top: 10, left: 10, right: 10 }}
					onPress={navigation.goBack}
				>
					<LeftArrow />
				</TouchableWithoutFeedback>
				<Text style={styles.text}>{name}</Text>
			</View>
			{hasSearch && <SearchIcon fill={COLORS.blue} />}
		</View>
	);
};

export default BackHeader;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		// marginHorizontal: 20,
	},

	text: {
		marginLeft: 10,
		fontSize: 20,
		color: COLORS.defaultBlack,
		fontFamily: "Montserrat",
		fontWeight: "600"
	},

	row: {
		flexDirection: "row",
		alignItems: "center",
	},
});
