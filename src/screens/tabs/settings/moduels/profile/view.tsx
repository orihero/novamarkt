import { EditIcon, PlusIcon } from "@novomarkt/assets/icons/icons";
import EditableInput from "@novomarkt/components/general/EditableInput";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useCallback, useState } from "react";
import { Image, ScrollView, View } from "react-native";
import Avatar from "../../components/Avatar";
import { styles } from "./style";

export interface UserData {
	name: string;
	email: string;
}

const ProfileView = () => {
	const [data, setData] = useState<UserData>();
	let onTextChange = useCallback((key: keyof UserData) => {
		return (value: string) => {
			//TODO check
			//@ts-ignore
			setData({ [key]: value });
		};
	}, []);
	return (
		<ScrollView style={styles.container}>
			<BackHeader style={styles.headerComp} />
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
						value={"mironshohnasimov@gmail.com"}
					/>
					<EditableInput
						title={STRINGS.phone}
						value={"+99899 739 3538"}
					/> 
					<EditableInput
						title={STRINGS.dateOfBirth}
						value={"11.12.2000"}
					/>
				</View>
				<View>
					<Text>{STRINGS.sex}</Text>
					<View style={styles.row}>
						<View style={styles.rowButtons}>
							<View style={styles.dot}>
								<View style={styles.background}></View>
							</View>
							<Text style={styles.black}>Муж.</Text>
						</View>
						<View style={styles.rowButtons}>
							<View style={styles.dotGray}>
								<View style={styles.backgroundGray}></View>
							</View>
							<Text style={styles.black}>Жен.</Text>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default ProfileView;
