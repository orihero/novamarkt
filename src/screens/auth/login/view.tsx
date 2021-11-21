import { FbIcon, GmailIcon, OkIcon } from "@novomarkt/assets/icons/icons";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import { GRADIENT_COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Text from "../../../components/general/Text";
import { styles } from "./style";

const LoginView = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.logoText}>Novamarkt</Text>
			<View style={[styles.inputBox, styles.elevation]}>
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
				<View style={styles.rowLogos}>
				<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1.2, y: 1 }}
				colors={GRADIENT_COLORS}
				style={styles.logo}
			>
				<FbIcon/>
			</LinearGradient>
				<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1.2, y: 1 }}
				colors={GRADIENT_COLORS}
				style={styles.logo}
			>
				<GmailIcon/>
			</LinearGradient>
				<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1.2, y: 1 }}
				colors={GRADIENT_COLORS}
				style={styles.logo}
			>
				<GmailIcon/>
			</LinearGradient>
				<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1.2, y: 1 }}
				colors={GRADIENT_COLORS}
				style={styles.logo}
			>
				<OkIcon/>
			</LinearGradient>
				</View>
			</View>
		</View>
	);
};

export default LoginView;

