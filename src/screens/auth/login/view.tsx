import { FbIcon, GmailIcon, OkIcon } from "@novomarkt/assets/icons/icons";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import { GRADIENT_COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Text from "../../../components/general/Text";
import { styles } from "./style";

const LoginView = () => {
	let navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={styles.logoText}>Novamarkt</Text>
			<View style={[styles.inputBox, styles.elevation]}>
				<DefaultInput
					containerStyle={styles.input}
					inputStyle={styles.inputStyle}
					title={STRINGS.name}
					placeholder={STRINGS.yourName}
				/>
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
				/>
				<DefaultButton
					text={STRINGS.continue}
					textStyle={styles.text}
					containerStyle={styles.button}
					onPress={() => navigation.navigate(ROUTES.TABS)}
				/>
				<View style={styles.rowLogos}>
					<LinearGradient
						start={{ x: 0, y: 0 }}
						end={{ x: 1.2, y: 1 }}
						colors={GRADIENT_COLORS}
						style={styles.logo}
					>
						<FbIcon />
					</LinearGradient>
					<LinearGradient
						start={{ x: 0, y: 0 }}
						end={{ x: 1.2, y: 1 }}
						colors={GRADIENT_COLORS}
						style={styles.logo}
					>
						<GmailIcon />
					</LinearGradient>
					<LinearGradient
						start={{ x: 0, y: 0 }}
						end={{ x: 1.2, y: 1 }}
						colors={GRADIENT_COLORS}
						style={styles.logo}
					>
						<GmailIcon />
					</LinearGradient>
					<LinearGradient
						start={{ x: 0, y: 0 }}
						end={{ x: 1.2, y: 1 }}
						colors={GRADIENT_COLORS}
						style={styles.logo}
					>
						<GmailIcon />
					</LinearGradient>
				</View>
			</View>
		</View>
	);
};

export default LoginView;
