import { StyleSheet, Dimensions } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1,   
    },
    shadowView: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 24,
        margin: 20,
        shadowColor: 'black',
        borderRadius: 8,
        shadowOffset: {
          width: 10,
          height: 10
        },
        elevation: 10,
        shadowRadius: 8,
        shadowOpacity: 0.1,
        zIndex: 1
      },
    columnView: {
        flex: 1
        // marginVertical: 4
    },
    childView: {
        // flex: 1, 
        flexDirection: 'row',
        height: 50, 
        marginHorizontal: 8,
        borderRadius: 25,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'red', 
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    childView1: {
        backgroundColor: 'red'
    },
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
    txt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
        lineHeight: 18
    }

})

export default Styles