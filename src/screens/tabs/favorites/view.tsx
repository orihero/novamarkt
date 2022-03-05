import requests from "@novomarkt/api/requests";
import { ProductItemResponse } from "@novomarkt/api/types";
import Text from "@novomarkt/components/general/Text";
import { STRINGS } from "@novomarkt/locales/strings";
import { useAppSelector } from "@novomarkt/store/hooks";
import {
	favoriteArraySelector,
	loadFavorite,
} from "@novomarkt/store/slices/favoriteSlice";
import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../home/components/ProductItem";
import ProductsList from "../home/components/ProductsList";
import DefaultHeader from "./components/DefaultHeader";
import Products, { ProductsData } from "./components/Products";
import ProductsListFav from "./components/ProductsListFav";
import SelectableItems from "./components/SelectableItems";
import SelectableMenu from "./components/SelectableMenu";
import { styles } from "./style";

const FavoriteView = () => {
	const [isModalVisible, setModalVisible] = useState(false);
	const dispatch = useDispatch();
	let fav = useSelector(favoriteArraySelector);

	// const [favorites, setFavorites] = useState<ProductItemResponse[]>();

	let favorites = useSelector(favoriteArraySelector);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	const effect = async () => {
		try {
			let res = await requests.favorites.getFavorites();
			dispatch(loadFavorite(res.data.data));
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		effect();
	}, [effect]);

	if (fav.length <= 0) {
		return (
			<View style={styles.empty}>
				<DefaultHeader name={STRINGS.favorites} />
				<View style={styles.emptyBox}>
					<Text style={styles.emptyText}>{STRINGS.favoritesIsEmpty}</Text>
				</View>
			</View>
		);
	}

	return (
		<>
			<DefaultHeader name={STRINGS.favorites} />
			<ScrollView style={styles.container}>
				<SelectableMenu />
				<SelectableItems onPress={toggleModal} />
				{favorites.map((e) => {
					return (
						<Products
							brand={e.brand}
							name={e.name}
							photo={e.photo}
							price={e.price}
							id={e.id}
							price_old={e.price_old}
							category={e.category}
							views={e.views}
							rating={e.rating}
						/>
					);
				})}

				<Text style={styles.text}>{STRINGS.advertBlock}</Text>
				<ProductsListFav />
				{/* <FlatList
					data={ProductsData}
					renderItem={(props) => <ProductItem {...props} />}
					numColumns={2}
					style={styles.content}
				/> */}
				<Modal
					style={styles.view}
					isVisible={isModalVisible}
					onSwipeComplete={toggleModal}
					onBackdropPress={toggleModal}
					swipeDirection={["up", "left", "right", "down"]}
				>
					<View style={styles.modal}>
						<TouchableOpacity onPress={toggleModal}>
							<Text style={styles.modalText}>{STRINGS.recentlyAdded}</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={toggleModal}>
							<Text style={styles.modalText}>{STRINGS.popular}</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={toggleModal}>
							<Text style={styles.modalText}>{STRINGS.firstCheap}</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={toggleModal}>
							<Text style={styles.modalText}>{STRINGS.firsExpensive}</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={toggleModal}>
							<Text style={styles.modalText}>{STRINGS.newAdded}</Text>
						</TouchableOpacity>
					</View>
				</Modal>
			</ScrollView>
		</>
	);
};

export default FavoriteView;
