import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Details, Profile, Booking} from '../screens';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({route}) => ({headerTitle: route.params.item.name})}
      />
      <Stack.Screen name="Booking" component={Booking} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export {HomeStackNavigator, ProfileStackNavigator};
