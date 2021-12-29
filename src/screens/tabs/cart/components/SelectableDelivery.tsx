import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const SelectableDelivery = () => {
	const [activeIndex, setIsActive] = useState(0);
	return (
		<View style={styles.container}>
			<Text style={styles.headerTxt}>{STRINGS.deliveryChoose}</Text>
			<TouchableOpacity
				style={activeIndex === 0 ? styles.activeBox : styles.box}
				onPress={() => setIsActive(0)}
			>
				<View
					style={
						activeIndex === 0 ? styles.activeBorder : styles.border
					}
				>
					<View
						style={
							activeIndex === 0 ? styles.activeDot : styles.dot
						}
					></View>
				</View>
				<View style={styles.textBox}>
					<Text style={styles.text}>{STRINGS.pickUpPoints}</Text>
					<Text style={styles.comment}>с 9 ноября , от 1 ₽</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				style={activeIndex === 1 ? styles.activeBox : styles.box}
				onPress={() => setIsActive(1)}
			>
				<View
					style={
						activeIndex === 1 ? styles.activeBorder : styles.border
					}
				>
					<View
						style={
							activeIndex === 1 ? styles.activeDot : styles.dot
						}
					></View>
				</View>
				<View style={styles.textBox}>
					<Text style={styles.text}>{STRINGS.courerDelivery}</Text>
					<Text style={styles.comment}>с 9 ноября , от 199 ₽</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default SelectableDelivery;

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
	},

	headerTxt: {
		fontSize: 19,
		color: COLORS.defaultBlack,
		fontWeight: "700",
		letterSpacing: 0.5,
	},

	activeBox: {
		marginVertical: 10,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: COLORS.blue,
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		backgroundColor: COLORS.white,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
	},

	box: {
		marginVertical: 10,
		borderWidth: 1,
		borderColor: COLORS.white,
		borderRadius: 8,
		alignItems: "center",
		flexDirection: "row",
		backgroundColor: COLORS.white,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		padding: 10,
	},

	border: {
		borderWidth: 1,
		borderColor: COLORS.whiteGray,
		width: 12,
		height: 12,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
	},

	activeBorder: {
		borderWidth: 1,
		borderColor: COLORS.blue,
		width: 12,
		height: 12,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
	},

	dot: {
		width: 6,
		height: 6,
		borderRadius: 10,
		backgroundColor: COLORS.white,
	},

	activeDot: {
		width: 6,
		height: 6,
		borderRadius: 10,
		backgroundColor: COLORS.blue,
	},

	textBox: {
		marginHorizontal: 10,
	},

	text: {
		fontSize: 16,
		color: COLORS.defaultBlack,
	},

	comment: {
		fontSize: 12,
	},
});
