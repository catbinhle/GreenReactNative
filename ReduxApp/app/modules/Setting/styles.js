import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    nameView: {
        flexDirection: 'row'
    },
    logoutBtn: {
        margin: 20,
        backgroundColor: 'blue',
        height: 44,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoutTxt: {
        color: 'white'
    }
})

export default Styles