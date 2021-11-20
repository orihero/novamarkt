import { HomeIcon } from "@novomarkt/assets/icons/icons";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { HomeScreen } from "./home";

let Tab = createBottomTabNavigator();

const TabNavigation = () => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name={ROUTES.HOME}
				component={HomeScreen}
				options={{
					tabBarIcon: HomeIcon,
					tabBarLabel: STRINGS.home,
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNavigation;

const styles = StyleSheet.create({});
