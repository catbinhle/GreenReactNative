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
            height: 10,
            height: 10,
        },
        elevation: 10,
        shadowRadius: 8,
        shadowOpacity: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftItemView: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    infoView: {
        paddingLeft: 8
    },
    logo: {
        height: 40, 
        width: 40, 
        borderRadius: 20,
        resizeMode: 'stretch'
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