import {Component} from "react";
import {View, Text, Image, Dimensions, ScrollView, TouchableOpacity} from "react-native";

import homeStyles from "./homeStyles";
import provinces from "../Data/Province/provinces";
import news from "../Data/News/news";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    _goScreen(province) {
        this.props.navigation.navigate('Detail', province)
    }
    _renderProvince(province) {
        return(
            <TouchableOpacity
                style={homeStyles.province}
                onPress={() => {
                    return this._goScreen(province)
                }}
            >
                <Image
                    style={homeStyles.image}
                    source={{uri: province.image}}
                />
                <Text style={{marginVertical: 8, fontSize: 18}}>{province.name}</Text>
            </TouchableOpacity>
        )
    }
    _renderNews(news) {
        return(
            <View style={homeStyles.province}>
                <Image
                    style={homeStyles.image}
                    source={{uri: news.image}}
                />
                <Text style={{marginVertical: 8, fontSize: 16}}>{news.info}</Text>
            </View>
        )
    }
    render() {
        return(
            <View style={{flex: 1}}>
                {/*1. phần giới thiệu cố định*/}
                <View style={homeStyles.introduce}>
                    <Image
                        style={{height: 130, width: Dimensions.get('window').width}}
                        source={{uri: 'https://lambienhieu.vn/wp-content/uploads/2020/05/bang-hieu-quang-cao-homestay-7.jpg'}}
                    />
                    <Text style={{fontWeight: 'bold', fontSize: 26, color: 'white'}}>HOMESTAY</Text>
                </View>

                {/*2. phần nội dung gồm 4 View: text cố định, province, text cố định, news*/}
                <View style={homeStyles.content}>
                    <ScrollView style={{flex: 1, paddingHorizontal: 16, paddingVertical: 8}}>
                        {/*2.1 text cố định*/}
                        <View>
                            <Text style={{fontWeight: 'bold', fontSize: 21}}>Introduce</Text>
                        </View>
                        {/*2.2 province*/}
                        <ScrollView horizontal={true}>
                            {
                                provinces.map((province) => {
                                    return this._renderProvince(province)
                                })
                            }
                        </ScrollView>
                        {/*2.3 text cố định*/}
                        <View>
                            <Text style={{fontWeight: 'bold', fontSize: 21}}>News</Text>
                        </View>
                        {/*2.4 news*/}
                        <ScrollView horizontal={true}>
                            {
                                news.map((news) => {
                                    return this._renderNews(news)
                                })
                            }
                        </ScrollView>
                    </ScrollView>
                </View>
            </View>

        )
    }
}

export default Home