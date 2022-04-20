import { StyleSheet } from "react-native";

const NavigatorStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 24,
        paddingBottom: 5
    },
    cityHeader: {
        alignItems: 'center',
        borderBottomWidth: 5
    },
    cityFoot: {
        borderTopWidth: 5,
        height: 50,
        flexDirection: 'row',
    },
    footButton: {
        flex: 1,
        borderWidth: 2,
        marginTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B0F400',
        borderRadius: 10
    },
    footText: {
        fontSize: 20
    },
})

export default NavigatorStyles