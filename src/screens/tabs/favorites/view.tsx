import Text from "@novomarkt/components/general/Text";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useState } from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import ProductItem from "../home/components/ProductItem";
import { productsData } from "../home/components/ProductsList";
import DefaultHeader from "./components/DefaultHeader";
import Products from "./components/Products";
import SelectableItems from "./components/SelectableItems";
import SelectableMenu from "./components/SelectableMenu";
import { styles } from "./style";

const FavoriteView = () => {
	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	return (
		<ScrollView style={styles.container}>
			<DefaultHeader name={STRINGS.favorites} />
			<SelectableMenu />
			<SelectableItems onPress={toggleModal} />
			<Products />
			<Products />
			<Products />
			<Text style={styles.text}>{STRINGS.advertBlock}</Text>
			<FlatList
				data={productsData}
				renderItem={(props) => <ProductItem {...props} />}
				numColumns={2}
				style={styles.content}
			/>
			<Modal
				style={styles.view}
				isVisible={isModalVisible}
				onSwipeComplete={toggleModal}
				onBackdropPress={toggleModal}
				swipeDirection={["up", "left", "right", "down"]}
			>
				<View style={styles.modal}>
					<TouchableOpacity onPress={toggleModal}>
						<Text style={styles.modalText}>
							{STRINGS.recentlyAdded}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={toggleModal}>
						<Text style={styles.modalText}>{STRINGS.popular}</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={toggleModal}>
						<Text style={styles.modalText}>
							{STRINGS.firstCheap}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={toggleModal}>
						<Text style={styles.modalText}>
							{STRINGS.firsExpensive}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={toggleModal}>
						<Text style={styles.modalText}>{STRINGS.newAdded}</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		</ScrollView>
	);
};

export default FavoriteView;
