import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from './../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
const ForgotPasswordScreen = () => {

    const [username, setUserName] = useState('');

    const onSendPress = () => {
        console.warn("Registered");
    }

    const onSignInPress = () => {
        console.warn("Sign In");
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset Your Password</Text>
            <CustomInput placeholder="Enter your User Name" value={username} setValue={setUserName}/>
            <CustomButton text="SEND" onPress={onSendPress}/>
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

export default ForgotPasswordScreen