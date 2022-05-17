import {StyleSheet} from "react-native";

const detailStyles = StyleSheet.create({
    introduce: {
        flex: 5,
        borderBottomWidth: 3,
        borderBottomColor: 'black',
        backgroundColor: '#FFFFCC',
        alignItems: 'center'
    },
    content: {
        flex: 8,
        backgroundColor: 'white',
        paddingHorizontal: 16,
    },
    search: {
        height: 40,
        width: 300,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'black',
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    service: {
        height: 180,
        width: 150,
        borderColor: 'black',
        borderRadius: 20,
        borderWidth: 2,
        marginVertical: 16,
        alignItems: "center"
    }
})

export default detailStyles