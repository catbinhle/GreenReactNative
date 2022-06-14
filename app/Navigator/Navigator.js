import React from "react";
import {Component} from "react";
import {View, Text} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Home from "../Home/Home";
import Tours from "../Tours/Tours";
import Sharing from "../Sharing/Sharing";
import Detail from "../Detail/Detail";
import Service from "../Service/Service";
import TourTravel from "../TourTravel/TourTravel";
import Login from "../Login/Login";
import sharingInfo from "../Data/Sharing/sharingInfo";

const HomeStack = createNativeStackNavigator()
const ToursStack = createNativeStackNavigator()
const SharingStack = createNativeStackNavigator()
const LoginStack = createNativeStackNavigator()
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
                <HomeStack.Screen
                    name='Detail'
                    component={Detail}
                    options={({route}) => ({title: route.params.name})}
                />
                <HomeStack.Screen
                    name='Service'
                    component={Service}
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
                <ToursStack.Screen
                    name='TourTravel'
                    component={TourTravel}
                    options={({route}) => ({title: route.params.name})}
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

    LoginStackScreen() {
      return(
        <LoginStack.Navigator>
          <LoginStack.Screen
            name="Login"
            component={Login}
          />
        </LoginStack.Navigator>
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
                    <Tab.Screen
                        name='Login'
                        component={this.LoginStackScreen}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

export default Navigator
