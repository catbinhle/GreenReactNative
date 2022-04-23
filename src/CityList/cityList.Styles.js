import {StyleSheet} from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 24,
        paddingBottom: 5
    },
    listItem: {
        borderWidth: 2,
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 16,
        flexDirection: 'row',
    },
    leftCityView: {
        flex: 1,
        flexDirection: 'row'
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

export default Styles