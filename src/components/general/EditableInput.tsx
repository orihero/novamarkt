import { EditIcon } from "@novomarkt/assets/icons/icons";
import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import React from "react";
import {
	Dimensions,
	StyleProp,
	StyleSheet,
	TextInput,
	TextStyle,
	View,
} from "react-native";
import Text from "./Text";

export interface EditableInputProps {
	title?: string;
	placeholder?: string;
	titleStyle?: StyleProp<TextStyle>;
	value?: string;
}

const EditableInput = ({
	title,
	placeholder,
	titleStyle,
	value,
}: EditableInputProps) => {
	return (
		<View style={styles.container}>
			<Text style={[styles.title, titleStyle]}>{title}</Text>
			<View style={styles.box}>
				<Text style={styles.value}>{value}</Text>
				<EditIcon style={styles.icon} />
			</View>
		</View>
	);
};

export default EditableInput;

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
	},

	title: {
		color: COLORS.gray,
		fontSize: 15,
	},

	value: {
		fontSize: 15,
		color: COLORS.defaultBlack,
	},

	icon: {
		marginLeft: 20,
	},

	box: {
		flexDirection: "row",
	},
});
