import react, {Component} from "react"
import {View, Text, Image, TouchableOpacity, FlatList, TextInput} from 'react-native'
import styles from "./styles"
import Icon from 'react-native-vector-icons/FontAwesome'

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

    _renderSearch = () => {
        //test
        return (
            <View style={styles.searchView}>
                <TextInput 
                    style={{flex: 1, marginRight: 10}}
                    placeholder={'Nhập tên thành phố'}
                    placeholderTextColor={'grey'}
                    // secureTextEntry={true} => thường dùng cho mật khẩu
                    // keyboardType={'numeric'} => lựa chọn bàn phím
                    onChangeText={(value) => {
                        console.log('TEST: --- ', value)
                    }}
                /> 
                <Icon name="search" size={16} color="dark-grey" />
            </View>
        )
    }

    render() {
        const {param} = this.props
        return (
            <View style={styles.container}>
                {this._renderSearch()}
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