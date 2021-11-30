import AppRouter from "@novomarkt/routes/AppRouter";
import { persistor, store } from "@novomarkt/store/configureStore";
import React from "react";
import { Platform, StyleSheet, UIManager } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Geolocation from '@react-native-community/geolocation'


if (Platform.OS === 'android') {
	if (UIManager.setLayoutAnimationEnabledExperimental) {
		UIManager.setLayoutAnimationEnabledExperimental(true);
	}
}

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<AppRouter />
			</PersistGate>
		</Provider>
	);
};



export default App;

const styles = StyleSheet.create({});