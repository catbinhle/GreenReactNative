import {StyleSheet} from "react-native";

const homeStyles = StyleSheet.create({
    introduce: {
        flex: 3,
        borderBottomWidth: 3,
        borderBottomColor: 'black',
        backgroundColor: 'black'
    },
    content: {
        flex: 8,
        backgroundColor: 'white'
    },
    province: {
        height: 230,
        width: 150,
        borderWidth: 3,
        borderColor: 'black',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 16,
        alignItems: "center",
    },
    image: {
        height: 170,
        width: 145,
        borderWidth: 3,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    }
})

export default homeStyles