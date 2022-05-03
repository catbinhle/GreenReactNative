import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image } from "react-native";

class ItemHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item, onGoTo, index } = this.props;
    return (
      <TouchableOpacity
        onPress={() => onGoTo("Details", item)}
        key={index}
        style={styles.imageCoverContainer}
      >
        <Image style={styles.imageCover} source={{ uri: item.cover }} />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: "#000000aa",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    imageCoverContainer: {
        width: 190,
        marginHorizontal: 5,
        marginBottom: 10,
        borderRadius: 8,
        elevation: 5,
      },
      imageCover: {
        borderRadius: 8,
        height: 200,
        width: "100%",
        resizeMode: "cover",
      },
})

export default ItemHome;
