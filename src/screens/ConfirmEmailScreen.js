import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, {useState} from 'react'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import CustomInput from './../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons/SocialSignInButtons';
const ConfirmEmailScreen = () => {

    const [code, setCode] = useState('');

    const onConfirmPress = () => {
        console.warn("Registered");
    }

    const onSignInPress = () => {
        console.warn("Sign In");
    }

    const onResendPress = () => {
        console.warn("Sign In");
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Confirm your Email</Text>
            <CustomInput placeholder="Enter your Confirmation Code" value={code} setValue={setCode}/>
            <CustomButton text="Confirm" onPress={onConfirmPress}/>
            <CustomButton text="Resend Code" onPress={onResendPress} type="SECONDARY"/>
            <CustomButton text="Back to Sign In" onPress={onSignInPress} type="TERTIARY"/>

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

export default ConfirmEmailScreen