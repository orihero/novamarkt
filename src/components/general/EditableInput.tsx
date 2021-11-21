import { EditIcon, SaveIcon } from "@novomarkt/assets/icons/icons";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import React, { useState } from "react";
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
	bigger?: boolean;
	onChange?: (t: string) => void;
}

const EditableInput = ({
	title,
	placeholder,
	titleStyle,
	value,
	bigger,
	onChange,
}: EditableInputProps) => {
	const [isEditing, setIsEditing] = useState(false);
	let onEditPress = () => {
		setIsEditing((e) => !e);
	};
	return (
		<View style={[styles.container, bigger && { paddingLeft: 10 }]}>
			<Text style={[styles.title, titleStyle]}>{title}</Text>
			<View style={styles.box}>
				{isEditing ? (
					<TextInput
						style={[
							styles.value,
							bigger && { fontSize: 20, marginTop: 0 },
						]}
						value={value}
						onChangeText={onChange}
						placeholder={placeholder}
					/>
				) : (
					<Text
						style={[
							styles.textStyle,
							bigger && { fontSize: 20, marginTop: 0 },
						]}
					>
						{value || placeholder}
					</Text>
				)}
				<View style={styles.iconContainer}>
					{isEditing ? (
						<SaveIcon
							stroke={COLORS.blue}
							style={styles.icon}
							onPress={onEditPress}
						/>
					) : (
						<EditIcon style={styles.icon} onPress={onEditPress} />
					)}
				</View>
			</View>
		</View>
	);
};

export default EditableInput;

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
		height: 50,
	},

	title: {
		color: COLORS.gray,
		fontSize: 15,
	},

	value: {
		fontSize: 15,
		color: COLORS.defaultBlack,
		fontFamily: "Montserrat-Medium",
		paddingVertical: 0,
		paddingHorizontal: 0,
		marginVertical: 0,
		marginHorizontal: 0,
		marginTop: 10,
		marginBottom: 0,
		paddingBottom: 0,
	},

	icon: {
		marginLeft: 20,
		marginTop: 10,
		alignSelf: "center",
	},

	box: {
		flexDirection: "row",
	},

	textStyle: {
		fontSize: 15,
		marginTop: 13.5,
		marginBottom: 0,
		alignSelf: "center",
		color: COLORS.defaultBlack,
	},

	iconContainer: {
		width: 30,
		height: 30,
		alignSelf: "center",
	},
});
