import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import IconRow from "./IconRow";
const ItemCart = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardStyle}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={styles.imageStyle}
            source={{
              uri: "https://nudoanhnhan.net/wp-content/uploads/2016/08/Mia-Resort-Nha-Trang-1.jpg",
            }}
          />
        </View>

        {/* Thông tin phòng */}
        <View style={{ flex: 1, padding: 10 }}>
          <Text style={styles.titleStyle}>Phòng Luxury cao cấp</Text>
          <IconRow iconName="ac-unit" title={"Điều hòa không khí"} />
          <IconRow iconName="tv" title={"TV màn hình phẳng"} />
          <IconRow iconName="volume-mute" title={"Hệ thống cách âm"} />
          <IconRow iconName="wine-bar" title={"Quầy bar mini"} />
          <IconRow iconName="beach-access" title={"Nhìn ra biển"} />
        </View>

        {/* Số lượng phòng  */}
        <View style={{ position: "absolute", bottom: 10, right: 10 }}>
          <Text style={{ fontSize: 18 }}>x{item.qty}</Text>
        </View>

        {/* Nút xóa  */}
        <TouchableOpacity
          onPress={() =>
            Alert.alert("Thông báo", "Bạn có muốn hủy phòng không?", [
              {
                text: "Thoát",
                style: "cancel",
              },
              {
                text: "OK",
                onPress: onPress,
              },
            ])
          }
          activeOpacity={0.8}
          style={styles.btnRemove}
        >
          <Text style={{ fontSize: 15 }}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardStyle: {
    backgroundColor: "white",
    elevation: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  btnRemove: {
    width: 35,
    position: "absolute",
    top: -5,
    right: -5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "white",
    elevation: 5,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  imageContainer: {
    height: "100%",
    width: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  imageStyle: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
