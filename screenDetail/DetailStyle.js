import { StyleSheet, Dimensions } from "react-native";

const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    height: 70,
    width: Dimensions.get('screen').width,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 3
  },
  txtHeader: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 16,
  },
  image: {
    height: 250,
    width: 350,
    marginVertical: 30,
    marginHorizontal: 22,
    borderRadius: 10
  },
  subtitle: {
    alignItems: 'center'
  },
  txtSubtitle: {
    fontSize: 20 ,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 18,
  },
  otherImageArea: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 10
  },
  otherImage: {
    marginHorizontal: 16,
    marginVertical: 16
  }




})

export default detailStyles