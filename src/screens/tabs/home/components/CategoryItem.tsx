import { BasketIcon } from "@novomarkt/assets/icons/icons";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { ReactElement, useState } from "react";
import { Image, ListRenderItemInfo, StyleSheet, View } from "react-native";

export interface CategoryItemProps {
	name: string;
	image: string;
}

const CategoryItem = ({
	item: { image, name },
}: ListRenderItemInfo<CategoryItemProps>): ReactElement => {
	return (
		<View style={styles.container}>
			<View style={styles.nameContainer}>
				<Text
					numberOfLines={2}
					ellipsizeMode="tail"
					style={styles.text}
				>
					{name}
				</Text>
			</View>
			<Image style={styles.image} source={{ uri: image }} />
		</View>
	);
};

export default CategoryItem;

const styles = StyleSheet.create({
	text: {
		fontSize: 10,
		color: COLORS.gray,
	},
	nameContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 20,
		flexShrink: 1,
	},
	container: {
		backgroundColor: COLORS.white,
		borderRadius: 8,
		elevation: 2,
		marginHorizontal: 4,
		marginVertical: 10,
		flexDirection: "row",
		width: WINDOW_WIDTH / 2 - 20,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 8,
	},
});
