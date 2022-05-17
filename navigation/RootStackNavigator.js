import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Details, Profile, Booking, Login } from "../screens";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({ headerTitle: route.params.item.name })}
      />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
