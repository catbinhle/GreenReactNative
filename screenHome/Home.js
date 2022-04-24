import { react, Component } from 'react'
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import homeStyles from './HomeStyle'
import City from '../screenCity/City'
import Detail from '../screenDetail/Detail';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            screen: 'Home',
            province: {}
        }
    }
    _renderProvince(province) {
        return (
            <TouchableOpacity style={homeStyles.province}
            onPress={() => {
                this.setState({
                    screen: 'Detail',
                    province: province
                })
            }}
            >
                <Image
                    style={homeStyles.image}
                    source={{ uri: province.image }}
                />
                <Text style={homeStyles.txtProvinceName}>{province.name}</Text>
            </TouchableOpacity>

        )
    }
    _renderColumn(column) {
        return (
            <View style={{ flex: 1 }}>
                {
                    provinces.map((province, index) => {
                        if (index % 2 === column) {
                            return (
                                this._renderProvince(province)
                            )
                        }
                    })
                }
            </View>
        )
    }
    render() {
        const { screen, province } = this.state
        if (screen === 'City') return <City/>
        else if (screen === 'Detail') return <Detail province={province}/>
        else {
            return (
                <View style={homeStyles.container}>
                    <View style={homeStyles.header}>
                        <Text style={homeStyles.txtHeader}>Home</Text>
                    </View>

                    <ScrollView style={homeStyles.body}>
                        <View style={homeStyles.column}>
                            {
                                [0, 1].map(column => this._renderColumn(column))
                            }
                        </View>
                    </ScrollView>

                    <View style={homeStyles.footer}>
                        <TouchableOpacity style={homeStyles.footerHome}>
                            <Text style={homeStyles.txtFooter}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={homeStyles.footerCity}
                            onPress={() => {
                                this.setState({screen: 'City'})
                            }}
                        >
                            <Text style={homeStyles.txtFooter}>City</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            )
        }
    }
}

const provinces = [
    {
        name: 'Ha Noi',
        image: 'http://www.hanoimoi.com.vn/Uploads/images/tuandiep/2020/08/20/ho-hoan-kiem.jpg',
        subtitle: 'thủ đô nước CHXHCNVN',
        otherImage: [
            'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg',
            'http://baophuyen.vn/upload/Images/2020/thang07/20/thanh-pho.jpg',
            'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2016/01/nha-trang-thap-tram-huong.jpg',
            'https://res.klook.com/image/upload/c_crop,w_1125,h_624,x_1,y_0/w_1125,h_624/w_80,x_15,y_15,g_south_west,l_klook_water/destination/ur2mrg23d91mex03l4mw.jpg'
        ]
    },
    {
        name: 'Hue',
        image: 'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg',
        subtitle: 'cố đô Huế ',
        otherImage: [
            'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg',
            'http://baophuyen.vn/upload/Images/2020/thang07/20/thanh-pho.jpg',
            'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2016/01/nha-trang-thap-tram-huong.jpg',
            'https://res.klook.com/image/upload/c_crop,w_1125,h_624,x_1,y_0/w_1125,h_624/w_80,x_15,y_15,g_south_west,l_klook_water/destination/ur2mrg23d91mex03l4mw.jpg'
        ]
    },
    {
        name: 'TP HCM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/268px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg',
        subtitle: 'Tp lớn nhất cả nước',
        otherImage: [
            'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg',
            'http://baophuyen.vn/upload/Images/2020/thang07/20/thanh-pho.jpg',
            'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2016/01/nha-trang-thap-tram-huong.jpg',
            'https://res.klook.com/image/upload/c_crop,w_1125,h_624,x_1,y_0/w_1125,h_624/w_80,x_15,y_15,g_south_west,l_klook_water/destination/ur2mrg23d91mex03l4mw.jpg'
        ]
    },
    {
        name: 'Vinh',
        image: 'https://cdnmedia.baotintuc.vn/Upload/Td3qmSNSjM5mhekL9vM2Q/files/2020/05/TPvinh/DJI_0217.jpg',
        subtitle: 'tỉnh Nghệ An',
        otherImage: [
            'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg',
            'http://baophuyen.vn/upload/Images/2020/thang07/20/thanh-pho.jpg',
            'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2016/01/nha-trang-thap-tram-huong.jpg',
            'https://res.klook.com/image/upload/c_crop,w_1125,h_624,x_1,y_0/w_1125,h_624/w_80,x_15,y_15,g_south_west,l_klook_water/destination/ur2mrg23d91mex03l4mw.jpg'
        ]
    },
    {
        name: 'Tuy Hoa',
        image: 'http://baophuyen.vn/upload/Images/2020/thang07/20/thanh-pho.jpg',
        subtitle: 'TP có không khí sạch nhất cả nước',
        otherImage: [
            'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg',
            'http://baophuyen.vn/upload/Images/2020/thang07/20/thanh-pho.jpg',
            'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2016/01/nha-trang-thap-tram-huong.jpg',
            'https://res.klook.com/image/upload/c_crop,w_1125,h_624,x_1,y_0/w_1125,h_624/w_80,x_15,y_15,g_south_west,l_klook_water/destination/ur2mrg23d91mex03l4mw.jpg'
        ]
    },
    {
        name: 'Nha Trang',
        image: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2016/01/nha-trang-thap-tram-huong.jpg',
        subtitle: 'TP du lịch',
        otherImage: [
            'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg',
            'http://baophuyen.vn/upload/Images/2020/thang07/20/thanh-pho.jpg',
            'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2016/01/nha-trang-thap-tram-huong.jpg',
            'https://res.klook.com/image/upload/c_crop,w_1125,h_624,x_1,y_0/w_1125,h_624/w_80,x_15,y_15,g_south_west,l_klook_water/destination/ur2mrg23d91mex03l4mw.jpg'
        ]
    },
    {
        name: 'Phu Quoc',
        image: 'https://bcp.cdnchinhphu.vn/Uploaded/phanthuytrang/2021_09_09/PQ.jpeg',
        subtitle: 'Đảo phía Nam Việt Nam',
        otherImage: [
            'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg',
            'http://baophuyen.vn/upload/Images/2020/thang07/20/thanh-pho.jpg',
            'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2016/01/nha-trang-thap-tram-huong.jpg',
            'https://res.klook.com/image/upload/c_crop,w_1125,h_624,x_1,y_0/w_1125,h_624/w_80,x_15,y_15,g_south_west,l_klook_water/destination/ur2mrg23d91mex03l4mw.jpg'
        ]
    },
    {
        name: 'Da Nang',
        image: 'https://res.klook.com/image/upload/c_crop,w_1125,h_624,x_1,y_0/w_1125,h_624/w_80,x_15,y_15,g_south_west,l_klook_water/destination/ur2mrg23d91mex03l4mw.jpg',
        subtitle: 'TP trực thuộc trung ương',
        otherImage: [
            'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg',
            'http://baophuyen.vn/upload/Images/2020/thang07/20/thanh-pho.jpg',
            'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2016/01/nha-trang-thap-tram-huong.jpg',
            'https://res.klook.com/image/upload/c_crop,w_1125,h_624,x_1,y_0/w_1125,h_624/w_80,x_15,y_15,g_south_west,l_klook_water/destination/ur2mrg23d91mex03l4mw.jpg'
        ]
    },
    {
        name: 'Quy Nhon',
        image: 'http://wiki-travel.com.vn/Uploads/picture/Viet_Dung-182604102645-Quy%20Nh%C6%A1n.jpg',
        subtitle: 'Tây Sơn - Bình Định',
        otherImage: [
            'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg',
            'http://baophuyen.vn/upload/Images/2020/thang07/20/thanh-pho.jpg',
            'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2016/01/nha-trang-thap-tram-huong.jpg',
            'https://res.klook.com/image/upload/c_crop,w_1125,h_624,x_1,y_0/w_1125,h_624/w_80,x_15,y_15,g_south_west,l_klook_water/destination/ur2mrg23d91mex03l4mw.jpg'
        ]
    },
    {
        name: 'Da Lat',
        image: 'https://cdn.alongwalker.co/info/wp-content/uploads/2022/03/26032859/image-que-garden-da-lat-mot-thoang-nhat-ban-nen-tho-dep-ngat-ngay-164821493917246.jpg',
        subtitle: 'TP ngàn hoa',
        otherImage: [
            'https://i-english.vnecdn.net/2020/06/19/Hue-1-1592552120.jpg',
            'http://baophuyen.vn/upload/Images/2020/thang07/20/thanh-pho.jpg',
            'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2016/01/nha-trang-thap-tram-huong.jpg',
            'https://res.klook.com/image/upload/c_crop,w_1125,h_624,x_1,y_0/w_1125,h_624/w_80,x_15,y_15,g_south_west,l_klook_water/destination/ur2mrg23d91mex03l4mw.jpg'
        ]
    },
]

export {
    Home,
    provinces
} 