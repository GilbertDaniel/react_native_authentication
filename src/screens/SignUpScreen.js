import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, {useState} from 'react'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import CustomInput from './../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
const SignUpScreen = () => {

    const [username, setUserName] = useState('');
    const [email, setUserEmail] = useState('');

    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onRegisterPress = () => {
        console.warn("Registered");
    }

    const onSignUpPress = () => {
        console.warn("Sign Up");
    }

    const onTermsPressed = () => {
        console.warn("Terms Pressed");
    }

    const onPrivacyPolicyPressed = () =>{
        console.warn("Privacy Policy Pressed")
    }

    const onSignInFacebook = () => {
        console.warn("Sign In Facebook");
    }

    const onSignInGoogle = () => {
        console.warn("Sign In Google");
    }

    const onSignInApple = () => {
        console.warn("Sign In Apple");
    }

    const onForgotPasswordPress = () => {
        console.warn("Forgot Password");
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Create An Account</Text>
            <CustomInput placeholder="User Name" value={username} setValue={setUserName}/>
            <CustomInput placeholder="User Name" value={email} setValue={setUserEmail}/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomInput placeholder="Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true}/>
            <CustomButton text="Register" onPress={onRegisterPress}/>

            <Text style={styles.text}>By Registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsPressed}>Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text></Text>

            <CustomButton text="Sign In with Facebook" onPress={onSignInFacebook} bgColor="#E7EAF4" fgColor="#4765A9"/>
            <CustomButton text="Sign In with Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44"/>
            <CustomButton text="Sign In with Apple ID" onPress={onSignInApple} bgColor="#E3E3E3" fgColor="#363636"/>
            

            <CustomButton text="Don't have an account? Create one" onPress={onSignUpPress} type="TERTIARY"/>

        </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#c4e3f3',
        height: '100%'
    },
    title:{
         fontSize: 24,
         fontWeight: 'bold',
         color: '#051C60',
         margin: 10
    },
    text:{
        color: 'gray',
        marginVertical: 10
    },
    link:{
        color: '#FDB075'
    }
})

export default SignUpScreen