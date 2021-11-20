import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingVertical: 20,
	},

	header: {
		fontSize: 20,
		color: COLORS.defaultBlack,
		marginTop: 20,
        marginHorizontal: 20,
	},

	shadowBox: {
		padding: 15,
		marginVertical: 20,
		borderRadius: 8,
        elevation: 5,
        backgroundColor: COLORS.white,
        marginHorizontal: 20,
    },

	avatar: {
		width: 65,
		height: 65,
		borderRadius: 40,
		position: "absolute",
	},

	img: {
		width: 65,
		height: 65,
        borderRadius: 35,
	},

	row: {
		alignItems: "center",
		flexDirection: "row",
	},

	text: {
		fontSize: 18,
		color: COLORS.defaultBlack,
		marginHorizontal: 15,
	},
    
    opacity: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: 40,
		alignItems: "center",
		justifyContent: "center",
    },

    inputBox: {
        marginTop: 20,
    },

    rowButtons: {
        marginTop: 5,
        marginRight: 10,
        flexDirection: 'row',
    },

    dot: {
        width: 17,
        height: 17,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLORS.purple,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: 'center',
    },

    background: {
        width: 9,
        height: 9,
        borderRadius: 6,
        backgroundColor: COLORS.purple
    },
    dotGray: {
        width: 17,
        height: 17,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLORS.gray,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: 'center',
    },

    backgroundGray: {
        width: 9,
        height: 9,
        borderRadius: 6,
        backgroundColor: COLORS.gray,
    },

    black: {
        marginLeft: 5,
        color: COLORS.defaultBlack
    },

    headerComp: {
        marginHorizontal: 20,
    }

});
