import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import Styles from "./home.Styles";
import {Component} from "react";
import Province from "./Province";
import CityDetail from "../CityDetail/CityDetail";
import CityList from "../CityList/CityList";
import HeaderStyle from "../HeaderFooterStyle/HeaderStyle";
import FooterStyle from "../HeaderFooterStyle/FooterStyle";

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        screen: 'home',
        name: '',
        image: '',
        province: new Province()
    }

    _renderProvinceCell(province) {
        return (
            <TouchableOpacity style={Styles.cellView}
                onPress={() => {
                    this.setState({
                        name: province?.name,
                        image: province?.image,
                        screen: 'cityDetail',
                        province: province
                    })
                }}
            >
                <Image
                    style={Styles.image}
                    source={province?.image}
                />
                <View style={Styles.description}>
                    <Text style={Styles.text}>{province?.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _renderProvinceColumn(column) {
        return (
            <View style={Styles.column}>
                {
                    provinces.map((province, index) => {
                        if (index % 2 === column) {
                            return (
                                this._renderProvinceCell(province)
                            )
                        }
                    })
                }
            </View>
        )
    }

    render() {
        const { province, screen } = this.state
        if (screen === 'cityList') return <CityList />
        if (screen === 'cityDetail') return <CityDetail province={province} />

        return (
            <View style={Styles.container}>
                <View style={HeaderStyle.cityHeader}>
                    <Text style={HeaderStyle.headerText}>Home</Text>
                </View>

                <ScrollView>
                    <View style={Styles.cityList}>
                        {
                            [0, 1].map(column => this._renderProvinceColumn(column))
                        }
                    </View>
                </ScrollView>

                <View style={FooterStyle.cityFoot}>
                    <TouchableOpacity
                        style={[FooterStyle.footButton, FooterStyle.deactive]}
                        disabled={true}
                    >
                        <Text style={FooterStyle.footText}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[FooterStyle.footButton, FooterStyle.active]}
                        onPress={() => {
                            this.setState({
                                screen: 'cityList'
                            })
                        }}
                    >
                        <Text style={FooterStyle.footText}>City</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const provinces = [
    new Province('HCM', 'East-South Region',
        require('../../assets/hochiminh/hochiminh.jpg'),
        require('../../assets/hochiminh/hochiminh1.jpg'),
        require('../../assets/hochiminh/hochiminh2.jpg')
    ),
    new Province('Hanoi', 'North Region',
        require('../../assets/hanoi/hanoi.jpg'),
        require('../../assets/hanoi/hanoi1.jpg'),
        require('../../assets/hanoi/hanoi2.jpg')
    ),
    new Province('Nha Trang', 'South Central Region',
        require('../../assets/nhatrang/nhatrang.jpg'),
        require('../../assets/nhatrang/nhatrang1.jpg'),
        require('../../assets/nhatrang/nhatrang2.jpg')
    ),
    new Province('Hue', 'Mid Central Region',
        require('../../assets/hue/hue.jpg'),
        require('../../assets/hue/hue1.jpg'),
        require('../../assets/hue/hue2.jpg')
    ),
    new Province('Da Nang', 'Mid Central Region',
        require('../../assets/danang/danang.jpg'),
        require('../../assets/danang/danang1.jpg'),
        require('../../assets/danang/danang2.jpg'),
    ),
    new Province('Hai Phong', 'Mid Central Region',
        require('../../assets/haiphong/haiphong.jpg'),
        require('../../assets/haiphong/haiphong1.jpg'),
        require('../../assets/haiphong/haiphong2.jpg')
    ),
]

export {
    provinces
} 