import { LeftArrow } from "@novomarkt/assets/icons/icons";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleProp, StyleSheet, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from "react-native";
import { COLORS } from "../../constants/colors";
import Text from "../general/Text";

export interface BackHeaderProps {
	name?: string;
	style?: StyleProp<ViewStyle>;
}

const BackHeader = ({name=STRINGS.backHeaderName, style}: BackHeaderProps) => {
	let navigation = useNavigation();
	return (
		<View style={[styles.container, style,]}>
			<TouchableWithoutFeedback
				hitSlop={{ bottom: 10, top: 10, left: 10, right: 10 }}
				onPress={navigation.goBack}
			>
				<LeftArrow />
			</TouchableWithoutFeedback>
			<Text style={styles.text}>{name}</Text>
		</View>
	);
};

export default BackHeader;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		// marginHorizontal: 20,
	},

	text: {
		marginLeft: 10,
		fontSize: 18,
		color: COLORS.defaultBlack,
	},
});
