import React from "react";
import { ScrollView, View } from "react-native";
import Text from "@novomarkt/components/general/Text";
import { styles } from "./style";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";
import SelectableDelivery from "../components/SelectableDelivery";
import PickupPoint from "../components/PickupPoint";
import RecipientBox from "../components/RecipientBox";

const CheckoutView = () => {
	return (
		<ScrollView
			style={styles.container}
			showsVerticalScrollIndicator={false}
		>
			<BackHeader name={STRINGS.checkout} style={styles.backHeader} />
			<SelectableDelivery />
			<PickupPoint />
			<RecipientBox />
		</ScrollView>
	);
};

export default CheckoutView;
