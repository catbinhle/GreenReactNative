import { StyleSheet, Dimensions } from "react-native";

const cityStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
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
    backgroundColor: '#CCFFCC',
    width: Dimensions.get('screen').width,
    paddingHorizontal: 16,
    paddingVertical: 16,

  },
  footer: {
    width: Dimensions.get('screen').width,
    height: 50,
    backgroundColor: '#FF9999',
    flexDirection: 'row'
  },
  footerHome: {
    flex: 2,
    borderTopColor: 'black',
    borderTopWidth: 3,
    borderRightColor: 'black',
    borderRightWidth: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerCity: {
    flex: 2,
    borderTopColor: 'black',
    borderTopWidth: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtFooter: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  province: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#FFCC99',
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 70,
    marginHorizontal: 16,
    borderRadius: 10
  },
  imageAndName: {
    flex: 2,
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
  },
  txtProvinceName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  iconBox: {
    flex: 2,
    marginLeft: 16
  },
  icon: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 120
  }
})

export default cityStyles