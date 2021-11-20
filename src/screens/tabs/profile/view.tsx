import React from "react";
import { Image, ScrollView, View } from "react-native";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { styles } from "./style";
import { EditIcon, PlusIcon } from "@novomarkt/assets/icons/icons";
import EditableInput from "@novomarkt/components/general/EditableInput";
import { STRINGS } from "@novomarkt/locales/strings";

const ProfileView = () => {
	return (
		<ScrollView style={styles.container}>
			<BackHeader style={styles.headerComp} />
			<Text style={styles.header}>Мои данные</Text>
			<View style={styles.shadowBox}>
				<View style={styles.row}>
					<View style={styles.img}>
						<Image
							style={styles.avatar}
							source={{
								uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz-77X11MoGE22xVjjPhbpW6lPj6I0SkcTQ&usqp=CAU",
							}}
						/>
						<View style={styles.opacity}>
							<PlusIcon style={styles.plus} />
						</View>
					</View>
					<Text style={styles.text}>Javohir Akramjonov</Text>
					<EditIcon />
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
