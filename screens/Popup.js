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
    const { param } = this.props;
    console.log(param);
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <Image style={{ height: 300 }} source={{ uri: param.image }} />
            <View style={styles.overlayContainer}>
              <Text
                style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
              >
                {param.name}
              </Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.txtService}>Dịch vụ quanh đây :</Text>
            {/* <Text>
            {param.services.food_drink.map((e) => {
              return <Text>{e.name}</Text>;
            })}
          </Text> */}
            <ItemPopup
              data={param.services?.food_drink}
              nameService="Food & Drinks"
            />
            <ItemPopup data={param.services?.fashion} nameService="Fashion" />
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
});

export default Popup;
