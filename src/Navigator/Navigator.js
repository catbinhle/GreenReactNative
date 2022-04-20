import { View, Text, TouchableOpacity } from "react-native";
import NavigatorStyles from "./navigator.Styles";
import react, { Component } from "react";
import Home, { provinces } from "../Home/Home";
import CityList from "../CityList/CityList";
import CityDetail from "../CityDetail/CityDetail";

export default class Navigator extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        screen: 'home'
    }

    _renderHeader = () => (
        <View style={NavigatorStyles.cityHeader}>
            <Text style={[NavigatorStyles.text,{ fontSize: 50 }]}>City</Text>
        </View>
    )

    _renderFooter = () => (
        <View style={NavigatorStyles.cityFoot}>
            <TouchableOpacity 
                style={NavigatorStyles.footButton}
                onPress={() => {
                    this.setState({
                        screen: 'home'
                    })
                }}
            
            >
                <Text style={NavigatorStyles.footText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={NavigatorStyles.footButton}
                onPress={() => {
                    this.setState({
                        screen: 'cityList'
                    })
                }}
            >
                <Text style={NavigatorStyles.footText}>City</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        const { screen } = this.state
        const {province} = this.props
        // if (province !== undefined) return <CityDetail province={province}/>
        debugger
        return (
            <View style={Styles.container}>
                {
                    this._renderHeader()
                }
                {
                    screen === 'home' && <Home/>
                }
                {
                    screen === 'cityList' && <CityList/>
                }
                {
                    this._renderFooter()
                }
            </View>
        )
    }
}