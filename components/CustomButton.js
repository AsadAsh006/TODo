import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = (params, {navigation}, onPress) => {
 
   return (
    <View  style={{alignItems:'center', justifyContent:'center'}}>
    <TouchableOpacity 
    onPress={params.action}
    style={{
    marginTop:params.topMargin?params.topMargin:null,
    height:params.Height? params.Height :40,
    width:params.Width ? params.Width :'55%',
    backgroundColor:'teal',
    alignItems:'center',
    margin:params.Margin? params.Margin : 5,
    marginLeft:10,
   justifyContent:'center',
   borderRadius:params.bRadius? params.bRadius:null
    }}>
      
        <Text style={{color:'white', fontSize:params.TextSize? params.TextSize: 16,fontWeight:600,alignItems:'center'}}>
          {params.ButtonTitle}
        </Text>
    </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({})