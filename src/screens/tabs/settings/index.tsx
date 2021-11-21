import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsController from "./controller";
import { ROUTES } from "@novomarkt/constants/routes";
import ProfileView from "./moduels/profile/view";

let Stack = createNativeStackNavigator();

export let SettingsStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				component={SettingsController}
				name={ROUTES.SETTINGS}
			/>
			<Stack.Screen component={ProfileView} name={ROUTES.PROFILE} />
		</Stack.Navigator>
	);
};
