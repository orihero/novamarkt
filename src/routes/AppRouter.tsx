import { ROUTES } from "@novomarkt/constants/routes";
import AuthStack from "@novomarkt/screens/auth";
import TabNavigation from "@novomarkt/screens/tabs";
import { CheckoutPointScreen } from "@novomarkt/screens/tabs/cart/checkout-point";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

let Stack = createNativeStackNavigator();

const AppRouter = () => {
	const insets = useSafeAreaInsets();

	return (
		<View style={{ flex: 1, marginTop: insets.top }}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name={ROUTES.AUTH} component={AuthStack} />
					<Stack.Screen
						name={ROUTES.TABS}
						component={TabNavigation}
					/>
					<Stack.Screen
						name={ROUTES.CHECKOUT_POINT}
						component={CheckoutPointScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
};

export default AppRouter;
