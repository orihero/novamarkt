import DefaultButton from "@novomarkt/components/general/DefaultButton";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import DefaultHeader from "../favorites/components/DefaultHeader";
import ChooseItemNum from "./components/ChooseItemNum";
import LocationBox from "./components/LocationBox";
import OrderDetails from "./components/OrderDetails";
import { styles } from "./style";

const CartView = () => {
	let navigation = useNavigation();

	return (
		<ScrollView style={styles.container}>
			<DefaultHeader name={STRINGS.cart} />
			<LocationBox />
			<OrderDetails />
			<ChooseItemNum />
			<ChooseItemNum />
			<ChooseItemNum />
			<DefaultButton
				onPress={() => navigation.navigate(ROUTES.CHECKOUT)}
				text={STRINGS.continueOrdering}
				containerStyle={styles.button}
				textStyle={styles.buttonTxt}
			/>
		</ScrollView>
	);
};

export default CartView;
