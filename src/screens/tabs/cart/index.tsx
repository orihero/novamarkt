export { default as CartScreen } from "./controller";
import React from "react";
import CartView from "./view";
import { ROUTES } from "@novomarkt/constants/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CheckoutScreen } from "./checkout";
import { CheckoutPointScreen } from "./checkout-point";
import { FilterScreen } from "./filter";

const Stack = createNativeStackNavigator();

export default function CartStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={ROUTES.CART} component={CartView} />
			<Stack.Screen name={ROUTES.CHECKOUT} component={CheckoutScreen} />
			<Stack.Screen name={ROUTES.FILTER} component={FilterScreen} />
		</Stack.Navigator>
	);
}
