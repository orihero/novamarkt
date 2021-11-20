import { FbIcon, GmailIcon, OkIcon } from "@novomarkt/assets/icons/icons";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import { GRADIENT_COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Text from "../../../components/general/Text";

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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 50,
		backgroundColor: "#fff",
		justifyContent: 'center',
	},

	logoText: {
		alignSelf: "center",
		fontSize: 40,
		color: "#0057FF",
		fontFamily: "Montserrat-Bold",
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

	rowLogos: {
		// borderWidth: 1,
		marginHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
	},
	logo: {
		width: 50,
		height: 40,
		alignItems: "center",
		justifyContent: 'center',
		borderRadius: 8,
	}
});
