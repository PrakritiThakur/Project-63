import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './screens/HomeScreen';
export default function App() {
  return (
    <View style={styles.container}>
       <HomeScreen/>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   },
  
});
