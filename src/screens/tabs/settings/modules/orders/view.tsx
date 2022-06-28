import requests, { appendUrl } from "@novomarkt/api/requests";
import { OrderList, OrderSend } from "@novomarkt/api/types";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { STRINGS } from "@novomarkt/locales/strings";
import { productsData } from "@novomarkt/screens/tabs/home/components/ProductsList";
import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, View } from "react-native";
import OrderItem from "./components/OrderItem";
import { styles } from "./style";

const OrderView = () => {
	const [orders, setOrders] = useState<OrderList[]>();
	const getOrders = async () => {
		try {
			let res = await requests.order.listOrders();
			setOrders(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getOrders();
	}, []);

	// console.log(orders);

	return (
		<View style={styles.container}>
			<BackHeader name={STRINGS.myOrders} style={styles.header} />
			<ScrollView style={{}}>
				{orders?.map((e) => {
					console.log(e?.photo);
					return (
						<View style={styles.shadowBox}>
							{/* <View>
								<Image
									source={{ uri: appendUrl(e?.photo) }}
									style={styles.img}
								/>
								<Text style={styles.price}>{e?.price}</Text>
							</View> */}

							<View style={styles.contentBox}>
								<Text style={styles.text}>{e.name}</Text>
								<Text style={styles.items}>
									{/* {STRINGS.seller} {e?.orderProducts} */}
								</Text>
								<Text style={styles.items}>
									{STRINGS.quantity} {e?.amount}
								</Text>
								<Text style={styles.items}>
									Способ оплаты: {e?.payment.name}
									<View style={styles.row}>
										{/* <Image style={styles.cards} source={MirCard} /> */}
										{/* <Image style={styles.cardsV} source={VisaCard} /> */}
										{/* <Image style={styles.cardsM} source={MasterCard} /> */}
									</View>
								</Text>
								<Text style={styles.items}>
									{STRINGS.delivery} {e?.delivery.name}
								</Text>
							</View>
							<Text style={styles.price}>{e?.price}</Text>
						</View>
					);
				})}
			</ScrollView>
		</View>
	);
};

export default OrderView;
