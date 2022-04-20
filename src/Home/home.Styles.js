import { StyleSheet, Dimensions } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 24,
        paddingBottom: 5
    },
    cityList: {
        flexDirection: 'row',
        marginHorizontal: 13.5
    },
    column: {
        flex: 1,
    },
    cellView: {
        margin: 2.5,
        alignItems: 'center',
        marginVertical: 10,
        borderWidth: 2,
        borderRadius: 6,
        opacity: 0.8,
        backgroundColor: 'black',
        
        shadowColor: 'black',
        shadowOffset:{
            width: 100,
            height: 100
        },
        elevation: 10,
        shadowOpacity: 1,
        shadowRadius: 8
    },
    image: {
        height: 170,
        width: 174,
        borderRadius: 5,
    },
    description: {
        alignItems: 'center',
        marginHorizontal: 10
    },
    text: {
        fontSize: 14,
        color: 'white'
    },
    selectedView: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2
    },
    selectedContent: {
        padding: 16,
        zIndex: 2
    },
    selectedImage: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        resizeMode: 'contain',
    },
    escapeClick: {
        backgroundColor: 'black',
        opacity: 0.6,
        zIndex: 1
    }
})

export default Styles