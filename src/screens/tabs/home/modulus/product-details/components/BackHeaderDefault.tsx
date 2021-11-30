import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "@novomarkt/components/general/Text";
import { HeartIcon, LeftArrow, UploadIcon } from "@novomarkt/assets/icons/icons";
import { COLORS } from "@novomarkt/constants/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

const BackHeaderDefault = () => {
	return (
		<View style={styles.row}>
			<LeftArrow/>
			<View style={styles.upload}>
				<HeartIcon style={styles.heart} fill={COLORS.blue}/>
				<UploadIcon fill={COLORS.blue} />
			</View>
		</View>
	);
};

export default BackHeaderDefault;

const styles = StyleSheet.create({
	row: {
		// marginHorizontal: 20,
		paddingHorizontal: 20,
		paddingBottom: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomWidth: 0.5,
		borderColor: COLORS.whiteGray,
		backgroundColor: COLORS.white,
		marginTop: 20,
	},

	upload: {
		flexDirection: 'row',
	},

	heart: {
		marginRight: 20,
	}
});
