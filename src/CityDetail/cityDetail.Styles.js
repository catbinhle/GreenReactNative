import { StyleSheet } from "react-native"

export default Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 24,
        paddingBottom: 5
    },
    cityFoot: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 60
    },
    description: {
        fontSize: 20,
        marginVertical: 16
    },
    listItem: {
        borderWidth: 2,
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 5,
        flexDirection: 'row'
    },
    cityText: {
        marginLeft: 5,
        fontSize: 40
    },
    cityDetailBody:{
        flex:1, 
        margin:100,
        marginHorizontal: 16,
        alignItems: 'center'
    },
    mainImage: {
        width: 300,
        height: 300,
        borderRadius: 20
    },
    detailImage: {
        width: 150,
        height: 150,
        marginHorizontal: 10,
        borderRadius: 20,
    },
})