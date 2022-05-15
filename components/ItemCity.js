import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import React from "react";
import ItemHotel from "./ItemHotel";

const { width, height } = Dimensions.get("screen");

const ItemCity = (props) => {
  const { item, index } = props;

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image
          style={{ height: width * 0.8, width: width * 1 }}
          source={item.image}
        />
      </View>
      <View style={styles.desContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{item.name}</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={item.hotels}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item, index }) => {
              return (
                <ItemHotel item={item} index={index} />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  desContainer: {
    width: "100%",
    height: "60%",
    backgroundColor: "#000000aa",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  listContainer: {
    flex: 12,
    backgroundColor: "white",
    elevation: 3,
    paddingTop: 5,
  },
});

export default ItemCity;
