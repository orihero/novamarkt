import { ROUTES } from "@novomarkt/constants/routes";
import AuthStack from "@novomarkt/screens/auth";
import RegisterView from "@novomarkt/screens/auth/ask/view";
import LoginView from "@novomarkt/screens/auth/login/view";
import TabNavigation from "@novomarkt/screens/tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";

let Stack = createNativeStackNavigator();

const AppRouter = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name={ROUTES.TABS} component={TabNavigation} />
				<Stack.Screen name={ROUTES.AUTH} component={AuthStack} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppRouter;

const styles = StyleSheet.create({});
