import react, { Component } from "react"
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import styles from "./styles"
import Popup from "../Popup/Popup"
import Icon from 'react-native-vector-icons/FontAwesome'
test_tortoise
class Cities extends Component {
    constructor(props) {
        super(props)
    }

    state = {

    }

    goScreen = (item) => {
        this.props.goScreen('DetailScreen', item)
    }

    _renderItem = ({item}) => (
        <TouchableOpacity 
            style={styles.item}
            onPress={() => this.goScreen(item)}>
            <View style={styles.leftItemView}>
                <Image style={styles.logo} source={{uri: item?.image}}/>
                <View style={styles.infoView}>
                    <Text style={styles.txtName}>{item?.name}</Text>
                    <Text style={styles.txtDesc}>{item?.desc}</Text>
                </View>
            </View>
            <Icon name="angle-right" size={24} color="black" />
        </TouchableOpacity>
    )

    componentDidMount() {
        this.props.title('Cities')
    }

    render() {
        const {param} = this.props
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={param}
                    renderItem={this._renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

export default Cities