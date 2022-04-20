import { StyleSheet } from "react-native";

const FooterStyle = StyleSheet.create({
    cityFoot: {
        borderTopWidth: 5,
        height: 44,
        flexDirection: 'row',
    },
    footButton: {
        flex: 1,
        borderWidth: 2,
        marginTop: 4,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B0F400',
        borderRadius: 10
    },
    footText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
})

export default FooterStyle