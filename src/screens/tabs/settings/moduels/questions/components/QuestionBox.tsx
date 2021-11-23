import DefaultButton from "@novomarkt/components/general/DefaultButton";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const QuestionBox = () => {
	return (
		<View style={{ backgroundColor: COLORS.white }}>
			<View style={styles.footer}>
				<Text style={styles.footerTxt}>У вас есть вопросы ?</Text>
				<TextInput style={styles.input} placeholder={"Ваше имя"} />
				<TextInput
					style={styles.input}
					keyboardType="email-address"
					placeholder={"Ваш  e-mail"}
				/>
				<TextInput style={styles.bigger} placeholder={"Ваш отзыв"} />
                <DefaultButton containerStyle={styles.button} text={"Отправить отзыв"} />
			</View>
		</View>
	);
};

export default QuestionBox;

const styles = StyleSheet.create({
	footer: {
		backgroundColor: COLORS.skyBlue,
		marginHorizontal: 20,
        marginVertical: 40,
		borderRadius: 10,
		padding: 15,
        paddingRight: 40,
		elevation: 8,
	},

	footerTxt: {
		color: COLORS.defaultBlack,
		fontSize: 20,
	},

	input: {
		marginVertical: 10,
		backgroundColor: COLORS.white,
		borderRadius: 8,
		paddingHorizontal: 15,
		fontStyle: "italic",
	},

	bigger: {
		backgroundColor: COLORS.white,
		borderRadius: 8,
		paddingHorizontal: 15,
		paddingBottom: 60,
		fontStyle: "italic",
	},

    button: {
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 50,
    }
});
