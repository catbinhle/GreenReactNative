import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

class ItemPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderItem(item, index) {
    return (
      <View key={index} style={styles.itemContainer}>
        <View style={{ flex: 1 }}>
          <Image
            style={{ height: 80, width: 80, resizeMode: "cover" }}
            source={{
              uri: item.image,
            }}
          />
        </View>
        <View style={{ flex: 3 }}>
          <Text>{item.name}</Text>
          <Text>{item.address}</Text>
          <Text>
            Đánh giá :{" "}
            {[1, 2, 3, 4, 5].map((number, index) => {
              return (
                <Ionicons
                  key={index}
                  color={number < item.rate ? "red" : "gray"}
                  name="star"
                  size={15}
                />
              );
            })}
          </Text>
        </View>
      </View>
    );
  }

  render() {
    const { param, nameService, data } = this.props;
    return (
      <View
        style={{
          backgroundColor: "white",
          marginHorizontal: 10,
          elevation: 10,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: 10,
            marginTop: 10,
            marginBottom: 5,
            color: "blue",
          }}
        >
          {nameService}
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          style={{ height: 300 }}
        >
          {/* <FlatList
            contentContainerStyle={{ paddingBottom: 10 }}
            data={data}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({ item, index }) => {
              return this._renderItem(item, index);
            }}
          /> */}
          {data?.map((item, index) => {
            return this._renderItem(item, index);
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection: "row",
    margin: 10,
    elevation: 5,
  },
});

export default ItemPopup;
