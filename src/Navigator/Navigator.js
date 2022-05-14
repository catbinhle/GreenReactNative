import {Component} from "react";
import {View, Text} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Home from "../Home/Home";
import Tours from "../Tours/Tours";
import Sharing from "../Sharing/Sharing";

const HomeStack = createNativeStackNavigator()
const ToursStack = createNativeStackNavigator()
const SharingStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

class Navigator extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    HomeStackScreen() {
        return(
            <HomeStack.Navigator>
                <HomeStack.Screen
                    name='Home'
                    component={Home}
                />
            </HomeStack.Navigator>
        )
    }
    ToursStackScreen() {
        return(
            <ToursStack.Navigator>
                <ToursStack.Screen
                    name='Tours'
                    component={Tours}
                />
            </ToursStack.Navigator>
        )
    }
    SharingStackScreen() {
        return(
            <SharingStack.Navigator>
                <SharingStack.Screen
                    name='Sharing'
                    component={Sharing}
                />
            </SharingStack.Navigator>
        )
    }

    render() {
        return(
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        tabBarIcon: ({color}) => {
                            let iconName
                            if (route.name === 'Home') iconName = 'home'
                            if (route.name === 'Tours') iconName = 'route'
                            if (route.name === 'Sharing') iconName = 'book'
                            return <Icon
                                name={iconName}
                                size={24}
                                color={color}
                            />
                        },
                        tabBarActiveTintColor: 'white',
                        tabBarInactiveTintColor: 'black',
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: '#336666'
                        }
                    })}
                >
                    <Tab.Screen
                        name='Home'
                        component={this.HomeStackScreen}
                    />
                    <Tab.Screen
                        name='Tours'
                        component={this.ToursStackScreen}
                    />
                    <Tab.Screen
                        name='Sharing'
                        component={this.SharingStackScreen}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

export default Navigator