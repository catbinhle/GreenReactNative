import React from "react";
import {LogBox} from "react-native";
import Navigator from "./app/Navigator/Navigator";
import { Provider } from "react-redux";
import store from "./app/stores/store";

export default function App() {
  LogBox.ignoreAllLogs()
  LogBox.ignoreLogs(['Warning: ...'])
  debugger
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  )
}
