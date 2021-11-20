import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./login";
import { ROUTES } from "@novomarkt/constants/routes";
import AskView from "./ask/view";
import RegisterView from "./ask/view";

let Stack = createNativeStackNavigator();

let AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={ROUTES.REGISTER} component={RegisterView} />
			<Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
		</Stack.Navigator>
	);
};

export default AuthStack;
