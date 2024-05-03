import { StyleSheet, Text, TextInput, View , Image} from 'react-native'
import React from 'react'
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'
import { firebase } from '@react-native-firebase/auth'
const InputText = (params) => {
  return (
    <View >
      <TextInput placeholder={params.title? params.title :'Enter Your Name'}
      placeholderTextColor={'dimgrey'}
      onChangeText={(val)=>params.state ? params.state(val) : null}
      value={params.val?params.val :null}
      style={{
        color:'black',
        backgroundColor: params.bgcolor? params.bgcolor :'white',
        marginStart:15,
        marginEnd:15,
        // width:'90%',
        padding:10,
        // height:4,
        margin:5,
        borderRadius:10
      }}
      />
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({})