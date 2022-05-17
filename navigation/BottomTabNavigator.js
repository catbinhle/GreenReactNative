import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ProfileStackNavigator,
  HomeStackNavigator,
} from "./RootStackNavigator";
import Feather from "react-native-vector-icons/Feather";
import { Home, Profile } from "../screens";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Feather
              name={route.name === "Home" ? "home" : "user"}
              size={size}
              color={focused ? "blue" : "gray"}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
