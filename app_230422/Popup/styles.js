import { StyleSheet, Dimensions } from "react-native"

const Styles = StyleSheet.create({
    selectedView: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        elevation: 10,
    },
    overlaySelectedView: {
        backgroundColor: 'black',
        opacity: 0.6,
        zIndex: 1
    },
    contentSelectedView: {
        padding: 16, 
        zIndex: 2
    },
    imageSelectedView: {
        width: Dimensions.get('screen').width, 
        height: Dimensions.get('screen').width, 
        resizeMode: 'contain'
    },
})

export default Styles