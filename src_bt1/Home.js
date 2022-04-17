import react, { Component } from "react"
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, BackdropBlur } from 'react-native'
import { Header } from "react-native/Libraries/NewAppScreen"
import Popup from "../app/Popup"
import styleHome from "./home.styles"

class Home extends Component {
    constructor(props) {
        super(props)

    }

    state = {
        city: '',
        image: '',
        isSelected: false,
    }

    _renderSelectedView = (item) => {
        <Popup item={item}
            onPress={() => this.setState({ isSelected: !this.state.isSelected })} />
    }

    render() {
        const { city, image, isSelected } = this.state

        return (
            <SafeAreaView style={[styleHome.container]}>
                <ScrollView>
                    {/* <Header >
                    </Header> */}
                    {/* <BackdropBlur> */}
                    <View style={[styleHome.header]}>
                        <View style={[styleHome.divider, {opacity: 0}]}/>
                        <Text style={[styleHome.headerText]}>Home</Text>
                        <View style={[styleHome.divider]}/>
                    </View>
                    <View>
                        
                    </View>
                    {/* </BackdropBlur> */}
                </ScrollView>
            </SafeAreaView>
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