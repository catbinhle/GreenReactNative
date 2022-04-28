import { StyleSheet, Dimensions } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 11  
    },
    item: {
        justifyContent: 'flex-end',
        width: '50%',
        backgroundColor: 'white',
        shadowColor: 'black',
        borderRadius: 8,
        shadowOffset: {
          width: 10,
          height: 10
        },
        elevation: 10,
        shadowRadius: 8,
        shadowOpacity: 0.1,
        margin: 5,
        borderRadius: 6
    },
    infoView: {
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    opacityInfoView: {
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        backgroundColor: 'black',
        opacity: 0.8
    },
    image: {
        height: 200, 
        width: '100%',
        resizeMode: 'stretch',
        borderRadius: 6
    },
    txtName: {
        fontSize: 14,
        fontWeight: '700',
        color: 'white'
    }
})

export default Styles