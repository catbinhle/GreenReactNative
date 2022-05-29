import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import styles from "./styles";
import Home from "../Home/Home";
import Cities from "../Cities/Cities";
import DetailCity from "../DetailCity/DetailCity";
import Icon from "react-native-vector-icons/FontAwesome5";
import Popup from "../Popup/Popup";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Map from "../Map/Map";
import Login from "../Login/Login";

const HomeStack = createNativeStackNavigator();
const ToursStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = ({ userInfo }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#7f5bc7",
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerBackTitle: "",
    }}
  >
    <HomeStack.Screen name="HomeStack">
      {() => <Home userInfo={userInfo} />}
    </HomeStack.Screen>
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
);

const ToursStackScreen = () => (
  <ToursStack.Navigator>
    <ToursStack.Screen name="ToursStack" component={Cities} />
  </ToursStack.Navigator>
);

const LoginStackScreen = ({ changeProps, userInfo }) => (
  <LoginStack.Navigator>
    <LoginStack.Screen name="LoginStack">
      {() => <Login changeProps={changeProps} userInfo={userInfo} />}
    </LoginStack.Screen>
  </LoginStack.Navigator>
);

const TabsScreen = ({ changeProps, userInfo }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "HomeTab") {
          iconName = "home";
        } else if (route.name === "ToursTab") {
          iconName = "route";
        } else {
          iconName = "user";
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "#81898a",
      size: 24,
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#7f5bc7",
      },
    })}
  >
    <Tab.Screen name="HomeTab">
      {() => <HomeStackScreen userInfo={userInfo} />}
    </Tab.Screen>
    <Tab.Screen name="ToursTab" component={ToursStackScreen} />
    <Tab.Screen name="LoginTab">
      {() => <LoginStackScreen changeProps={changeProps} userInfo={userInfo} />}
    </Tab.Screen>
  </Tab.Navigator>
);

const Navigator = ({ changeProps, userInfo }) => {
  return (
    <NavigationContainer>
      <TabsScreen changeProps={changeProps} userInfo={userInfo} />
    </NavigationContainer>
  );
};

export default Navigator;
