import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CategoryItem, { CategoryItemProps } from "./CategoryItem";

let categoriesData: CategoryItemProps[] = [
	{
		image: "https://opt-1451630.ssl.1c-bitrix-cdn.ru/upload/medialibrary/e79/ml8njs4orkvaz33x.jpg?157164501152618",
		name: "Детские товары",
	},
	{
		image: "https://костюмы-оренбург.рф/wp-content/uploads/2020/12/strog-086-768x976.jpg",
		name: "Костюмы",
	},
	{
		image: "https://apollo-olx.cdnvideo.ru/v1/files/92eqtomi9o0k2-UZ/image;s=644x461",
		name: "Финки",
	},
	{
		image: "https://opt-1451630.ssl.1c-bitrix-cdn.ru/upload/medialibrary/e79/ml8njs4orkvaz33x.jpg?157164501152618",
		name: "Детские товары",
	},
];

const PopularCategories = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{STRINGS.popularCategories}</Text>
			<FlatList
				showsVerticalScrollIndicator={false}
				numColumns={2}
				data={categoriesData}
				renderItem={CategoryItem}
				style={styles.container}
				contentContainerStyle={styles.contentContainerStyle}
			/>
		</View>
	);
};

export default PopularCategories;

const styles = StyleSheet.create({
	title: {
		color: COLORS.defaultBlack,
		fontSize: 19,
		marginLeft: 16,
		fontWeight: "700",
		letterSpacing: 0.5,
	},
	container: { marginBottom: 20 },
	contentContainerStyle: { paddingHorizontal: 12 },
});
