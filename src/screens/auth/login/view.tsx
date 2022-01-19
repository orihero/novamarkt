import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import Text from "@novomarkt/components/general/Text";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import useLoginHook from "./hooks";
import { styles } from "./style";

const LoginView = () => {
	let {
		loading,
		onStateChange,
		onLogin,
		state,
		onLoginNavigation,
		onForgotPassNavigation,
	} = useLoginHook();

	return (
		<View style={styles.container}>
			<Text style={styles.logoText}>Novamarkt</Text>
			<View style={styles.inputBox}>
				<DefaultInput
					containerStyle={styles.input}
					inputStyle={styles.inputStyle}
					title={STRINGS.number}
					placeholder={STRINGS.yourNumber}
					onChange={onStateChange("phone")}
					value={state.phone}
				/>
				<DefaultInput
					containerStyle={styles.input}
					inputStyle={styles.inputStyle}
					title={STRINGS.password}
					placeholder={STRINGS.yourPassword}
					textContentType={"password"}
					secureText={true}
					onChange={onStateChange("password")}
					value={state.password}
				/>
				<DefaultButton
					textStyle={styles.buttonTxt}
					text={STRINGS.auth}
					onPress={onLogin}
					containerStyle={styles.button}
					loading={loading}
				/>
				<View style={styles.rowText}>
					<TouchableOpacity onPress={onForgotPassNavigation}>
						<Text style={styles.blueText}>Забыли пароль?</Text>
					</TouchableOpacity>
					<Text style={styles.askText}>Нет учетной записи?</Text>
				</View>
				<DefaultButton
					textStyle={styles.buttonTxt}
					text={STRINGS.registration}
					onPress={onLoginNavigation}
					containerStyle={styles.button}
				/>
			</View>
		</View>
	);
};

export default LoginView;
