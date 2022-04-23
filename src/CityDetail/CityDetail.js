import { Component } from "react";
import {View, Text, Image, Button, TouchableOpacity, TouchableOpacityComponent} from "react-native";
import Home from "../Home/Home";
import Styles from "../CityDetail/cityDetail.Styles";
import HeaderStyle from "../HeaderFooterStyle/HeaderStyle"
import Popup from "../Popup/Popup";

class CityDetail extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        screen: 'cityDetail',
        isSelected: false
    }

    _renderHeader = (province) => (
        <View style={HeaderStyle.cityHeader}>
            <Text style={HeaderStyle.headerText}>{province?.name}</Text>
        </View>
    )

    _renderBodyDetail = (province) => (
        <View style={Styles.cityDetailBody}>
            <Image
                style={Styles.mainImage}
                source={province?.image}
            />
            <Text style={Styles.description}>{province?.description}</Text>
        </View>
    )

    _renderCityFoot = (province) => (
        <View style={Styles.cityFoot}>
            <TouchableOpacity
                onPress={() => this.setState({
                    isSelected: !this.state.isSelected
                })}
            >
                <Image
                    style={Styles.detailImage}
                    source={province?.image1}
                />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => this.setState({
                    isSelected: !this.state.isSelected
                })}
            >
                <Image
                    style={Styles.detailImage}
                    source={province?.image2}
                />
            </TouchableOpacity>
        </View>
    )

    _renderHomeButton = () => (
        <View>
            <Button
                title="Home"
                onPress={() => {
                    this.setState({
                        screen: 'home'
                    })
                }}
            />
        </View>
    )

    _renderSelectedProvince = (image) => (
        <Popup
            image={image}
            onPress={() => this.setState({
                isSelected: !this.state.isSelected
            })}
        />
    )

    render() {
        const { province } = this.props
        const { screen, isSelected } = this.state
        if (isSelected) this._renderSelectedProvince(province?.name)
        if (screen === 'home') return <Home />
        return (
            <View style={Styles.container}>
                {
                    !isSelected &&
                    <>
                        {this._renderHeader(province)}
                        {this._renderBodyDetail(province)}
                        {this._renderCityFoot(province)}
                        {this._renderHomeButton()}
                    </>
                }
                {
                    isSelected && this._renderSelectedProvince(province?.image)
                }

            </View>
        )
    }
}

export default CityDetail