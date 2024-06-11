import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'
const LeftColor = (params) => {
  return (
    
 <View style={{ flex:params.customFlex?params.customFlex:0.8}}>     
<View style={{backgroundColor:'teal', height:160, width:160,borderRadius:80, alignSelf:'flex-start',left:-10, top:-90, opacity:0.35}}></View>
<View style={{backgroundColor:'teal', height:160, width:160,borderRadius:80, alignSelf:'flex-start',left:-80, top:-200, opacity:0.35, zIndex:5, alignItems:'flex-end', justifyContent:'space-around', }}>
<TouchableOpacity style={{zIndex:20 ,marginTop:50, paddingHorizontal:50, }} onPress={params.action?params.action:null}>
  <Ionicons name={'arrow-back-circle-outline'}  color={'black'} size={25} style={{opacity:1, }}/>
  </TouchableOpacity>
</View>
  
  </View>
  )
}

export default LeftColor

const styles = StyleSheet.create({})