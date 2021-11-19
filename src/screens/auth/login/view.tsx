import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "../../../components/general/Text";

const LoginView = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.logoText}>Novamarkt</Text>
			<View style={styles.inputBox}>
				<DefaultInput
					title={STRINGS.name}
					placeholder={STRINGS.yourName}
				/>
				<DefaultInput
					title={STRINGS.number}
					placeholder={STRINGS.yourNumber}
				/>
				<DefaultInput
					title={STRINGS.password}
					placeholder={STRINGS.yourPassword}
				/>
				<DefaultButton text={STRINGS.continue} />
			</View>
		</View>
	);
};

export default LoginView;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 50,
	},

	logoText: {
		alignSelf: "center",
		fontSize: 40,
		color: "#0057FF",
		fontFamily: "Montserrat-Bold",
	},

	inputBox: {
		borderWidth: 1,
		borderRadius: 10,
		paddingVertical: 20,
		marginHorizontal: 15,
		marginVertical: 20,
		
	},
});
