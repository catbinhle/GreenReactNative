import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

class HomePage extends Component {
  constructor(props) {
    super(props);
    const {param} = this.props
    this.state = {
      // searchValue: '',
      filterData: param.home,
      tempData: param.home,
    };
  }

  xoa_dau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
  }

componentDidMount(){
  const {title} =this.props
  title("Home")
}

  onSearch(value) {
    // this.setState({searchValue: value});
    if (value === "") {
      this.setState({ filterData: [...this.state.tempData] });
    } else {
      const newData = this.state.tempData.filter((e) => {
        return (
          this.xoa_dau(e.name)
            .toLowerCase()
            .replace(/\s+/g, "")
            // .startsWith(value.toLowerCase().replace(/\s+/g, ''));
            .includes(value.toLowerCase().replace(/\s+/g, ""))
        );
      });
      this.setState({ filterData: newData });
    }
  }

  _renderItem(item, index) {
    const { onGoTo} = this.props;
    return (
      <TouchableOpacity
        onPress={() => onGoTo("Details", item,index)}
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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            // value={this.state.searchValue}
            onChangeText={(newValue) => {
              this.onSearch(newValue);
            }}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder="Nhập tên thành phố"
          ></TextInput>
          <Feather name="search" size={25} />
        </View>
        {this.state.filterData == "" && <Text>Không tìm thấy kết quả</Text>}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.filterData}
          numColumns={2}
          keyExtractor={(item) => item.name}
          renderItem={({ item, index }) => {
            return this._renderItem(item, index);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 40,
  },
  inputContainer: {
    height: 40,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 0.8,
    borderRadius: 8,
    paddingHorizontal: 5,
    marginVertical: 10,
    elevation: 5,
    marginHorizontal: 10,
  },
  inputStyle: {
    flex: 1,
  },
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
});

export default HomePage;
