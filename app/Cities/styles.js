import { StyleSheet, Dimensions } from "react-native";

const Styles = StyleSheet.create({
  container: {},
  item: {
    height: 50,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 8,
    shadowOffset: {
      height: 10,
      height: 10,
    },
    elevation: 10,
    shadowRadius: 8,
    shadowOpacity: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  leftItemView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  infoView: {
    flex: 1,
    marginHorizontal: 10,
  },
  logo: {
    height: 40,
    width: 40,
    borderRadius: 20,
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
