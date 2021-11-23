import { PlayIcon } from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useState } from "react";
import {
	StyleSheet,
	TouchableOpacity, View
} from "react-native";

const HandlingTextBox = () => {
	const [shouldShow, setShouldShow] = useState(true);
	return (
		<View style={styles.container}>
			<View>
				<TouchableOpacity
					style={styles.row}
					onPress={() => setShouldShow(!shouldShow)}
				>
					<PlayIcon fill={COLORS.white} />
					<Text style={styles.text}>
						Название любого вопроса из этой сферы деятельности?
					</Text>
				</TouchableOpacity>
				{!shouldShow ? (
					<Text style={styles.textBox}>
						{STRINGS.answer}
					</Text>
				) : null}
			</View>
		</View>
	);
};

export default HandlingTextBox;

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.white,
		marginHorizontal: 20,
		marginVertical: 10,
	},

	row: {
		flexDirection: "row",
		alignItems: "center",
	},

	text: {
		color: COLORS.defaultBlack,
		fontSize: 14,
		marginLeft: 10,
	},

	textBox: {
		padding: 20,
		marginVertical: 20,
		borderRadius: 10,
		backgroundColor: COLORS.chatColor,
	},
});
