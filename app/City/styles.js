import { StyleSheet, Dimensions } from "react-native"

const Styles = StyleSheet.create({
    container: {
    },
    item: {
        height: 50,
        margin: 16,
        borderRadius: 6,
        shadowColor: 'black',
        borderRadius: 8,
        shadowOffset: {
            height: 10
        },
        elevation: 10,
        shadowRadius: 8,
        shadowOpacity: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default Styles