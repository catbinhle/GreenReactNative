import { StyleSheet, Dimensions } from "react-native";

const homeStyles = StyleSheet.create({
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
  column: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  province: {
    height: 200,
    width: 120,
    borderColor: 'black',
    borderWidth: 3,
    backgroundColor: '#CC99FF',
    marginHorizontal: 19,
    marginVertical: 16,
    alignItems: 'center',
    borderRadius: 13
   

  },
  image: {
    // resizeMode: 'stretch',
    height: 130,
    width: 117,
    borderRadius: 13
    // borderTopLeftRadius: 13,
    // borderTopRightRadius: 13

  },
  txtProvinceName: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 16
  }
});

export default homeStyles
