import { BasketIcon, HeartIcon } from "@novomarkt/assets/icons/icons";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { ReactElement } from "react";
import { Image, ListRenderItemInfo, StyleSheet, View } from "react-native";

export interface NewsItemProps {
	image: string;
	content: string;
	date: string;
}

const NewsItem = ({
	item: { content, date, image },
}: ListRenderItemInfo<NewsItemProps>): ReactElement => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: image }} style={styles.image} />
			<View style={styles.content}>
				<Text style={styles.text}>{content}</Text>
				<View style={styles.row}>
					<DefaultButton
						textStyle={styles.buttonText}
						containerStyle={styles.buttonContainer}
						text={STRINGS.detailed}
					/>
					<Text style={styles.dateStyle}>{date}</Text>
				</View>
			</View>
		</View>
	);
};

export default NewsItem;

const styles = StyleSheet.create({
	text: {
		fontSize: 12,
	},
	dateStyle: { color: COLORS.gray },
	buttonContainer: {
		marginHorizontal: 0,
	},
	buttonText: {
		fontSize: 12,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	container: {
		backgroundColor: COLORS.white,
		borderRadius: 8,
		elevation: 2,
		width: 180,
		margin: 4,
	},
	image: {
		width: 180,
		height: 120,
		borderRadius: 8,
	},
	content: {
		padding: 8,
	},
});
