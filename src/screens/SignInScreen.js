import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../assets/images/Logo_1.png'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import CustomInput from './../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
const SignInScreen = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();

    const onSignInPress = () => {
        console.warn("Sign In");
    }

    const onSignUpPress = () => {
        console.warn("Sign Up");
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
    <ScrollView>
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain"/>
            <CustomInput placeholder="User Name" value={username} setValue={setUserName}/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomButton text="Sign In" onPress={onSignInPress}/>
            <CustomButton text="Forgot password" onPress={onForgotPasswordPress} type="TERTIARY"/>

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
        // backgroundColor: '#c4e3f3',
        height: '100%'
    },
    logo:{
        width:'70%',
        maxWidth:300,
        height: 100
    }
})

export default SignInScreen