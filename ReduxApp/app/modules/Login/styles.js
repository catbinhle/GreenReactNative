import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    infoView: {
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    alreadyView: {
        margin: 16
    },
    boxView: {
        margin: 16
    },
    enterBox: {
        borderColor: 'grey',
        borderWidth: 0.5,
        borderRadius: 6,
        marginVertical: 8,
        height: 44,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 16
    },
    btn: {
        marginHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 6,
        height: 44,
    },
    logoutBtn: {
        marginTop: 16
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    inputText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    txtBtn: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    alreadyUserTxt: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default Styles