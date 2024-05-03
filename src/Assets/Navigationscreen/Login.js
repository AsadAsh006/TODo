// import { StyleSheet, Text, TextInput,Image, TouchableOpacity, View } from 'react-native'
// import React from 'react'

// const App = ({navigation}) => {
//   return (

//     <View style={{flex:1,backgroundColor:'whitesmoke',opacity:1,alignItems:'center', justifyContent:'center'  }}>

// <Image source={require('../Images/12.png')} 
//   style={{bottom:47, right:105, }}
//   />

// <View>

// <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
// <Image source={require('../Images/ar.png')}
// style={{bottom:100,right:170}}
// />
// </TouchableOpacity>
// </View>

//       <Text style={{fontSize:24,bottom:50,fontWeight:'500', color:'black'}}>Welcome Back!</Text>
// <View style={{alignItems:'center'}}>
  
// <Image source={require('../Images/me.png' )} 
// style={{bottom:30}}/>


// {/* <Image source={require('../../src/insta.jpg')} style={{width:20,height:20}}/> */}
// </View>


// <TouchableOpacity>

// <View style={{top:5,}}>

// <Text style={{fontSize:17, fontWeight:'400',color:'teal',opacity:0.7}}>
// Forgot Password ?
// </Text>
// </View>
// </TouchableOpacity>

// <View style={{alignItems:'center', justifyContent:'center',top:30}}>

// <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')} 
// style={{width:240,height:47,borderWidth:1, backgroundColor:'teal', top:10,alignItems:'center', justifyContent:'center',right:9 }}>

// <Text style={{fontSize:20,height:50, color:'white',padding:'20',top:9 }}>
// Sign In

// </Text>

// </TouchableOpacity>

// <View>
// <Text style={{fontSize:17, color:'black',top:25,right:45,opacity:1}}>
// Don't have an account ?

// </Text>

// <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
// <Text style={{fontSize:17,color:'teal',left:146}}>

// Sign Up
// </Text>

// </TouchableOpacity>
// </View>


// </View>

//     </View>
//   )

// }




// export default App

// const styles = StyleSheet.create({})


import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import InputText from '../../../components/InputText'
import LeftColor from '../../../components/LeftColor'
import CustomButton from '../../../components/CustomButton'
import auth from '@react-native-firebase/auth';
const Login = ({navigation}) => {

  const [email,setEmail]= useState('')
  const [password, setPassword]= useState('')

  
 
   const handleLogin=()=>{
console.log(email)
 console.log(password)
    auth()
      .signInWithEmailAndPassword(email, password)
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

    <View style={{flex:1, backgroundColor:'whitesmoke', }}>
     <LeftColor/>

<Text style={{textAlign:'center', color:'black', fontWeight:600, fontSize:26}}> 
  Welcome Back!
</Text>

<View>
<Image source={require('../Images/me.png',)} style={{alignSelf:'center', margin:13}}/>
<InputText title={'Enter your Email Address'} state={setEmail} val={email}/>
<InputText title={'Enter Your Password'} state={setPassword} val={password} />

<Text style={{color:'teal',fontSize:15, alignSelf:'center', padding:15}}>Forgot Password ?</Text>
<CustomButton ButtonTitle={'Login'} action={handleLogin}/>

<View style={{ flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end' }}>
<Text style={{color:'black'}}>Don't have an account ?</Text>
<TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
<Text style={{color:'teal'}}> Sign Up</Text>
</TouchableOpacity>
</View>

</View>


    </View>
  )
} 

export default Login

const styles = StyleSheet.create({})