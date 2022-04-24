//showsverticalscrollindicator: để ẩn thanh trượt bên hông screen
import { react, Component } from 'react'
import { Text, View, TouchableOpacity, Image, ScrollView, ImageBackgroundBase } from 'react-native';
import { Home, provinces } from '../screenHome/Home'
import detailStyles from './DetailStyle';
import Icon from 'react-native-vector-icons/FontAwesome'
import City from '../screenCity/City'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            screen: 'Detail'
        }
    }
    _renderImage(province, column) {
        return (
            <View style={{flex: 1}}>
                {
                    province.otherImage.map((image, index) => {
                        if (index % 2 === column) {
                            return (
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{ height: 150, width: 150, marginHorizontal: 16, marginVertical: 16, borderRadius: 10 }}
                                        source={{ uri: image }}
                                    />
                                </View>
                            )
                        }
                    })
                }

            </View>
        )
    }

    render() {
        const { province } = this.props
        const { screen } = this.state

        if (screen === 'City') return <City />
        return (
            <View style={detailStyles.container}>
                <View style={detailStyles.header}>
                    <TouchableOpacity
                        style={{ flex: 3, paddingHorizontal: 10, paddingTop: 30 }}
                        onPress={() => { this.setState({ screen: 'City' }) }}
                    >
                        <Icon
                            style={detailStyles.icon}
                            name='arrow-left'
                            color='black'
                        />
                    </TouchableOpacity>
                    <View style={{ flex: 5 }}>
                        <Text style={detailStyles.txtHeader}>{province.name}</Text>
                    </View>
                </View>

                <ScrollView style={detailStyles.body}>
                    <View>
                        <Image
                            style={detailStyles.image}
                            source={{ uri: province.image }}
                        />
                    </View>

                    <View style={detailStyles.subtitle}>
                        <Text style={detailStyles.txtSubtitle}>{province.subtitle}</Text>
                    </View>

                    <View>
                        <Text style={{ fontSize: 17, fontWeight: '600', marginVertical: 10, marginHorizontal: 30 }}>Một số hình ảnh</Text>
                    </View>

                    <View style={detailStyles.otherImageArea}>
                        {
                            [0, 1].map(column => {
                                return (
                                    this._renderImage(province, column)
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Detail