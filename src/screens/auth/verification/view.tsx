import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import SecondaryButton from "@novomarkt/components/general/SecondaryButton";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "../../../components/general/Text";
import { styles } from "./styles";

const VerificationView = () => {
	let navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.logoText}>Novamarkt</Text>
			<View style={[styles.inputBox, styles.elevation]}>
				<View style={styles.textView}>
					<Text style={styles.endText}>Мы отправили код на <Text style={styles.txt}>+998999009090</Text> номер</Text>
					<Text style={styles.blueEnd}>Изменить номер</Text>
				</View>

				<DefaultInput
					title={STRINGS.code}
					placeholder={STRINGS.yourCode}
					titleStyle={styles.title}
				/>
                <Text style={styles.timer}>-0.59</Text>
				<SecondaryButton text={STRINGS.resend} containerStyle={styles.btn} />
				<DefaultButton text={STRINGS.registration} onPress={() => navigation.navigate(ROUTES.LOGIN)} />
                <Text style={styles.end}>Уже зарегистрирован?</Text>
			</View>
		</View>
	);
};

export default VerificationView;

