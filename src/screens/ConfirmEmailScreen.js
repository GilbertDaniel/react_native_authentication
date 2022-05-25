import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from './../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {

    const [code, setCode] = useState('');
    const navigation = useNavigation();

    const onConfirmPress = () => {
        console.warn("Registered");
        navigation.navigate('Home');
    }

    const onSignInPress = () => {
        console.warn("Sign In");
        navigation.navigate('SignIn');
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