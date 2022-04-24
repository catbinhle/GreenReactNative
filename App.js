import react from 'react'
import {Home} from './screenHome/Home'
import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreAllLogs()
  LogBox.ignoreLogs(['Warning: ...'])
  return (
    <Home/>
  );
}

