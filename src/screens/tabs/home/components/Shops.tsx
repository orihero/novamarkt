import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import BrandItem, { BrandItemProps } from "./BrandItem";

let shopsData: BrandItemProps[] = [
	"https://www.ankamall.com.tr/fileadmin/user_upload/GLOBAL/brand_stores/logos/lcwaikiki.jpg",
	"https://grandpharm.uz/uploads/2019/09/samo.png",
	"https://logobank.uz:8005/media/logos_png/TERRA_PRO-01.png",
	"https://www.ankamall.com.tr/fileadmin/user_upload/GLOBAL/brand_stores/logos/lcwaikiki.jpg",
	"https://grandpharm.uz/uploads/2019/09/samo.png",
	"https://logobank.uz:8005/media/logos_png/TERRA_PRO-01.png",
];

const Shops = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{STRINGS.yourShops}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={shopsData}
				renderItem={BrandItem}
				style={styles.container}
			/>
		</View>
	);
};

export default Shops;

const styles = StyleSheet.create({
	title: {
		color: COLORS.defaultBlack,
		fontSize: 19,
		marginLeft: 16,
	},
	container: { paddingLeft: 10, marginBottom: 20 },
});
