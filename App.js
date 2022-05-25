import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
export default function App() {
  return (
    <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight}}>
        <SignInScreen/>
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
