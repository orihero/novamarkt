import { appendUrl } from "@novomarkt/api/requests";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import React, { ReactElement } from "react";
import { Image, ListRenderItemInfo, StyleSheet, View } from "react-native";

export interface CategoryItemProps {
	name: string;
	photo: string;
}

const CategoryItem = ({
	item: { photo, name },
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
			<Image style={styles.image} source={{ uri: appendUrl(photo) }} />
		</View>
	);
};

export default CategoryItem;

const styles = StyleSheet.create({
	text: {
		fontSize: 14,
		color: COLORS.gray,
		letterSpacing: 1,
		fontWeight: "700",
	},
	nameContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 10,
		flexShrink: 1,
	},
	container: {
		backgroundColor: COLORS.white,
		borderRadius: 8,
		elevation: 2,
		shadowOpacity: 0.3,
		shadowRadius: 3,
		shadowOffset: {
			width: 0,
			height: 0,
		},
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
