import { ROUTES } from "@novomarkt/constants/routes";
import AuthStack from "@novomarkt/screens/auth";
import Search from "@novomarkt/components/search";
import TabNavigation from "@novomarkt/screens/tabs";
import { CheckoutPointScreen } from "@novomarkt/screens/tabs/cart/checkout-point";
import { useAppSelector } from "@novomarkt/store/hooks";
import { selectUser } from "@novomarkt/store/slices/userSlice";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

let Stack = createNativeStackNavigator();

const AppRouter = () => {
	const insets = useSafeAreaInsets();
	const user = useAppSelector(selectUser);
	// console.log(!user.token);

	return (
		<View style={{ flex: 1, marginTop: insets.top }}>
			<NavigationContainer key={user.token}>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					{!user.token ? (
						<Stack.Screen
							name={ROUTES.AUTH}
							component={AuthStack}
						/>
					) : (
						<>
							<Stack.Screen
								name={ROUTES.TABS}
								component={TabNavigation}
							/>
							<Stack.Screen
								name={ROUTES.CHECKOUT_POINT}
								component={CheckoutPointScreen}
							/>
							<Stack.Screen
								name={ROUTES.AUTH}
								component={AuthStack}
							/>
							<Stack.Screen
								name={ROUTES.SEARCH}
								component={Search}
							/>
						</>
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
};

export default AppRouter;
