import { appendUrl } from "@novomarkt/api/requests";
import { NewsItemResponse } from "@novomarkt/api/types";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { ReactElement } from "react";
import { Image, ListRenderItemInfo, StyleSheet, View } from "react-native";

export interface NewsItemProps {
	image: string;
	content: string;
	date: string;
}

const NewsItem = ({
	item: { date, photo, description_mini },
}: ListRenderItemInfo<NewsItemResponse>): ReactElement => {
	let [day, time] = date.split(" ");
	return (
		<View style={styles.container}>
			<Image source={{ uri: appendUrl(photo) }} style={styles.image} />
			<View style={styles.content}>
				<Text style={styles.text}>{description_mini}</Text>
				<View style={styles.row}>
					<DefaultButton
						textStyle={styles.buttonText}
						containerStyle={styles.buttonContainer}
						text={STRINGS.detailed}
					/>
					<View style={{ alignItems: "flex-end" }}>
						<Text style={styles.dateStyle}>{day}</Text>
						<Text style={styles.dateStyle}>{time}</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default NewsItem;

const styles = StyleSheet.create({
	text: {
		fontSize: 12,
		color: COLORS.defaultBlack,
	},
	dateStyle: { color: COLORS.gray },
	buttonContainer: {
		marginTop: 0,
		marginHorizontal: 0,
	},
	buttonText: {
		fontSize: 12,
	},
	row: {
		marginVertical: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
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
		width: WINDOW_WIDTH / 2 - 5,
		margin: 4,
		marginRight: 8,
	},
	image: {
		width: WINDOW_WIDTH / 2 - 5,
		height: 100,
		borderRadius: 8,
	},
	content: {
		padding: 8,
	},
});
