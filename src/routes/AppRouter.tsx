import React from "react";
import { ROUTES } from "@novomarkt/constants/routes";
import AuthStack from "@novomarkt/screens/auth";
import Search from "@novomarkt/components/search";
import TabNavigation from "@novomarkt/screens/tabs";
import { CheckoutPointScreen } from "@novomarkt/screens/tabs/cart/checkout-point";
import { useAppSelector } from "@novomarkt/store/hooks";
import { selectUser } from "@novomarkt/store/slices/userSlice";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { selectAppSettings } from "@novomarkt/store/slices/appSettings";
import AnimatedLottieView from "lottie-react-native";
import { COLORS } from "@novomarkt/constants/colors";

let Stack = createNativeStackNavigator();

const AppRouter = () => {
	const insets = useSafeAreaInsets();
	const user = useAppSelector(selectUser);
	const appSettings = useAppSelector(selectAppSettings);

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
			{appSettings.loading && (
				<View style={styles.animation}>
					<AnimatedLottieView
						source={require("@novomarkt/assets/animations/loading-animation")}
						autoPlay
						loop
					/>
				</View>
			)}
		</View>
	);
};

export default AppRouter;

const styles = StyleSheet.create({
	animation: {
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: COLORS.white,
	},
});
