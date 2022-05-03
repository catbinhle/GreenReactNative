import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import ItemPopup from "../components/ItemPopup";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, onClose } = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <Image style={{ height: 300 }} source={{ uri: item?.image }} />
            <View style={styles.overlayContainer}>
              <Text
                style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
              >
                {item.name}
              </Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
              >
                X
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.txtService}>Dịch vụ quanh đây :</Text>
            <ItemPopup
              data={item.services?.food_drink}
              nameService="Food & Drinks"
            />
            <ItemPopup data={item.services?.fashion} nameService="Fashion" />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlayContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#000000aa",
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  txtService: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 15,
    textDecorationLine: "underline",
    textTransform: "uppercase",
  },
  closeBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    height: 25,
    width: 25,
    backgroundColor: "#000000aa",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Popup;
