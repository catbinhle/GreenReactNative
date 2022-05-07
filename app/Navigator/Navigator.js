import react, { Component } from "react"
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from "./styles"
import Home from "../Home/Home"
import Tours from "../Tours/Tours"
import DetailCity from "../DetailCity/DetailCity"
import Icon from 'react-native-vector-icons/FontAwesome'
import Popup from "../Popup/Popup"
<<<<<<< HEAD
import Map from "../Map/Map"
=======
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
>>>>>>> e9bd2bc164f60a490e72062f88bc89deaf8ecd59

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

<<<<<<< HEAD
    screens = ['Home', 'Tours', 'DetailScreen', 'Map']
    tabbarScreen = ['Home', 'Tours']
    stackScreens = ['Home']
=======
const Navigator = () => {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Detail" component={DetailCity}/>
            </Stack.Navigator> */}
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Cities" component={Cities} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
>>>>>>> e9bd2bc164f60a490e72062f88bc89deaf8ecd59

// class Navigator extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             screen: 'Home',
//             param: null,
//             title: '',
//             popup: {
//                 image: null,
//             }
//         }
//     }

//     screens = ['Home', 'City', 'DetailScreen']
//     tabbarScreen = ['Home', 'City']
//     stackScreens = ['Home']

//     onGoScreen = (screen, param) => {
//         this.stackScreens.push(screen)
//         this.setState({
//             screen: screen,
//             param: param
//         })
//     }
//     onBackScreen = () => {
//         this.stackScreens.pop()
//         this.setState({screen: this.stackScreens[this.stackScreens.length - 1]})
//     }

//     onShowPopup = (image) => {
//         this.setState({
//             popup: {
//                 image: image,
//             }
//         })
//         // this.setState(prevState => ({
//         //     popup: {
//         //         ...prevState.popup,
//         //         image: image
//         //     }
//         // }))
//     }

<<<<<<< HEAD
    _renderContentView = (index, param) => {
        switch(index) {
            case 0: return (
                <Home 
                    param={data} 
                    setTitle={(title) => this.setState({title: title})}
                    goScreen={(screen, param) => this.onGoScreen(screen, param)}
                />)
            case 1: return (
                <Tours 
                    param={data} 
                    setTitle={(title) => this.setState({title: title})}
                    goScreen={(screen, param) => this.onGoScreen(screen, param)}
                />)
            case 2: return (
                <DetailCity 
                    title={(title) => this.setState({title: title})}
                    param={param}
                    onShowPopup={(image) => this.onShowPopup(image)}
                />)
            case 3: return (
                <Map 
                    // param={data} 
                    setTitle={(title) => this.setState({title: title})}
                    // goScreen={(screen, param) => this.onGoScreen(screen, param)}
                />)
        }  
    }
=======
//     _renderHeader = (index) => (
//         <View style={styles.header}>
//             { 
//                 index >= this.tabbarScreen.length
//                 ?
//                 <TouchableOpacity onPress={() => this.onBackScreen()}>
//                     <Icon name="angle-left" size={24} color="black" /> 
//                 </TouchableOpacity>
//                 :
//                 <View/>
//             }
//             <Text style={styles.txtHeader}>{this.state.title}</Text>
//             <View/>
//         </View>
//     )
>>>>>>> e9bd2bc164f60a490e72062f88bc89deaf8ecd59

//     _renderTabbarBottom = (indexScreen) => (
//         <View style={indexScreen >= this.tabbarScreen.length ? styles.hideTabbar : styles.tabbar}>
//             {
//                 this.tabbarScreen.map((screen, index) => (
//                     <TouchableOpacity 
//                         style={[styles.tabbarItem, indexScreen === index ? styles.activeItem : styles.deactiveItem]}
//                         onPress={() => this.onGoScreen(screen, {})}>
//                         <Text style={indexScreen === index ? styles.activeTxtItem : styles.deactiveTxtItem}>{screen}</Text>
//                     </TouchableOpacity>
//                 ))
//             }
//         </View>
//     )

//     _renderContentView = (index, param) => {
//         switch(index) {
//             case 0: return (
//                 <Home 
//                     param={data} 
//                     title={(title) => this.setState({title: title})}
//                     goScreen={(screen, param) => this.onGoScreen(screen, param)}
//                 />)
//             case 1: return (
//                 <Cities 
//                     param={data} 
//                     title={(title) => this.setState({title: title})}
//                     goScreen={(screen, param) => this.onGoScreen(screen, param)}
//                 />)
//             case 2: return (
//                 <DetailCity 
//                     title={(title) => this.setState({title: title})}
//                     param={param}
//                     onShowPopup={(image) => this.onShowPopup(image)}
//                 />)
//         }  
//     }

//     _renderPopup = () => {
//         const {image} = this.state.popup
//         if (image != null) {
//             return (
//                 <Popup 
//                     imgeCity={image}
//                     onPress={() => this.onShowPopup(null)}
//                 />
//             )
//         }
//     }

//     render() {
//         const {screen, param} = this.state
//         let index = this.screens.indexOf(screen)

//         return (
//             <SafeAreaView style={styles.container}>
//                 {this._renderHeader(index)}
//                 {this._renderContentView(index, param)}
//                 {this._renderTabbarBottom(index)}
//                 {this._renderPopup()}
//             </SafeAreaView>
//         )
//     }
// }

const data = [
    {
        id: 1,
        name: 'Ha Noi',
        desc: 'The capital in Vietnam',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/ThapRua.jpg/2560px-ThapRua.jpg'
    },
    {
        id: 2,
        name: 'Ho Chi Minh city',
        desc: 'The bigest city in Vietnam',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Notre_dame_saigon.jpg/1024px-Notre_dame_saigon.jpg'
    },
    {
        id: 3,
        name: 'Hue',
        desc: 'The old capital in Vietnam',
        image: 'https://cdnimg.vietnamplus.vn/t620/uploaded/mzdic/2021_12_16/dai_noi_hue_1612.jpg'
    },
    {
        id: 4,
        name: 'Da Nang',
        desc: 'The city in central of Vietnam',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Han_River_Bridge_in_Vietnam_Night_View.jpg/308px-Han_River_Bridge_in_Vietnam_Night_View.jpg'
    },
    {
        id: 5,
        name: 'Da Lat',
        desc: 'The city in central highland of Vietnam',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Da_Lat_train_station_21.jpg/1920px-Da_Lat_train_station_21.jpg'
    },
    {
        id: 6,
        name: 'Nha Trang',
        desc: 'The beach city in central of Vietnam',
        image: 'https://statics.vinpearl.com/bien-nha-trang-ve-dem-9%20(1)_1634535402.jpg'
    },
    {
        id: 7,
        name: 'Hoi An',
        desc: 'The old town in central of Vietnam',
        image: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip.jpg'
    },
    {
        id: 8,
        name: 'Can Tho',
        desc: 'The city in west south of Vietnam',
        image: 'https://tudienwiki.com/wp-content/uploads/2015/10/cau-can-tho.jpg'
    },
    {
        id: 9,
        name: 'Phu Quoc',
        desc: 'The island city in west south of Vietnam',
        image: 'https://media.travel.com.vn/tour/tfd_220412012542_308483.jpg'
    },
    {
        id: 10,
        name: 'Vung Tau',
        desc: 'The city in southest of Vietnam',
        image: 'https://i1-dulich.vnecdn.net/2021/12/06/13-2269-1638784751.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=4cERFe2QXEdklLLXCbYHyg'
    },
    {
        id: 11,
        name: 'Buon Me Thuot',
        desc: 'The bigest city in central highland of Vietnam',
        image: 'https://www.vietnamonline.com/media/uploads/froala_editor/images/vno_BMT1.jpg'
    },
]

export default Navigator