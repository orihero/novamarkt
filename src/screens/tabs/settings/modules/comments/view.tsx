import requests from "@novomarkt/api/requests";
import {
	ArrowBottomMarked,
	Checked,
	MarkedStar,
	NotMarkedStar,
} from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import { productsData } from "@novomarkt/screens/tabs/home/components/ProductsList";
import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import CommentItem from "./components/CommentItem";
import { styles } from "./style";

const CommentView = () => {
	const [reviews, setReviews] = useState();
	const getReviewsList = async () => {
		try {
			let res = await requests.products.reviewsList();
			setReviews(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getReviewsList();
	}, []);

	console.log(reviews);
	return (
		<View style={styles.container}>
			<BackHeader name={STRINGS.comments} style={styles.header} />
			<View style={styles.rowHeader}>
				<Text style={styles.txt}>Сортировать по:</Text>
				<Text style={styles.blueText}>Дате</Text>
				<ArrowBottomMarked fill={COLORS.blue} style={styles.arrow} />
				<Text style={styles.blueText2}>Оценке</Text>
			</View>
			{/* <FlatList
				data={productsData}
				renderItem={CommentItem}
				showsVerticalScrollIndicator={false}
			/> */}
			<ScrollView>
				<View style={{ marginVertical: 10 }}>
					{reviews?.map((item) => (
						<View style={styles.containerComment}>
							<View style={styles.boxes}>
								<View style={styles.nameRow}>
									<Text style={styles.name}>
										{item.user.name.length > 10
											? item.user.name.substring(0, 12)
											: item.user.name}
									</Text>
									<View style={styles.stars}>
										{new Array(5).fill(1).map((e, i) => {
											if (i < item.rate) {
												return <MarkedStar fill={COLORS.blue} />;
											} else {
												return <NotMarkedStar fill={COLORS.whiteGray} />;
											}
										})}
									</View>
								</View>
								<Text style={styles.comment}>{item.review}</Text>
								<View style={styles.row}>
									<Text>{item.date.split(" ")[0]}</Text>
									<View style={styles.row}>
										<Checked fill={COLORS.blue} style={styles.icon} />
										<Text>Я купил товар</Text>
									</View>
								</View>
							</View>
						</View>
					))}
				</View>
			</ScrollView>
		</View>
	);
};

export default CommentView;
