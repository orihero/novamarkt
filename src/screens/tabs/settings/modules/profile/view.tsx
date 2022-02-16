import { LocationIcon, PlusIcon } from "@novomarkt/assets/icons/icons";
import EditableInput from "@novomarkt/components/general/EditableInput";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Avatar from "../../components/Avatar";
import useProfileHook from "./hooks";
import { styles } from "./style";
import Modal from "react-native-modal";
import CartSelectItem from "./components/cartItem/view";

export interface UserData {
	name: string;
	email: string;
	phone: string;
	dateOfBirth: string;
	isMale: boolean;
	gender: boolean;
}

const ProfileView = () => {
	let { onTextChange, profileData, setProfileData, onFieldSubmit } =
		useProfileHook();
	return (
		<>
			<BackHeader style={styles.left} />
			<ScrollView style={styles.container}>
				<Text style={styles.header}>Мои данные</Text>
				<View style={styles.shadowBox}>
					<View style={styles.row}>
						<Avatar />
						<EditableInput
							titleStyle={styles.head}
							value={profileData?.name}
							bigger
							onChange={onTextChange}
							placeholder="Имя"
							onSubmit={onFieldSubmit}
							name="name"
						/>
					</View>
					<View style={styles.inputBox}>
						<EditableInput
							title={STRINGS.email}
							value={profileData?.email}
							onChange={onTextChange}
							keyboardType="email-address"
							placeholder=""
							name="email"
						/>
						<EditableInput
							title={STRINGS.phone}
							value={profileData?.phone}
							onChange={onTextChange}
							placeholder="+998 99 989 2923"
							keyboardType="phone-pad"
							name="phone"
						/>
						<EditableInput
							title={STRINGS.dateOfBirth}
							value={profileData?.date}
							onChange={onTextChange}
							placeholder=""
							keyboardType="numeric"
							name="date"
						/>
					</View>
					<View>
						<Text>{STRINGS.sex}</Text>
						<View style={styles.row}>
							<TouchableOpacity
								onPress={() =>
									setProfileData({
										...profileData,
										gender: true,
									})
								}
							>
								<View style={styles.rowButtons}>
									<View
										style={
											profileData?.gender
												? styles.dot
												: styles.dotGray
										}
									>
										<View
											style={
												profileData?.gender
													? styles.background
													: styles.backgroundGray
											}
										/>
									</View>
									<Text style={styles.black}>Муж.</Text>
								</View>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={() =>
									setProfileData({
										...profileData,
										gender: false,
									})
								}
							>
								<View style={styles.rowButtons}>
									<View
										style={
											profileData?.gender
												? styles.dotGray
												: styles.dot
										}
									>
										<View
											style={
												profileData?.gender
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
					<CartSelectItem />
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
					<Text style={styles.blueText}>
						Удаление личново кабинета
					</Text>
				</View>
				<View style={styles.recover}>
					<Text style={styles.txt}>Восстановления пароля</Text>
					<Text style={styles.blueText}>
						Данные для восстановления пароля и sms
					</Text>
				</View>
			</ScrollView>
		</>
	);
};

export default ProfileView;
