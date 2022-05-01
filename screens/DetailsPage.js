import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";


class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { param, title } = this.props;
    title(param.name);
  }

  _renderItem(item) {
    const { onGoTo } = this.props;
    return (
      <TouchableOpacity
        onPress={() => onGoTo("Popup", item)}
        key={item.id}
        style={styles.itemContainer}
      >
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.itemImage} source={{ uri: item?.image }} />
          <View style={styles.itemTextContainer}>
            <View>
              <Text style={styles.txtTitle}>{item.name}</Text>
              <Text style={styles.txtSubTitle}>{item.sub_title}</Text>
            </View>
            <View>
              <Ionicons name="chevron-forward" size={24} color="black" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { param } = this.props;
    return (
      <ScrollView style={{backgroundColor:'#F7F7F7'}}>
        <View style={styles.container}>
          <View>
            <Image style={styles.imageCover} source={{ uri: param?.cover }} />
          </View>
          <View style={styles.descContainer}>
            <View style={styles.txtGioiThieuContainer}>
              <Text style={styles.txtGioiThieu}>GIỚI THIỆU</Text>
            </View>
            <View style={{ top: -20 }}>
              <Text style={styles.descTxt}>{param.desc}</Text>
            </View>
          </View>
          <View style={{ marginLeft: 12, marginTop: -15, marginBottom: 5 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Những điểm du lịch của {param.name}
            </Text>
          </View>

          {/* <FlatList
            data={param?.places}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item, index }) => {
              return this._renderItem(item);
            }}
          /> */}
          <View style={{ marginBottom: 10 }}>
            {param.places?.map((place) => {
              return this._renderItem(place);
            })}
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
  imageCover: {
    height: 300,
  },
  descContainer: {
    // flex:1,
    // height: 150,
    backgroundColor: "white",
    paddingTop: 10,
    paddingHorizontal: 18,
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    borderRadius: 20,
    top: -30,
    borderWidth: 1,
    borderColor: "black",
    elevation: 3,
    marginHorizontal: 10,
  },
  descTxt: {
    color: "black",
    fontSize: 15,
    letterSpacing: 0.8,
    textAlign: "center",
    marginTop: 5,
  },
  itemContainer: {
    backgroundColor: "white",
    margin: 10,
    elevation: 3,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  itemImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    resizeMode: "cover",
  },
  itemTextContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  txtTitle: {
    fontWeight: "bold",
  },
  txtSubTitle: {
    fontStyle: "italic",
  },
  txtGioiThieuContainer: {
    backgroundColor: "white",
    top: -23,
    marginHorizontal: "20%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  txtGioiThieu: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default DetailsPage;
