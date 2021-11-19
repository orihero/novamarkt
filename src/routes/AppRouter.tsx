import { ROUTES } from "@novomarkt/constants/routes";
import AuthStack from "@novomarkt/screens/auth";
import TabNavigation from "@novomarkt/screens/tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

let Stack = createNativeStackNavigator();

const AppRouter = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name={ROUTES.TABS} component={TabNavigation} />
				<Stack.Screen name={ROUTES.AUTH} component={AuthStack} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppRouter;

const styles = StyleSheet.create({});
