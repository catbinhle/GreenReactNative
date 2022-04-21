import react, {Component} from "react"
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native'
import styles from "./styles"
import Popup from "../Popup/Popup"

class Home extends Component {
    constructor(props) {
        super(props)
    }

    state = {

    }

    _renderItem = ({item}) => (
        <View style={styles.item}>
            <Image style={styles.image} source={{uri: item?.image}}/>
            <View style={styles.opacityInfoView}/>
            <View style={styles.infoView}>
                <Text style={styles.txtName}>{item?.name}</Text>
            </View>
        </View>
    )

    render() {
        const {data} = this.props
        return (
            <View style={styles.container}>
                <FlatList
                    numColumns={2}
                    data={data}
                    renderItem={this._renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

        )
    }
}

export default Home