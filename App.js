import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

import {PlacesNavigatorFun} from './navigations/PlacesNavigator'

export default function App() {
  return (
   <NavigationContainer>
     <PlacesNavigatorFun />
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
