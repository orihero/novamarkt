import { COLORS } from "@novomarkt/constants/colors";
import React, { ReactElement } from "react";
import {
	Image,
	ListRenderItem,
	ListRenderItemInfo,
	StyleSheet,
	View,
} from "react-native";

export type BrandItemProps = string;

const BrandItem = ({
	item,
}: ListRenderItemInfo<BrandItemProps>): ReactElement => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: item }} style={styles.image} />
		</View>
	);
};

export default BrandItem;

const styles = StyleSheet.create({
	container: {
		width: 85,
		height: 55,
		elevation: 2,
		marginHorizontal: 6,
		backgroundColor: COLORS.white,
		justifyContent: "center",
		alignItems: "center",
		margin: 10,
		borderRadius: 8,
	},
	image: {
		width: 50,
		height: 30,
	},
});
