import { StyleSheet, Dimensions ,StatusBar} from "react-native"
ewrewrew
const Styles = StyleSheet.create({
    container: {
        flex: 1,   
        justifyContent: 'space-between',
        marginTop:StatusBar.currentHeight
    },
    header: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        height: 44, 
        justifyContent: 'space-between', 
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
    hideTabbar: {
        height: 0, 
        borderTopWidth: 0
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