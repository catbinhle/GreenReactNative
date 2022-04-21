import react, { Component } from "react"
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import styles from "./styles"
import Popup from "../Popup/Popup"
import Icon from 'react-native-vector-icons/FontAwesome'

class Cities extends Component {
    constructor(props) {
        super(props)
    }

    state = {

    }

    _renderItem = ({item}) => (
        <View style={styles.item}>
            <View style={styles.leftItemView}>
                <Image style={styles.logo} source={{uri: item?.image}}/>
                <View style={styles.infoView}>
                    <Text style={styles.txtName}>{item?.name}</Text>
                    <Text style={styles.txtDesc}>{item?.desc}</Text>
                </View>
            </View>
            <Icon name="angle-right" size={24} color="black" />
        </View>
    )

    render() {
        const {data} = this.props
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    renderItem={this._renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

export default Cities