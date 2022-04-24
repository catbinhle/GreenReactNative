import { react, Component } from 'react'
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import cityStyles from './CityStyle';
import { Home, provinces } from '../screenHome/Home'
import Detail from '../screenDetail/Detail';
import Icon from 'react-native-vector-icons/FontAwesome'

class City extends Component {
    constructor(props) {
        super(props)
        this.state = {
            screen: 'City',
           province: {}
        }
    }
    _renderProvince(province) {
        return (
            <View style={cityStyles.province}>
                <View style={cityStyles.imageAndName}>
                    <Image
                        style={cityStyles.image}
                        source={{ uri: province.image }}
                    />
                    <Text style={cityStyles.txtProvinceName}>{province.name}</Text>
                </View>

                <TouchableOpacity
                    style={cityStyles.iconBox}
                    onPress={() => { this.setState({ 
                        screen: 'Detail',
                        province: province
                    }) }
                    }
                >
                    <Icon style={cityStyles.icon}
                        name='angle-right'
                        color='black'
                    />
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        const { screen, province } = this.state
        if (screen === 'Home') return <Home />
        if (screen === 'Detail') return <Detail province={province}/>
        else {
            return (
                <View style={cityStyles.container}>
                    <View style={cityStyles.header}>
                        <Text style={cityStyles.txtHeader}>City</Text>
                    </View>

                    <ScrollView style={cityStyles.body}>
                        {
                            provinces.map(province => {
                                return (
                                    this._renderProvince(province)
                                )
                            })
                        }
                    </ScrollView>

                    <View style={cityStyles.footer}>
                        <TouchableOpacity style={cityStyles.footerHome}
                            onPress={() => {
                                this.setState({ screen: 'Home' })
                            }}
                        >
                            <Text style={cityStyles.txtFooter}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={cityStyles.footerCity}

                        >
                            <Text style={cityStyles.txtFooter}>City</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            )
        }
    }
}

export default City 
