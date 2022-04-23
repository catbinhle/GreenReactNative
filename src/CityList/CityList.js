import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native"
import Home, {provinces} from "../Home/Home"
import Styles from "./cityList.Styles"
import {Component} from "react"
import CityDetail from "../CityDetail/CityDetail"
import Province from "../Home/Province"
import HeaderStyle from "../HeaderFooterStyle/HeaderStyle"
import FooterStyle from "../HeaderFooterStyle/FooterStyle"
import Icon from 'react-native-vector-icons/FontAwesome'

export default class CityList extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        province: new Province(),
        screen: 'cityList',
    }

    _renderCityList = (province) => (
            <TouchableOpacity style={Styles.listItem}
                onPress={() => {
                    this.setState({
                        province: province,
                        screen: 'cityDetail'
                    })
                }}
            >
                <View style={Styles.leftCityView}>
                    <Image style={Styles.cityImage} source={province?.image} />
                    <Text style={Styles.cityText}>{province?.name}</Text>
                </View>
                <Icon
                    style={Styles.cityIcon}
                    name="angle-right"
                    size={50}
                    color="black"
                />
            </TouchableOpacity>
    )

    _renderCityView() {
        return (
            <View style={Styles.container}>
                <View style={HeaderStyle.cityHeader}>
                    <Text style={HeaderStyle.headerText}>City</Text>
                </View>

                <ScrollView>
                    <View>
                        {
                            provinces.map(province => this._renderCityList(province))
                        }
                    </View>
                </ScrollView>

                <View style={FooterStyle.cityFoot}>
                    <TouchableOpacity
                        style={[FooterStyle.footButton, FooterStyle.active]}
                        onPress={() => this.setState({
                            screen: 'home'
                        })}
                    >
                        <Text style={FooterStyle.footText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[FooterStyle.footButton, FooterStyle.deactive]}
                        disabled={true}
                    >
                        <Text style={FooterStyle.footText}>City</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {
        const { province, screen } = this.state
        if (screen === 'home') return <Home />
        if (screen === 'cityDetail') return <CityDetail province={province} />
        // if (screen === 'cityDetail') return <Navigator province={province}/>

        return (
            this._renderCityView()
        )
    }
}
