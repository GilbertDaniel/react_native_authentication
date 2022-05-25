import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from './../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigation = useNavigation();

    const onSubmitPress = () => {
        console.warn("Submit");
        navigation.navigate('Home');
    }

    const onSignInPress = () => {
        console.warn("Sign In");
        navigation.navigate('SignIn');
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset Your Password</Text>
            <CustomInput placeholder="Enter your Confirmation Code" value={code} setValue={setCode}/>
            <CustomInput placeholder="Enter your New Password" value={newPassword} setValue={setNewPassword} secureTextEntry={true}/>
            <CustomButton text="Submit" onPress={onSubmitPress}/>
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

export default NewPasswordScreen