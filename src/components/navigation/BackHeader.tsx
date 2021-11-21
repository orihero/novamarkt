import { LeftArrow } from "@novomarkt/assets/icons/icons";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { COLORS } from "../../constants/colors";
import Text from "../general/Text";

const BackHeader = (props) => {
	let navigation = useNavigation();
	return (
		<View {...props} style={{ ...styles.container, ...props.style }}>
			<TouchableWithoutFeedback
				hitSlop={{ bottom: 5, top: 5, left: 5, right: 5 }}
				onPress={navigation.goBack}
			>
				<LeftArrow />
			</TouchableWithoutFeedback>
			<Text style={styles.text}>Мои данные</Text>
		</View>
	);
};

export default BackHeader;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},

	text: {
		marginLeft: 10,
		fontSize: 18,
		color: COLORS.defaultBlack,
	},
});
