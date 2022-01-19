import {
	EditIcon,
	LocationIcon,
	PlusIcon,
} from "@novomarkt/assets/icons/icons";
import EditableInput from "@novomarkt/components/general/EditableInput";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useCallback, useState } from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import Avatar from "../../components/Avatar";
import { styles } from "./style";

export interface UserData {
	name: string;
	email: string;
	phone: string;
	dateOfBirth: string;
	isMale: boolean;
}

const ProfileView = () => {
	const [data, setData] = useState<UserData>({
		email: "",
		phone: "",
		dateOfBirth: "",
		isMale: true,
		name: "",
	});
	let onTextChange = useCallback((key: keyof UserData) => {
		return (value: string) => {
			//TODO check
			// @ts-ignore
			setData({ ...data, [key]: value });
		};
	}, []);
	return (
		<ScrollView style={styles.container}>
			<BackHeader style={styles.left} />
			<Text style={styles.header}>Мои данные</Text>
			<View style={styles.shadowBox}>
				<View style={styles.row}>
					<Avatar />
					<EditableInput
						titleStyle={styles.head}
						value={data?.name}
						bigger
						onChange={onTextChange("name")}
						placeholder="Имя"
					/>
				</View>
				<View style={styles.inputBox}>
					<EditableInput
						title={STRINGS.email}
						value={data?.email}
						onChange={onTextChange("email")}
						placeholder="mironshohnasimov@gmail.com"
						keyboardType="email-address"
					/>
					<EditableInput
						title={STRINGS.phone}
						value={data?.phone}
						onChange={onTextChange("phone")}
						placeholder="+998 99 989 2923"
						keyboardType="phone-pad"
					/>
					<EditableInput
						title={STRINGS.dateOfBirth}
						value={data?.dateOfBirth}
						onChange={onTextChange("dateOfBirth")}
						placeholder="01.01.2000"
						keyboardType="numeric"
					/>
				</View>
				<View>
					<Text>{STRINGS.sex}</Text>
					<View style={styles.row}>
						<TouchableOpacity
							onPress={() => setData({ ...data, isMale: true })}
						>
							<View style={styles.rowButtons}>
								<View
									style={
										data?.isMale
											? styles.dot
											: styles.dotGray
									}
								>
									<View
										style={
											data?.isMale
												? styles.background
												: styles.backgroundGray
										}
									/>
								</View>
								<Text style={styles.black}>Муж.</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => setData({ ...data, isMale: false })}
						>
							<View style={styles.rowButtons}>
								<View
									style={
										data?.isMale
											? styles.dotGray
											: styles.dot
									}
								>
									<View
										style={
											data?.isMale
												? styles.backgroundGray
												: styles.background
										}
									/>
								</View>
								<Text style={styles.black}>Жен.</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={styles.shadowBoxTwo}>
				<Text style={styles.bank}> Банковские карты </Text>
				<View style={styles.border}>
					<View style={styles.round}>
						<PlusIcon stroke={COLORS.blue} fill={COLORS.blue} />
					</View>
					<Text style={styles.blueText}>Добавить карту</Text>
				</View>
			</View>
			<View style={styles.locate}>
				<Text style={styles.txt}>Адресa клиента</Text>
				<View style={styles.row}>
					<LocationIcon fill={COLORS.gray} />
					<Text style={styles.moscow}>Москва</Text>
				</View>
			</View>
			<View style={styles.delete}>
				<Text style={styles.txt}>Удаление личного кабинета</Text>
				<Text>Как только Ваш личный кабинет будет удален</Text>
				<Text style={styles.blueText}>Удаление личново кабинета</Text>
			</View>
			<View style={styles.recover}>
				<Text style={styles.txt}>Восстановления пароля</Text>
				<Text style={styles.blueText}>
					Данные для восстановления пароля и sms
				</Text>
			</View>
		</ScrollView>
	);
};

export default ProfileView;
