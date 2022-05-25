import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
export default function App() {
  return (
    <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight}}>
        {/* <SignInScreen/> */}
        {/* <SignUpScreen/> */}
        {/* <ConfirmEmailScreen/> */}
        {/* <ForgotPasswordScreen/> */}
        <NewPasswordScreen/>
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
