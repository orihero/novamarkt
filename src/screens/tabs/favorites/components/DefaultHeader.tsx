import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { StyleSheet, View } from "react-native";

export interface DefaultHeaderProps {
	name?: string;
}

const DefaultHeader = ({ name }: DefaultHeaderProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{name}</Text>
		</View>
	);
};

export default DefaultHeader;

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
		marginHorizontal: 20,
	},
	text: {
		fontSize: 20,
		color: COLORS.defaultBlack,
	},
});
