import react, {Component} from "react"
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native'
import styles from "./styles"

class Home extends Component {
    constructor(props) {
        super(props)
    }

    state = {

    }

    goScreen = (item) => {
        this.props.goScreen('DetailScreen', item)
    }

    componentDidMount() {
        this.props.title('Home')
    }

    _renderItem = ({item}) => (
        <TouchableOpacity 
            style={styles.item}
            onPress={() => this.goScreen(item)}>
            <Image style={styles.image} source={{uri: item?.image}}/>
            <View style={styles.opacityInfoView}/>
            <View style={styles.infoView}>
                <Text style={styles.txtName}>{item?.name}</Text>
            </View>
        </TouchableOpacity>
    )

    render() {
        const {param} = this.props
        return (
            <View style={styles.container}>
                <FlatList
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={param}
                    renderItem={this._renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

        )
    }
}

export default Home