import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
	Dimensions,
	Image,
	ListRenderItemInfo,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";

export interface CategoryItemProps {
	image?: string;
	name?: string;
}

const CategoryItem = ({
	item: { image, name },
}: ListRenderItemInfo<CategoryItemProps>) => {
	let navigation = useNavigation();
	return (
		<TouchableWithoutFeedback
			onPress={() => navigation.navigate(ROUTES.CATALOG_DETAILS)}
		>
			<View style={styles.container}>
				<Image style={styles.image} source={{ uri: image }} />
				<Text style={styles.text}>{name}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default CategoryItem;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: COLORS.white,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		margin: 8,
		borderRadius: 10,
		alignItems: "center",
	},

	image: {
		width: (Dimensions.get("window").width - 108) / 2,
		height: (Dimensions.get("window").width - 108) / 2,
	},

	text: {
		fontSize: 14,
		color: COLORS.defaultBlack,
	},
});
