import Main from './app/Main/Main'
import { LogBox } from 'react-native'

export default function App() {
  LogBox.ignoreAllLogs()
  LogBox.ignoreLogs(['Warning: ...'])
  return (
    <Main/>
  )
}
