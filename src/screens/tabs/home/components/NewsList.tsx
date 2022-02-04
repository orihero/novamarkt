import requests from "@novomarkt/api/requests";
import { NewsItemResponse } from "@novomarkt/api/types";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import NewsItem, { NewsItemProps } from "./NewsItem";

export let newsData: NewsItemProps[] = [
	{
		image: "https://ydbrand.imgix.net/YD/Products/19ASUX04_BLK_1.png",
		content:
			"New Year Sale Vector Art, Icons, and Graphics for Free Download",
		date: "12.10.2021",
	},
	{
		content:
			"New Year Sale Vector Art, Icons, and Graphics for Free Download",
		image: "https://static.vecteezy.com/system/resources/thumbnails/000/262/606/small/Winter-sale-Banner2.jpg",
		date: "12.10.2021",
	},
	{
		content:
			"New Year Sale Vector Art, Icons, and Graphics for Free Download",
		image: "https://static.vecteezy.com/system/resources/thumbnails/000/262/606/small/Winter-sale-Banner2.jpg",
		date: "12.10.2021",
	},
	{
		content:
			"New Year Sale Vector Art, Icons, and Graphics for Free Download",
		image: "https://static.vecteezy.com/system/resources/thumbnails/000/262/606/small/Winter-sale-Banner2.jpg",
		date: "12.10.2021",
	},
];

export interface NewsData {
	title?: string;
}

const NewsList = ({ title = STRINGS.news }: NewsData) => {
	const [news, setNews] = useState<NewsItemResponse[]>([]);
	let effect = async () => {
		try {
			let res = await requests.news.getNews();
			setNews(res.data.data);
		} catch (error) {}
	};
	useEffect(() => {
		effect();
	}, []);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={news}
				renderItem={NewsItem}
				style={styles.container}
				contentContainerStyle={styles.contentContainerStyle}
			/>
		</View>
	);
};

export default NewsList;

const styles = StyleSheet.create({
	title: {
		color: COLORS.defaultBlack,
		fontSize: 19,
		marginLeft: 16,
		marginBottom: 20,
	},
	container: { marginBottom: 20 },
	contentContainerStyle: { paddingHorizontal: 12 },
});
