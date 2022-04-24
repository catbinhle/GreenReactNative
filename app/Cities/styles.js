import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {},
  item: {
    height: 50,
    margin: 16,
    borderRadius: 6,
    // shadowColor: 'black',
    // shadowOffset: {
    //     height: 10,
    //     height: 10,
    // },
    // shadowRadius: 8,
    // shadowOpacity: 0.1,
    backgroundColor: "white",
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  leftItemView: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoView: {
    paddingLeft: 8,
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius: 8,
    resizeMode: "cover",
  },
  txtName: {
    fontWeight: "700",
    fontSize: 16,
  },
  txtDesc: {
    fontWeight: "normal",
    fontSize: 12,
  },
});

export default Styles;
