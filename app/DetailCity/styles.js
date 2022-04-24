import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 300,
    resizeMode: "cover",
  },
  item: {
    margin: 5,
    width: 190,
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 6,
    // shadowOffset: {
    //   width: 10,
    //   height: 10,
    // },
    // shadowRadius: 8,
    // shadowOpacity: 0.1,
   
  },
  imgItem: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
    borderRadius: 6,
  },
});

export default Styles;
