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
	let styl: StyleProp<TextStyle> = StyleSheet.compose(style, {
		fontFamily: "Montserrat-Medium",
	});
	return <RNText style={styl}>{children}</RNText>;
}
