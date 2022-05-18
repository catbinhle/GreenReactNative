import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ItemCart from "../components/ItemCart";

const Cart = (props) => {
  const { navigation, route } = props;
  const { cartItemsArray, selectedRange } = route.params;

  return (
    <View style={{ flex: 1 }}>
      {cartItemsArray.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>BẠN CHƯA BOOK PHÒNG</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{ paddingBottom: "25%" }}
          data={cartItemsArray}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <ItemCart
                onPress={() => onRemoveCart(item)}
                key={index}
                item={item}
              />
            );
          }}
        />
      )}

      {cartItemsArray.length > 0 && (
        <View style={styles.txtTimeBookContainer}>
          <Text style={styles.txtTimeBook}>
            Ngày nhận phòng : {selectedRange.firstDate}
          </Text>
          <Text style={styles.txtTimeBook}>
            Ngày trả phòng : {selectedRange.secondDate}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  txtTimeBookContainer: {
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    elevation: 3,
    marginVertical: 10,
    padding: 10,
    position: "absolute",
    bottom: 0,
  },
  txtTimeBook: {
    fontSize: 15,
  },
});
