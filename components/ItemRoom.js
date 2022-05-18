import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const ItemRoom = (props) => {
  const { item, index,onPress } = props;

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: "lightgray",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {/* Vùng view info */}
      <View style={{ flex: 5 }}>
        <Text
          style={[
            styles.txtStyle,
            { fontSize: 15, color: "black", fontWeight: "bold", marginLeft: 0 },
          ]}
        >
          {item.name}
        </Text>
        {/* Số lượng giường */}
        <View style={styles.iconContainer}>
          <Ionicons name="bed-outline" size={24} />
          <Text style={styles.txtStyle}>{item.bed}</Text>
        </View>
        {/* Giá book*/}
        <View style={styles.iconContainer}>
          <Ionicons name="logo-yen" size={22} />
          <Text style={[styles.txtStyle, { color: "red", fontWeight: "bold" }]}>
            {item.price} VND
          </Text>
        </View>
        {/* Diện tích phòng */}
        <View style={styles.iconContainer}>
          <FontAwesome5 name="chart-area" size={24} />
          <Text style={styles.txtStyle}>{item.area}</Text>
        </View>
      </View>
      {/* Vùng view button Book */}
      <View>
        <Button onPress={onPress} title="BOOK" />
      </View>
    </View>
  );
};

export default ItemRoom;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtStyle: {
    fontSize: 14,
    marginLeft: 5,
  },
});
