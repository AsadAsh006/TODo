import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = (params, {navigation}, onPress) => {
 
   return (
    <View  style={{alignItems:'center', justifyContent:'center'}}>
    <TouchableOpacity 
    onPress={params.action}
    style={{
    height:40,
    width:'55%',
    backgroundColor:'teal',
    alignItems:'center',
    margin:10,
   justifyContent:'center'
    }}>
      
        <Text style={{color:'white', fontSize:16,fontWeight:400,}}>
          {params.ButtonTitle}
        </Text>
    </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({})