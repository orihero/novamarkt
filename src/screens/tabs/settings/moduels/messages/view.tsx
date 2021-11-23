import React, { Component, useState } from "react";
import { ScrollView, TextInput, View } from "react-native";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";
import { styles } from "./style";
import { SaveIconMessage, TelegramIcon } from "@novomarkt/assets/icons/icons";
import { COLORS } from "@novomarkt/constants/colors";

const MessageView = () => {
	const [sendingMsg, setSendingMsg] = useState("");
	const [messages, setMessages] = useState([""]);

	const getValue = () => {
		setMessages([...messages, sendingMsg]);
		setSendingMsg("");
		// console.log(sendingMsg);
	};

	return (
		<ScrollView style={styles.container}>
			<BackHeader name={STRINGS.myMessages} style={styles.header} />
			<Text style={styles.headerTxt}>{STRINGS.myMessages}</Text>
			<View style={styles.box}>
				<View style={styles.top}>
					<Text style={styles.topText}>Чат поддержки</Text>
				</View>
				<View style={styles.inner}>
					<View style={styles.innerBox}>
						<Text style={styles.innerText}>{STRINGS.comment}</Text>
					</View>
					{messages.map((msg, ind) =>
						msg ? (
							<View key={ind} style={styles.myBox}>
								<Text style={styles.myMsg}>{msg}</Text>
							</View>
						) : null
					)}
				</View>
				<View style={styles.texting}>
					<View style={styles.textingBox}>
						<SaveIconMessage fill={COLORS.gray} />
						<TextInput
							placeholder={STRINGS.yourMessage}
							value={sendingMsg}
							style={styles.input}
							onChangeText={(text) => setSendingMsg(text)}
						/>
					</View>
					<TelegramIcon
						fill={COLORS.gray}
						style={styles.tgicon}
						onPress={() => getValue()}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

export default MessageView;
