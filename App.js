import Home from "./src/Home/Home";
import {LogBox} from "react-native";
import Navigator from "./src/Navigator/Navigator";
export default function App() {
  LogBox.ignoreAllLogs()
  LogBox.ignoreLogs(['Warning:...'])
  return (
      <Navigator/>
  );
}
