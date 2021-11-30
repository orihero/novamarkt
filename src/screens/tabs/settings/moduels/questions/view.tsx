import React from "react";
import {
	RecyclerViewBackedScrollView,
	ScrollView,
	ScrollViewBase,
	View,
} from "react-native";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";
import { styles } from "./style";
import HandlingTextBox from "./components/HandlingTextBox";
import QuestionBox from "./components/QuestionBox";

const QuestionsView = () => {
	return (
		<ScrollView style={styles.container}>
			<BackHeader name={STRINGS.faq} style={styles.header} />
			<Text style={styles.headerTxt}>Часто задаемевые вопросы</Text>
			<HandlingTextBox />
			<HandlingTextBox />
			<HandlingTextBox />
			<QuestionBox title={"У вас есть вопросы"} button={"Отправить отзыв"} />
		</ScrollView>
	);
};

export default QuestionsView;
