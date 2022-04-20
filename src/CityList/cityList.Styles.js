import { StyleSheet, Dimensions } from "react-native"

export default Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 24,
        paddingBottom: 5
    },
    cityList: {

    },
    listItem: {
        borderWidth: 2,
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 16,
        flexDirection: 'row',
    },
    cityText: {
        marginHorizontal: 10,
        fontSize: 40
    },
    cityImage: {
        width: 50,
        height: 50,
        borderRadius: 6,
        marginLeft: 10
    },
    cityIcon: {
        marginHorizontal:20
    }
})