import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 5,
  },
  item: {
    justifyContent: "flex-end",
    width: 190,
    backgroundColor: "white",
    // shadowColor: 'black',
    // shadowOffset: {
    //   width: 10,
    //   height: 10
    // },
    // shadowRadius: 8,
    // shadowOpacity: 0.1,
    elevation: 10,
    borderRadius: 6,
    margin: 5,
  },
  infoView: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  opacityInfoView: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: "black",
    opacity: 0.8,
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
    borderRadius: 6,
  },
  txtName: {
    fontSize: 14,
    fontWeight: "700",
    color: "white",
  },
});

export default Styles;
