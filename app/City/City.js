import react, { Component } from "react"
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import styles from "./styles"
import Popup from "../Popup/Popup"
import Icon from 'react-native-vector-icons/FontAwesome'

class City extends Component {
    constructor(props) {
        super(props)
    }

    state = {

    }

    _renderItem = ({item}) => (
        <View style={styles.item}>
            <Image style={{height: 32, width: 32}} source={{uri: item?.image}}/>
            <Text>{item?.name}</Text>
            <Icon name="angle-right" size={24} color="black" />
        </View>
    )

    render() {

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

const data = [
    {
        name: 'Ha Noi',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/ThapRua.jpg/2560px-ThapRua.jpg'
    },
    {
        name: 'Ho Chi Minh city',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Notre_dame_saigon.jpg/1024px-Notre_dame_saigon.jpg'
    },
    {
        name: 'Hue',
        image: 'https://cdnimg.vietnamplus.vn/t620/uploaded/mzdic/2021_12_16/dai_noi_hue_1612.jpg'
    },
    {
        name: 'Da Nang',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Han_River_Bridge_in_Vietnam_Night_View.jpg/308px-Han_River_Bridge_in_Vietnam_Night_View.jpg'
    },
    {
        name: 'Da Lat',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Da_Lat_train_station_21.jpg/1920px-Da_Lat_train_station_21.jpg'
    },
]

export default City