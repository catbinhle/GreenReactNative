import { StyleSheet, LogBox, StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import HomeStackNavigator from "./navigation/RootStackNavigator";

const App = () => {
  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={"transparent"}
      />
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default App;
