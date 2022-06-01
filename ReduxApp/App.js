/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { LogBox } from 'react-native'
 import Navigator from './app/navigator/Navigator'
 import { Provider } from 'react-redux'
 import store from './app/store/ConfigureStore'
 
 export default function App() {
   LogBox.ignoreAllLogs()
   LogBox.ignoreLogs(['Warning: ...'])
  //  let configureStore = store() //// ***** Nếu dùng createStore (deprecated)
   return (
    /* ***** Nếu dùng createStore (deprecated) => thay thế: configureStore */
    <Provider store={store}> 
     <Navigator/>
    </Provider>
   )
 }