import AppRouter from "@novomarkt/routes/AppRouter";
import { store, persistor } from "@novomarkt/store/configureStore";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

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
