import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";

class ItemTours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMore: false,
    };
  }

  render() {
    const { item,index } = this.props;
    return (
      <View key={index} style={styles.itemContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="cover"
              style={styles.imageStyle}
              source={{ uri: item.image }}
            />
          </View>
          <View style={[styles.txtContainer]}>
            <Text style={styles.txt}>{item.tourName}</Text>
            <Text style={styles.txt}>Lịch trình : {item.period}</Text>
          </View>
        </View>

        {this.state.isMore && (
          <View style={styles.txtSeeMore}>
            <Text style={styles.txt}>Chi phí : {item.price} VND</Text>
            <Text style={styles.txt}>Khởi hành : {item.timeDepart}</Text>
            <Text style={styles.txt}>
              Đánh giá :{" "}
              {[1, 2, 3, 4, 5].map((number, index) => {
                return (
                  <AntDesign
                    key={index}
                    color={number <= item.rate ? "red" : "gray"}
                    name="star"
                    size={15}
                  />
                );
              })}
            </Text>
          </View>
        )}

        {/* Nút 3 chấm */}
        <TouchableOpacity
          onPress={() => {
            this.setState((prevState, prevProps) => ({
              isMore: !prevState.isMore,
            }));
          }}
          style={styles.btnReadMore}
        >
          <Feather color={"gray"} name="more-horizontal" size={25} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    marginHorizontal: 10,
    marginBottom: 18,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 5,
  },
  rowContainer: {
    flexDirection: "row",
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  imageContainer: {
    flex: 1,
  },
  txtContainer: {
    flex: 3,
    marginLeft: 15,
    marginRight: 8,
  },
  txt: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 18,
    marginTop: 8,
    marginLeft: 8,
  },
  containerSeeMore: {
    flex: 1,
  },
  btnReadMore: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 40,
    alignItems: "center",
  },
  txtSeeMore: {
    marginBottom: 10,
  },
});

export default ItemTours;
