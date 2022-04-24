import react, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import styles from "./styles";

class DetailCity extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    imgCity: null,
  };

  _renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => this.props.onShowPopup(item?.image)}
    >
      <Image style={styles.imgItem} source={{ uri: item?.image }} />
    </TouchableOpacity>
  );

  componentDidMount() {
    const { name } = this.props.param;
    this.props.title(name);
  }

  render() {
    const { param } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <Image style={styles.image} source={{ uri: param?.image }} />
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 14 }}>{param?.desc}</Text>
            <Text style={{ fontSize: 16, fontWeight: "700", paddingTop: 16 }}>
              {"Some images of " + param?.name}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <FlatList
              numColumns={2}
              data={data}
              renderItem={this._renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const data = [
  {
    name: "Ha Noi",
    desc: "The capital in Vietnam",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/ThapRua.jpg/2560px-ThapRua.jpg",
  },
  {
    name: "Ho Chi Minh city",
    desc: "The bigest city in Vietnam",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Notre_dame_saigon.jpg/1024px-Notre_dame_saigon.jpg",
  },
  {
    name: "Hue",
    desc: "The old capital in Vietnam",
    image:
      "https://cdnimg.vietnamplus.vn/t620/uploaded/mzdic/2021_12_16/dai_noi_hue_1612.jpg",
  },
  {
    name: "Da Nang",
    desc: "The city in central of Vietnam",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Han_River_Bridge_in_Vietnam_Night_View.jpg/308px-Han_River_Bridge_in_Vietnam_Night_View.jpg",
  },
  {
    name: "Da Lat",
    desc: "The city in central highland of Vietnam",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Da_Lat_train_station_21.jpg/1920px-Da_Lat_train_station_21.jpg",
  },
  {
    name: "Nha Trang",
    desc: "The beach city in central of Vietnam",
    image:
      "https://statics.vinpearl.com/bien-nha-trang-ve-dem-9%20(1)_1634535402.jpg",
  },
  {
    name: "Hoi An",
    desc: "The old town in central of Vietnam",
    image:
      "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip.jpg",
  },
  {
    name: "Can Tho",
    desc: "The city in west south of Vietnam",
    image: "https://tudienwiki.com/wp-content/uploads/2015/10/cau-can-tho.jpg",
  },
  {
    name: "Phu Quoc",
    desc: "The island city in west south of Vietnam",
    image: "https://media.travel.com.vn/tour/tfd_220412012542_308483.jpg",
  },
  {
    name: "Vung Tau",
    desc: "The city in southest of Vietnam",
    image:
      "https://i1-dulich.vnecdn.net/2021/12/06/13-2269-1638784751.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=4cERFe2QXEdklLLXCbYHyg",
  },
  {
    name: "Buon Me Thuot",
    desc: "The bigest city in central highland of Vietnam",
    image:
      "https://www.vietnamonline.com/media/uploads/froala_editor/images/vno_BMT1.jpg",
  },
];

export default DetailCity;
