import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import SecondaryButton from "@novomarkt/components/general/SecondaryButton";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import Text from "../../../components/general/Text";
import { styles } from "./styles";

const VerificationView = () => {
	let navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.logoText}>Novamarkt</Text>
			<View style={styles.inputBox}>
				<View style={styles.textView}>
					<Text style={styles.endText}>
						Мы отправили код на{" "}
						<Text style={styles.txt}>+998999009090</Text> номер
					</Text>
					<Text style={styles.blueEnd}>Изменить номер</Text>
				</View>
				<DefaultInput
					containerStyle={styles.input}
					inputStyle={styles.inputStyle}
					title={STRINGS.code}
					placeholder={STRINGS.yourCode}
					titleStyle={styles.title}
				/>
				<Text style={styles.timer}>-0.59</Text>
				<SecondaryButton
					text={STRINGS.resend}
					containerStyle={styles.btn}
					textStyle={styles.buttonTxt}
				/>
				<DefaultButton
					text={STRINGS.registration}
					textStyle={styles.buttonTxt}
					containerStyle={styles.defButton}
					onPress={() => navigation.navigate(ROUTES.LOGIN)}
				/>
				<Text style={styles.end}>Уже зарегистрирован?</Text>
			</View>
		</View>
	);
};

export default VerificationView;
