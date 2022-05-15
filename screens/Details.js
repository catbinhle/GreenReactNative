import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import React, { useState } from "react";
import ShowMore from "../components/ShowMore";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import ImageScroll from "../components/ImageScroll";

const { width, height } = Dimensions.get("screen");

const Details = (props) => {
  const { route, navigation } = props;
  const { item, index } = route.params;
  const [showMore, setShowMore] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageScroll data_images={item.pics} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>Giới thiệu</Text>
        </View>
        <View style={styles.txtContainer}>
          <View>
            <Text
              style={{ fontSize: 15, textAlign: "justify", lineHeight: 25 }}
            >
              {item.description.slice(0, 250)}
            </Text>
          </View>
          <TouchableOpacity
            style={{ position: "absolute", bottom: 5, right: 10 }}
            onPress={() => setShowMore(true)}
          >
            <Text style={styles.btnShowMore}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
        <ShowMore
          item={item}
          visible={showMore}
          onPress={() => setShowMore(false)}
        />

        {/* Tiện nghi */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>Các tiện nghi</Text>
        </View>
        <View style={styles.txtContainer}>
          <View style={{ flex: 1 }}>
            <View style={styles.rowStyle}>
              <MaterialIcons
                style={styles.iconStyle}
                name="pool"
                size={24}
                color="black"
              />
              <Text>Hồ bơi</Text>
            </View>
            <View style={styles.rowStyle}>
              <MaterialIcons
                style={styles.iconStyle}
                name="wifi"
                size={24}
                color="black"
              />
              <Text>Wi-fi miễn phí</Text>
            </View>
            <View style={styles.rowStyle}>
              <MaterialIcons
                style={styles.iconStyle}
                name="beach-access"
                size={24}
                color="black"
              />
              <Text>Giáp biển</Text>
            </View>
            <View style={styles.rowStyle}>
              <MaterialIcons
                style={styles.iconStyle}
                name="local-bar"
                size={24}
                color="black"
              />
              <Text>Quầy bar</Text>
            </View>
            <View style={styles.rowStyle}>
              <MaterialCommunityIcons
                style={styles.iconStyle}
                name="bus-side"
                size={24}
                color="black"
              />
              <Text>Xe đưa đón sân bay</Text>
            </View>
          </View>
        </View>

        {/* Vị trí và các thông tin khác */}
        <View style={[styles.titleContainer]}>
          <Text style={styles.titleStyle}>Vị trí và các thông tin khác</Text>
        </View>
        <View style={styles.txtContainer}>
          <View style={{ flex: 1 }}>
            <View style={styles.rowStyle}>
              <MaterialIcons
                style={styles.iconStyle}
                name="location-pin"
                size={24}
                color="black"
              />
              <View>
                <Text>{item.location}</Text>
              </View>
            </View>
            <View style={styles.rowStyle}>
              <Entypo
                style={styles.iconStyle}
                name="old-phone"
                size={24}
                color="black"
              />
              <Text style={{ fontSize: 18, color: "blue" }}>{item.phone}</Text>
            </View>

            {/* Bản đồ vị trị  */}
            <MapView
              initialRegion={{
                latitude: item.latitude,
                longitude: item.longitude,
                latitudeDelta: 0.025,
                longitudeDelta: 0.025,
              }}
              zoomEnable={true}
              showsUserLocation={true}
              followUserLocation={true}
              style={{ marginVertical: 10, width: width, height: height * 0.5 }}
            >
              <Marker
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
              />
            </MapView>
            <Button
              onPress={() => navigation.navigate("Booking", item)}
              title="ĐẶT PHÒNG"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    backgroundColor: "#000000aa",
    marginTop: 5,
  },
  titleStyle: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  txtContainer: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    flexDirection: "row",
  },
  btnShowMore: {
    color: "blue",
  },
  iconStyle: {
    marginRight: 10,
  },
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
});
