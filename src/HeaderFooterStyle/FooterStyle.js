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
        borderRadius: 10
    },
    footText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    active: {
        backgroundColor: '#B0F400',
    },
    deactive: {
        backgroundColor: 'grey'
    }
})

export default FooterStyle