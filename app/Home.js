import react, {Component} from "react"
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import styles from "./home.styles"
import Popup from "./Popup"

class Home extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        city: '',
        image: '',
        isSelected: false
    }

    _renderItemView = (item) => {
        return (
            <TouchableOpacity 
                style={styles.childView}
                onPress={() => {
                    this.setState({
                        city: item.name,
                        image: item.image,
                        isSelected: !this.state.isSelected
                    })
                }}>
                <Image 
                    style={{width: 24, height: 24, resizeMode: 'cover', borderRadius: 12, marginHorizontal: 4}} 
                    source={{uri: item.image}}/>
                <Text style={styles.txt}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    _renderColumnView = (column) => {
        return (
            <View style={{flex: 1}}>
                {
                    data.map((item, index) => {
                        if (index % 2 === column) {
                            return (
                                this._renderItemView(item)
                            )
                        }
                    })
                }
            </View>
        )
    }

    _renderSelectedView = (item) => (
        <Popup item={item}
            onPress={() => this.setState({isSelected: !this.state.isSelected})}/>
    )

    render() {
        const {city, image, isSelected} = this.state

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 44}}>
                        <Text>Danh Sach Cac Thanh Pho</Text>
                        <View style={styles.shadowView}>
                            {[0,1].map(item => this._renderColumnView(item))}
                        </View>
                    </View>
                </ScrollView>
                {
                    isSelected && this._renderSelectedView({image: image, city: city})
                }
            </View>

        )
    }
}

const data = [
    {
        name: 'Ha Noi',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Hue',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'TP HCM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Ha Noi',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Hue',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'TP HCM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Ha Noi',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Hue',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'TP HCM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Ha Noi',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Hue',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'TP HCM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Ha Noi',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Hue',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'TP HCM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Ha Noi',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Hue',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'TP HCM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Ha Noi',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Hue',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'TP HCM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
    {
        name: 'Ha Noi',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg'
    },
    {
        name: 'Hue',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg'
    },
    {
        name: 'TP HCM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg'
    },
]

export default Home