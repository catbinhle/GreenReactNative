import React, { Component } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import styles from "./styles"
import Home from "../Home/Home"
import Cities from "../Cities/Cities"
import DetailCity from "../DetailCity/DetailCity"
import Icon from 'react-native-vector-icons/FontAwesome5'
import Popup from "../Popup/Popup"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Map from "../Map/Map"
import Login from "../Login/Login"

const HomeStack = createNativeStackNavigator()
const ToursStack = createNativeStackNavigator()
const LoginStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const HomeStackScreen = () => (
    <HomeStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#7f5bc7',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerBackTitle: ''
            // header: ({route}) => (
            //     <View style={{
            //         // display: 'flex',
            //         flexDirection: 'row',
            //         justifyContent: 'space-between',
            //         alignItems: 'center',
            //         height: 50,
            //         borderBottomWidth: 0.5,
            //         borderColor: 'grey'
            //       }}>
            //         <View/>
            //         <Text style={{
            //               fontWeight: 'bold', 
            //               fontSize: 18
            //         }}>{route?.params?.name ? route?.params?.name :route?.name}</Text>
            //         <View/>
            //       </View>
            // )
        }}
    >
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen
            name="DetailCity"
            component={DetailCity}
            options={({ route }) => ({ title: route.params.name })}
        />
        <HomeStack.Screen
            name="Map"
            component={Map}
            options={({ route }) => ({ title: route.params.name })}
        />
    </HomeStack.Navigator>
)

const ToursStackScreen = () => (
    <ToursStack.Navigator>
        <ToursStack.Screen name="Tours" component={Cities} />
    </ToursStack.Navigator>
)

const LoginStackScreen = () => (
    <LoginStack.Navigator>
        <LoginStack.Screen name="Login" component={Login} />
    </LoginStack.Navigator>
)

const tabsScreen = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = 'home'
                    // iconName = focused
                    //   ? 'ios-information-circle'
                    //   : 'ios-information-circle-outline';
                } else if (route.name === 'Tours') {
                    iconName = 'route'
                    // iconName = focused ? 'ios-list-box' : 'ios-list';
                } else {
                    iconName = 'user'
                }
                return <Icon name={iconName} size={size} color={color} />;
                // return <Image style={{height: 24, width: 24, resizeMode: 'cover'}} source={require('../../assets/tours.png')}/>
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: '#81898a',
            size: 24,
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#7f5bc7'
            }
        })}
    >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Tours" component={ToursStackScreen} />
        <Tab.Screen name="Login" component={LoginStackScreen} />
    </Tab.Navigator>
)

const Navigator = () => {
    return (
        <NavigationContainer>
            {tabsScreen()}
        </NavigationContainer>
    )
}

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
        name: 'Ha Noi',
        desc: 'The capital in Vietnam',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/ThapRua.jpg/2560px-ThapRua.jpg'
    },
    {
        name: 'Ho Chi Minh city',
        desc: 'The bigest city in Vietnam',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Notre_dame_saigon.jpg/1024px-Notre_dame_saigon.jpg'
    },
    {
        name: 'Hue',
        desc: 'The old capital in Vietnam',
        image: 'https://cdnimg.vietnamplus.vn/t620/uploaded/mzdic/2021_12_16/dai_noi_hue_1612.jpg'
    },
    {
        name: 'Da Nang',
        desc: 'The city in central of Vietnam',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Han_River_Bridge_in_Vietnam_Night_View.jpg/308px-Han_River_Bridge_in_Vietnam_Night_View.jpg'
    },
    {
        name: 'Da Lat',
        desc: 'The city in central highland of Vietnam',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Da_Lat_train_station_21.jpg/1920px-Da_Lat_train_station_21.jpg'
    },
    {
        name: 'Nha Trang',
        desc: 'The beach city in central of Vietnam',
        image: 'https://statics.vinpearl.com/bien-nha-trang-ve-dem-9%20(1)_1634535402.jpg'
    },
    {
        name: 'Hoi An',
        desc: 'The old town in central of Vietnam',
        image: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip.jpg'
    },
    {
        name: 'Can Tho',
        desc: 'The city in west south of Vietnam',
        image: 'https://tudienwiki.com/wp-content/uploads/2015/10/cau-can-tho.jpg'
    },
    {
        name: 'Phu Quoc',
        desc: 'The island city in west south of Vietnam',
        image: 'https://media.travel.com.vn/tour/tfd_220412012542_308483.jpg'
    },
    {
        name: 'Vung Tau',
        desc: 'The city in southest of Vietnam',
        image: 'https://i1-dulich.vnecdn.net/2021/12/06/13-2269-1638784751.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=4cERFe2QXEdklLLXCbYHyg'
    },
    {
        name: 'Buon Me Thuot',
        desc: 'The bigest city in central highland of Vietnam',
        image: 'https://www.vietnamonline.com/media/uploads/froala_editor/images/vno_BMT1.jpg'
    },
]

export default Navigator