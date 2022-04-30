import React from 'react';
import {View, StyleSheet, Text, StatusBar, LogBox} from 'react-native';
import NavPage from './screens/NavPage';

const App = () => {
  LogBox.ignoreAllLogs();
  LogBox.ignoreLogs(['Warning: ...']);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <NavPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
