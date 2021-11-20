import { COLORS, GRADIENT_COLORS } from "@novomarkt/constants/colors";
import React from "react";
import {
	GestureResponderEvent,
	StyleSheet,
	TouchableWithoutFeedback,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Text from "./Text";

export interface DefaultButtonProps {
	text?: string;
	onPress?: (event: GestureResponderEvent) => void;
}

const DefaultButton = ({ onPress, text }: DefaultButtonProps) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1.2, y: 1 }}
				colors={GRADIENT_COLORS}
				style={styles.container}
			>
				<Text style={styles.text}>{text}</Text>
			</LinearGradient>
		</TouchableWithoutFeedback>
	);
};

export default DefaultButton;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 12,
		justifyContent: "center",
		marginHorizontal: 25,
		marginTop: 10,
		borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4.84,

		elevation: 5,
	},
	text: {
		color: COLORS.white,
		fontSize: 20,
	},
});
