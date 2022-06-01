import Navigator from './app/Navigator/Navigator'
import { LogBox } from 'react-native'

export default function App() {
  LogBox.ignoreAllLogs()
  LogBox.ignoreLogs(['Warning: ...'])
  return (
    <Navigator/>
  )
}
