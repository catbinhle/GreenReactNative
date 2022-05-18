import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details, Booking, Login, Cart } from "../screens";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={BottomTabNavigator}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({ headerTitle: route.params.item.name })}
      />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen
        // options={{ headerTitle: "Đăng nhập" }}
        name="Login"
        component={Login}
      />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
