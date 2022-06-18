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
 import configureStore from './app/store/ConfigureStore'
 import { PersistGate } from 'redux-persist/integration/react'

  
 export default function App() {
   LogBox.ignoreAllLogs()
   LogBox.ignoreLogs(['Warning: ...'])
  //  let configureStore = store() //// ***** Nếu dùng createStore (deprecated)
  const { store, persister } = configureStore()
   return (
    /* ***** Nếu dùng createStore (deprecated) => thay thế: configureStore */
    <Provider store={store}> 
      <PersistGate loading={null} persistor={persister}>
        <Navigator/>
      </PersistGate>
    </Provider>
   )
 }