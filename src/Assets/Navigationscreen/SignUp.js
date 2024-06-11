import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputText from '../../../components/InputText'
import CustomButton from '../../../components/CustomButton'
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LeftColor from '../../../components/LeftColor';

const App = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const SignUp = () => {
    console.log(email)
    console.log(password)
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Save the user's name upon successful sign-up
        userName();
        navigation.navigate('Dashboard');
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }



  const userName = async () => {
    try {
      await AsyncStorage.setItem('names', name);
    } catch (error) {
      console.error('Error saving name:', error);
    }
    console.log("🚀 ~ userName ~ name:", name)
  }

 

  return (
    <View style={{ flex: 1, backgroundColor: 'whitesmoke', }}>
     <LeftColor customFlex={0.35} action={()=>navigation.navigate('Login')}/>
     <View style={{justifyContent:'center', flex:0.3}}>
<Text style={{fontSize:20, textAlign:'center', fontWeight:'500'}}> Welcome Onboard!</Text>
<Text style={{textAlign:'center', color:'darkcyan', padding:20, fontSize:13}}>Let's help you meet up your task</Text>
</View>
      <InputText state={setName} val={name} topMargin={15}/>
      <InputText title={'Enter your Email address'} state={setEmail} val={email}  topMargin={15}/>
      <InputText title={'Create a Password'} state={setPassword} val={password}  topMargin={15}/>
      <InputText title={'Confirm your Password'} topMargin={15}/>

      <View style={{ justifyContent: 'center', flex:0.4}}>
        <CustomButton ButtonTitle={'Sign Up'} action={SignUp} />
      </View>
<View style={{alignItems:'center'}}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Text style={{ fontSize: 16, fontWeight: '400', color: 'black', }}>
          Already have an account ?
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: 'teal', fontWeight: '500' }}>
            Sign In
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
