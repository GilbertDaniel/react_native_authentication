import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, {useState} from 'react'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import CustomInput from './../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {

    const [username, setUserName] = useState('');
    const [email, setUserEmail] = useState('');

    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();

    const onRegisterPress = () => {
        console.warn("Registered");
        navigation.navigate('ConfirmEmail');
    }

    const onSignInPress = () => {
        console.warn("Sign In");
        navigation.navigate('SignIn');
    }

    const onTermsPressed = () => {
        console.warn("Terms Pressed");
    }

    const onPrivacyPolicyPressed = () =>{
        console.warn("Privacy Policy Pressed")
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Create An Account</Text>
            <CustomInput placeholder="User Name" value={username} setValue={setUserName}/>
            <CustomInput placeholder="User Name" value={email} setValue={setUserEmail}/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomInput placeholder="Confirm Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true}/>
            <CustomButton text="Register" onPress={onRegisterPress}/>

            <Text style={styles.text}>By Registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsPressed}>Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text></Text>

            
            <SocialSignInButtons/>
            

            <CustomButton text="Have an Account? Sign In" onPress={onSignInPress} type="TERTIARY"/>

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