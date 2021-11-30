import { BottomArrow, FilterIcon } from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const SelectableFlter = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.row}>
				<Text style={styles.text}>Популярные</Text>
				<BottomArrow fill={COLORS.blue} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.row}>
				<Text style={styles.text}>Фильтры</Text>
				<FilterIcon fill={COLORS.blue} />
			</TouchableOpacity>
		</View>
	);
};

export default SelectableFlter;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingVertical: 8,
		borderBottomWidth: 1.5,
		borderColor: COLORS.lightGray,
		flexDirection: "row",
		justifyContent: "space-between",
        
	},
	text: {
		color: COLORS.blue,
		marginRight: 5,
		fontSize: 16,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
	},
});
