import { StyleSheet, Dimensions } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1,   
        justifyContent: 'space-between',
    },
    header: {
        height: 44, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderBottomWidth: 0.5, 
        borderBottomColor: 'grey'
    },
    tabbar: {
        height: 44, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        borderTopColor: 'grey', 
        borderTopWidth: 0.5
    },
    tabbarItem: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    activeItem: {
        backgroundColor: 'white'
    },
    deactiveItem: {
        backgroundColor: '#cacaca'
    },
    activeTxtItem: {
        color: 'black',
        fontWeight: 'bold'
    },
    deactiveTxtItem: {
        color: 'white',
        fontWeight: 'bold'
    },
    txtHeader: {
        fontSize: 18, 
        fontWeight: 'bold'
    }
})

export default Styles