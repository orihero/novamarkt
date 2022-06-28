import requests from "@novomarkt/api/requests";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import CategoryItem from "./CategoryItem";

const PopularCategories = () => {
	const [categories, setCategories] = useState([]);
	const dispatch = useDispatch();
	let effect = async () => {
		try {
			dispatch(toggleLoading());
			let res = await requests.categories.getCategories();
			setCategories(res.data.data);
			dispatch(toggleLoading());
		} catch (error) {}
	};
	useEffect(() => {
		effect();
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{STRINGS.popularCategories}</Text>
			<FlatList
				showsVerticalScrollIndicator={false}
				numColumns={2}
				data={categories}
				style={styles.container}
				renderItem={(props) => <CategoryItem {...props} />}
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
	container: { marginBottom: 10 },
	contentContainerStyle: { paddingHorizontal: 12 },
});
