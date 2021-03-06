import { ROUTES } from "@novomarkt/constants/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CatalogDetailsView from "../catalog/modules/catalog-details/view";
import CatalogProductsView from "../catalog/modules/catalog-products/view";
import NewsDetailsView from "./modulus/news-details/view";
import ProductDetailsView from "./modulus/product-details/view";
import HomeView from "./view";

let Stack = createNativeStackNavigator();

export let HomeStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen component={HomeView} name={ROUTES.HOME} />
			<Stack.Screen
				component={ProductDetailsView}
				name={ROUTES.PRODUCT_DETAILS}
			/>
			<Stack.Screen component={NewsDetailsView} name={ROUTES.NEWS_DETAILS} />
			<Stack.Screen
				component={CatalogProductsView}
				name={ROUTES.CATALOG_PRODUCTS}
			/>
			<Stack.Screen
				component={CatalogDetailsView}
				name={ROUTES.CATALOG_DETAILS}
			/>
		</Stack.Navigator>
	);
};
