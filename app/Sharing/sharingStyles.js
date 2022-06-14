import {StyleSheet} from "react-native";

const sharingStyles = StyleSheet.create({
    comment: {
        flex: 1,
        // height: 150,
        width: 350,
        borderWidth: 3,
        borderRadius: 20,
        borderColor: 'black',
        marginVertical: 10,
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: '#E6F1D8'
    },
    image: {
        height: 90,
        width: 90,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'black'
    },
    showMoreItem: {
        marginVertical: 8
    },
    txtTitleShowMoreItem: {
        fontSize: 19,
        fontWeight: 'bold'
    },
    txtContentShowMoreItem: {
        fontSize: 17,
    }
})

export default sharingStyles