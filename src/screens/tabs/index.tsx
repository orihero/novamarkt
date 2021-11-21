import {
	BasketIcon,
	CatalogIcon,
	HeartIcon,
	HomeIcon,
	PersonIcon,
} from "@novomarkt/assets/icons/icons";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useCallback } from "react";
import { StyleSheet } from "react-native";
import { SvgProps } from "react-native-svg";
import { HomeScreen } from "./home";
import ProfileView from "./profile/view";

let Tab = createBottomTabNavigator();

const TabNavigation = () => {
	let renderTabIcon = useCallback((Component: React.FC<SvgProps>) => {
		return (props: { focused: boolean; color: string; size: number }) => {
			let { color, focused, size } = props;

			return <Component fill={color} width={size} height={size} />;
		};
	}, []);
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: COLORS.blue,
				tabBarInactiveTintColor: COLORS.gray,
			}}
		>
			<Tab.Screen
				name={ROUTES.HOME}
				component={HomeScreen}
				options={{
					tabBarIcon: renderTabIcon(HomeIcon),
					tabBarLabel: STRINGS.home,
				}}
			/>
			<Tab.Screen
				name={ROUTES.CATEGORIES}
				component={HomeScreen}
				options={{
					tabBarIcon: renderTabIcon(CatalogIcon),
					tabBarLabel: STRINGS.categories,
				}}
			/>
			<Tab.Screen
				name={ROUTES.CART}
				component={HomeScreen}
				options={{
					tabBarIcon: renderTabIcon(BasketIcon),
					tabBarLabel: STRINGS.cart,
				}}
			/>
			<Tab.Screen
				name={ROUTES.FAVORITES}
				component={HomeScreen}
				options={{
					tabBarIcon: renderTabIcon(HeartIcon),
					tabBarLabel: STRINGS.favorites,
				}}
			/>
			<Tab.Screen
				name={ROUTES.PROFILE}
				component={ProfileView}
				options={{
					tabBarIcon: renderTabIcon(PersonIcon),
					tabBarLabel: STRINGS.login,
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNavigation;

const styles = StyleSheet.create({});
