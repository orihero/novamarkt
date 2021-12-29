import AppRouter from "@novomarkt/routes/AppRouter";
import { persistor, store } from "@novomarkt/store/configureStore";
import React from "react";
import { Platform, StyleSheet, UIManager, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Geolocation from "@react-native-community/geolocation";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

if (Platform.OS === "android") {
	if (UIManager.setLayoutAnimationEnabledExperimental) {
		UIManager.setLayoutAnimationEnabledExperimental(true);
	}
}

const App = () => {
	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AppRouter />
				</PersistGate>
			</Provider>
		</SafeAreaProvider>
	);
};

export default App;

const styles = StyleSheet.create({});
