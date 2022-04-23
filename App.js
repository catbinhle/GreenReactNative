import Home from "./src/Home/Home";
import {LogBox} from "react-native";
import {View} from "react-native-web";

export default function App() {
  LogBox.ignoreAllLogs()
  LogBox.ignoreLogs(['Warning: ...'])
  return (
      <Home/>
  );
}
