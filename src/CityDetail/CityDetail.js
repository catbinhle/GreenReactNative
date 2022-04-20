import { Component } from "react";
import { View, Text, Image, Button } from "react-native";
import Home from "../Home/Home";
import Styles from "../CityDetail/cityDetail.Styles";
import HeaderStyle from "../HeaderFooterStyle/HeaderStyle"

class CityDetail extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        scree: 'cityDetail'
    }

    render() {
        const {province} = this.props
        const {screen} = this.state
        if (screen === 'home') return <Home/>
        return (
            <View style={Styles.container}>
                <View style={HeaderStyle.cityHeader}>
                    <Text style={HeaderStyle.headerText}>{province.name}</Text>
                </View>

                <View style={Styles.cityDetailBody}>
                    <Image
                        style={Styles.mainImage}
                        source={province.image}
                    />
                    <Text style={Styles.description}>{province.description}</Text>
                </View>

                <View style={Styles.cityFoot}>
                    <Image
                        style={Styles.detailImage}
                        source={province.image1}
                    />
                    <Image
                        style={Styles.detailImage}
                        source={province.image2}
                    />
                </View>
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
            </View>
        )
    }
}

export default CityDetail