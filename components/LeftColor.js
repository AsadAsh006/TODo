import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
const LeftColor = () => {
  return (
    <View style={{flexDirection:'row',zIndex:20}}>
    <Image source={require('../src/Assets/Images/12.png')}/>

    <TouchableOpacity style={{zIndex:10 ,justifyContent:'flex-end',alignItems:'flex-start'}}>
  <Ionicons name={'arrow-back-circle-outline'}  color={'black'} size={25} style={{alignSelf:'flex-start'}}/>
  </TouchableOpacity>
  </View>
  )
}

export default LeftColor

const styles = StyleSheet.create({})