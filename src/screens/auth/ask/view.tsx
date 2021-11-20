import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import Text from "@novomarkt/components/general/Text";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";

const RegisterView = () => {
	let navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.logoText}>Novamarkt</Text>
			<View style={[styles.inputBox, styles.elevation]}>
				<DefaultInput
					title={STRINGS.number}
					placeholder={STRINGS.yourNumber}
				/>
				<DefaultInput
					title={STRINGS.password}
					placeholder={STRINGS.yourPassword}
				/>
				<DefaultButton
					text={STRINGS.auth}
					onPress={() => navigation.navigate(ROUTES.LOGIN)}
				/>
				<View style={styles.rowText}>
					<Text style={styles.blueText}>Забыли пароль?</Text>
					<Text style={styles.askText}>Нет учетной записи?</Text>
				</View>
				<DefaultButton text={STRINGS.registration} />
			</View>
		</View>
	);
};

export default RegisterView;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
	},

	logoText: {
		alignSelf: "center",
		fontSize: 40,
		color: "#0057FF",
		// fontFamily: "Montserrat-Bold",
		fontWeight: "bold",
		marginBottom: 20,
	},

	inputBox: {
		// borderWidth: 1,
		borderRadius: 10,
		paddingVertical: 20,
		marginHorizontal: 15,
		marginVertical: 20,
		backgroundColor: "#fff",
	},

	elevation: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4.84,

		elevation: 15,
	},

	rowText: {
		// alignSelf: "center",
		marginVertical: 10,
		marginHorizontal: 27,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	blueText: {
		fontSize: 14,
		color: "#0052FF",
		textDecorationLine: "underline",
		textDecorationStyle: "solid",
	},

	askText: {
		color: "#023047",
		fontSize: 14,
	},
});
