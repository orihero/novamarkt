import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import React from "react";
import {
	StyleProp,
	StyleSheet,
	TextInput,
	TextStyle,
	View,
	ViewStyle,
} from "react-native";
import Text from "./Text";

export interface DefaultInputProps {
	title?: string;
	placeholder?: string;
	titleStyle?: StyleProp<TextStyle>;
	containerStyle?: ViewStyle;
	inputStyle?: TextStyle;
}

const DefaultInput = ({
	placeholder,
	title,
	titleStyle,
	containerStyle,
	inputStyle,
}: DefaultInputProps) => {
	return (
		<View style={[styles.container, containerStyle]}>
			<Text style={[styles.title, titleStyle]}>{title}</Text>
			<TextInput
				style={[styles.input, inputStyle]}
				placeholder={placeholder}
				placeholderTextColor={COLORS.gray}
			/>
		</View>
	);
};

export default DefaultInput;

const styles = StyleSheet.create({
	title: {
		color: COLORS.defaultBlack,
		fontSize: 16,
		lineHeight: 27,
	},
	input: {
		borderColor: COLORS.darkBorder,
		borderWidth: 1,
		borderRadius: 8,
		width: WINDOW_WIDTH - 80,
		fontFamily: "Montserrat-Medium",
	},
	container: {
		alignSelf: "center",
		marginBottom: 20,
	},
});
