import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileStackNavigator, HomeStackNavigator} from './RootStackNavigator';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          return (
            <Feather
              name={route.name === 'HomeScreen' ? 'home' : 'user'}
              size={size}
              color={focused ? 'blue' : 'gray'}
            />
          );
        },
      })}>
      <Tab.Screen name="HomeScreen" component={HomeStackNavigator} />
      <Tab.Screen name="ProfileScreen" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
