import { StyleSheet, Dimensions } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        marginHorizontal: 16,
        marginVertical: 5,
        borderRadius: 6,
        shadowColor: 'black',
        borderRadius: 8,
        shadowOffset: {
            height: 10,
            height: 10,
        },
        elevation: 10,
        shadowRadius: 8,
        shadowOpacity: 0.1,
        backgroundColor: 'white',
    },
    aboveItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftItemView: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    infoView: {
        paddingLeft: 8
    },
    logo: {
        height: 80, 
        width: 80, 
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        resizeMode: 'stretch'
    },
    showMore: {
        justifyContent: 'flex-end',
        padding: 16
    },
    txtName: {
        fontWeight: '700', 
        fontSize: 16
    },
    txtDesc: {
        fontWeight: 'normal', 
        fontSize: 12
    },

})

export default Styles