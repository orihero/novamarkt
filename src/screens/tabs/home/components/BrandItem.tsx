import { appendUrl } from "@novomarkt/api/requests";
import { COLORS } from "@novomarkt/constants/colors";
import React, { ReactElement } from "react";
import { Image, ListRenderItemInfo, StyleSheet, View } from "react-native";

export type BrandItemProps = {
	photo: string;
};

const BrandItem = ({
	item: { photo },
}: ListRenderItemInfo<BrandItemProps>): ReactElement => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: appendUrl(photo) }} style={styles.image} />
		</View>
	);
};

export default BrandItem;

const styles = StyleSheet.create({
	container: {
		width: 85,
		height: 55,
		elevation: 2,
		shadowOpacity: 0.3,
		shadowRadius: 3,
		shadowOffset: {
			width: 0,
			height: 0,
		},
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
