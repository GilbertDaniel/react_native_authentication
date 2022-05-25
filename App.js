import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

import Navigation from './src/navigation/index';

export default function App() {
  return (
    <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight}}>
        <Navigation/>
        <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor: '#F9FBFC'
  }
});
