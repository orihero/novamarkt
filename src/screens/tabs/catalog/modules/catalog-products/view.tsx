import BackHeader from "@novomarkt/components/navigation/BackHeader";
import ProductItem from "@novomarkt/screens/tabs/home/components/ProductItem";
import React from "react";
import { FlatList, Image, ScrollView, View } from "react-native";
import ScrollableMenu from "./components/ScrollableMenu";
import SelectableFlter from "./components/SelectableFlter";
import { styles } from "./style";

let BannerURL =
	"https://lh4.googleusercontent.com/mEIPzmkL2ezY8H55Ib7dyT7gUPQRnDSxyu_SM458KWgKAkOWD0X9VmkIw7hBQdgecLARQOUT97qOtLxf2OHysWaByiq-HbLPzrMA5Sb9hsUP3Xrml-BPjUTBQP_YR1ZTOsm14Doh";

const CatalogProductsView = () => {
	return (
		<View style={styles.container}>
			<BackHeader
				hasSearch={true}
				style={styles.header}
				name={"Костюмы"}
			/>
			<ScrollView>
				<Image source={{ uri: BannerURL }} style={styles.banner} />
				<ScrollableMenu />
				<SelectableFlter />
				<FlatList
					showsVerticalScrollIndicator={false}
					style={styles.columns}
					data={[]}
					numColumns={2}
					renderItem={(props) => <ProductItem {...props} />}
				/>
			</ScrollView>
		</View>
	);
};

export default CatalogProductsView;
