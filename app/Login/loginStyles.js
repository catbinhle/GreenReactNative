import {StyleSheet} from "react-native";

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        height: 50,
        width: 350,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 10,
        paddingHorizontal: 8,
        justifyContent: 'center',
        marginBottom: 20
    },
    login: {
        height: 50,
        width: 200,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 8,
        justifyContent: 'center',
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: 'blue'
    }

})

export default loginStyles