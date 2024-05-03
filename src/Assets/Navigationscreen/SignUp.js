import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View , } from 'react-native'
import React , {useState} from 'react'
import InputText from '../../../components/InputText'
import CustomButton from '../../../components/CustomButton'
import auth from '@react-native-firebase/auth';

const App = ({navigation}) => {

  const [email,setEmail]= useState('')
  const [password, setPassword]= useState('')

  const SignUp =()=>{
    console.log(email)
    console.log(password)
auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    navigation.navigate('Dashboard')
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
  return (
    <View style={{ flex: 1, backgroundColor: 'whitesmoke', justifyContent:'center',}}>
<View>
<TouchableOpacity onPress={()=> navigation.goBack()}>
    
<Image source={require('../Images/ar.png')}
style={{right:150,bottom:150}}
/>
</TouchableOpacity>
</View>

<InputText/>
<InputText title={'Enter your Email address'} state={setEmail} val={email}/>
<InputText title={'Create a Password'} state={setPassword}  val={password}/>
<InputText title={'Confirm your Password'}/>



    <View style={{justifyContent:'center'}}>
<CustomButton ButtonTitle={'Sign Up'} action={SignUp}/>
</View>

<View style={{flexDirection:'row', justifyContent:'flex-end'}}>
  <Text style={{fontSize:16,fontWeight:'400', color:'black',}}>
Already have an account ?
</Text>

  <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
     <Text style={{color:'teal', fontWeight:'500'}}>
    Sign In 
     </Text>
  </TouchableOpacity>
</View>


    
    </View>

  )
}

export default App

const styles = StyleSheet.create({})