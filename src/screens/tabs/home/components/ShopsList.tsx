import requests from "@novomarkt/api/requests";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import BrandItem from "./BrandItem";
import ShopsItem from "./ShopItem";

const ShopsList = () => {
	const [shops, setShops] = useState([]);
	const dispatch = useDispatch();

	let effect = async () => {
		try {
			dispatch(toggleLoading());
			let res = await requests.shops.getShops();
			setShops(res.data.data);
			dispatch(toggleLoading());
		} catch (error) {}
	};
	useEffect(() => {
		effect();
	}, []);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{STRINGS.yourShops}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={shops}
				renderItem={(props) => <ShopsItem {...props} />}
				style={styles.container}
				contentContainerStyle={styles.contentContainerStyle}
			/>
		</View>
	);
};

export default ShopsList;

const styles = StyleSheet.create({
	title: {
		color: COLORS.defaultBlack,
		fontSize: 19,
		marginLeft: 16,
		fontWeight: "700",
		letterSpacing: 0.5,
	},
	container: { marginBottom: 10 },
	contentContainerStyle: {
		paddingLeft: 12,
	},
});
