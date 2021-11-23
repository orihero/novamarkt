import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsController from "./controller";
import { ROUTES } from "@novomarkt/constants/routes";
import ProfileView from "./moduels/profile/view";
import OrderView from "./moduels/orders/view";
import CommentView from "./moduels/comments/view";
import MessageView from "./moduels/messages/view";
import QuestionsView from "./moduels/questions/view";

let Stack = createNativeStackNavigator();

export let SettingsStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				component={SettingsController}
				name={ROUTES.SETTINGS}
			/>
			<Stack.Screen component={ProfileView} name={ROUTES.PROFILE} />
			<Stack.Screen component={OrderView} name={ROUTES.ORDER} />
			<Stack.Screen component={CommentView} name={ROUTES.COMMENT} />
			<Stack.Screen component={MessageView} name={ROUTES.MESSAGE} />
			<Stack.Screen component={QuestionsView} name={ROUTES.QUESTIONS} />
		</Stack.Navigator>
	);
};
