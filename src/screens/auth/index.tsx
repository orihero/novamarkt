import { ROUTES } from "@novomarkt/constants/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TabNavigation from "../tabs";
import RegisterView from "./ask/view";
import LoginView from "./login/view";

let Stack = createNativeStackNavigator();

let AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={ROUTES.REGISTER} component={RegisterView} />
			<Stack.Screen name={ROUTES.LOGIN} component={LoginView} />
			<Stack.Screen name={ROUTES.TABS} component={TabNavigation} />
			<Stack.Screen name={ROUTES.AUTH} component={AuthStack} />
		</Stack.Navigator>
	);
};

export default AuthStack;
