import React from "react";
import {
	StyleProp,
	StyleSheet,
	Text as RNText,
	TextBase,
	TextProps,
	TextStyle,
} from "react-native";

export default function Text({ children, style }: TextProps): JSX.Element {
	let fontFamily = "Montserrat-Medium";
	//@ts-ignore
	switch (style?.fontWeight) {
		case "bold":
			fontFamily = "Montserrat-Thin";
			break;
		case "400":
			fontFamily = "Montserrat-Thin";
			break;
		default:
			break;
	}
	let styl: StyleProp<TextStyle> = StyleSheet.compose(style, {
		fontFamily,
	});

	return <RNText style={styl}>{children}</RNText>;
}
