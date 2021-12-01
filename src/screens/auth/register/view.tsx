import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import Text from "@novomarkt/components/general/Text";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { styles } from "./style";

const RegisterView = () => {
	let navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.logoText}>Novamarkt</Text>
			<View style={styles.inputBox}>
				<DefaultInput
					containerStyle={styles.input}
					inputStyle={styles.inputStyle}
					title={STRINGS.number}
					placeholder={STRINGS.yourNumber}
				/>
				<DefaultInput
					containerStyle={styles.input}
					inputStyle={styles.inputStyle}
					title={STRINGS.password}
					placeholder={STRINGS.yourPassword}
					textContentType={"password"}
					secureText={true}
				/>
				<DefaultButton
					textStyle={styles.buttonTxt}
					text={STRINGS.auth}
					onPress={() => navigation.navigate(ROUTES.VERIFICATION)}
					containerStyle={styles.button}
				/>
				<View style={styles.rowText}>
					<Text style={styles.blueText}>Забыли пароль?</Text>
					<Text style={styles.askText}>Нет учетной записи?</Text>
				</View>
				<DefaultButton
					textStyle={styles.buttonTxt}
					text={STRINGS.registration}
					onPress={() => navigation.navigate(ROUTES.LOGIN)}
					containerStyle={styles.button}
				/>
			</View>
		</View>
	);
};

export default RegisterView;
