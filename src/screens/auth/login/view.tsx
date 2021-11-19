import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "../../../components/general/Text";

const LoginView = () => {
	return (
		<View>
			<Text>dsadsa</Text>
			<DefaultButton text={STRINGS.continue} />
			<DefaultInput title={STRINGS.name} placeholder={STRINGS.yourName} />
		</View>
	);
};

export default LoginView;

const styles = StyleSheet.create({});
