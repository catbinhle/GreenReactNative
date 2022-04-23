import { StyleSheet, Dimensions } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1,  
    },
    image: {
        height: 300,
        marginHorizontal: 16, 
        resizeMode: 'contain'
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
    imgItem: {
        height: 200, 
        width: '100%',
        resizeMode: 'stretch',
        borderRadius: 6
    }
})

export default Styles