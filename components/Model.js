import { StyleSheet, Text, View , Modal, Button, TouchableOpacity} from 'react-native'
import React from 'react'
import InputText from './InputText'
import CustomButton from './CustomButton'
import DatePicker from 'react-native-date-picker'
const Model = (params) => {


  
  return (
    <View style={{flex:1, backgroundColor:'rgba(50,50,50,0.5)' }}>
    <Modal
 transparent={true}
 visible={params.show ?params.show:null}

onRequestClose={params.close? params.close:null} 
>
<View style={{ flex:1, backgroundColor:'rgba(50,50,50,0.2)', justifyContent:'center',padding:20 , }}>
<View style={{flex:0.4, backgroundColor:'ghostwhite',borderRadius:10 }}>
<InputText title={'Enter Task'} state={params.stateTask?params.stateTask:null} val={params.stateVal?params.stateVal:null}/>
<TouchableOpacity style={{height:50,width:'90%', backgroundColor:"white", borderColor:"grey", alignSelf:'center', borderRadius:10, justifyContent:"center", margin:10}} onPress={params.timeAction?params.timeAction:null}> 
<Text style={{color:"black",fontSize:15, marginLeft:10}}>Selected Time: {params.useTime?params.useTime:null}</Text>
</TouchableOpacity>

<TouchableOpacity style={{height:50,width:'90%', backgroundColor:"white", borderColor:"grey", alignSelf:'center', borderRadius:10, justifyContent:"center", margin:10}} onPress={params.dateAction?params.dateAction:null}> 
<Text style={{color:"black",fontSize:15, marginLeft:10}}>Selected Date: {params.useDate?params.useDate:null}</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.newButton}  onPress={params.update? params.delete:null}>
  <Text style={styles.newText}>Update</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.newButton} onPress={params.cancel? params.cancel:null}>
  <Text style={styles.newText}>Cancel</Text>
</TouchableOpacity>
{/* <Button title='Cancel' onPress={params.cancel? params.cancel:null}/>
<Button title='Update' onPress={params.update? params.delete:null}/> */}

</View>
</View>
 </Modal>
 {/* <TouchableOpacity style={{height:50,width:'90%', backgroundColor:"white", borderColor:"grey", alignSelf:'center', borderRadius:10, justifyContent:"center", margin:10}} onPress={()=>setOpenTime(true)} > 
<Text style={{color:"black",fontSize:15, marginLeft:10}}>Selected Time: </Text>
</TouchableOpacity>

<TouchableOpacity style={{height:50,width:'90%', backgroundColor:"white", borderColor:"grey", alignSelf:'center', borderRadius:10, justifyContent:"center", margin:10}} onPress={()=>setOpen(true)}> 
<Text style={{color:"black",fontSize:15, marginLeft:10}}>Selected Date:    </Text>
</TouchableOpacity> */}


<DatePicker
        modal
        mode={params.dateMode?params.dateMode:null}
        open={params.DateOpen?params.DateOpen:null}
        date={params.Date?params.Date:null}
        timeZoneOffsetInMinutes={new Date().getTimezoneOffset()}
        is24hourSource="locale"
        onDateChange={params.handleDate?params.handleDate:null}
        onConfirm={params.handleDate?params.handleDate:null}
        onCancel={params.cancelDate?params.cancelDate:null}
      />

      <DatePicker
        modal
        mode={params.timeMode?params.timeMode:null}
        open={params.OpenTime?params.OpenTime:null}
        date={params.Time?params.Time:null}
        is24hourSource="locale"
        onDateChange={params.handleTime?params.handleTime:null}
        onConfirm={params.handleTime?params.handleTime:null}
      
        onCancel={params.cancelTime?params.cancelTime:null}
        
      />

      </View>
  )
}

export default Model

const styles = StyleSheet.create({
newButton:{
  alignSelf:'center',
height:37,
width:'37%',
backgroundColor:'teal',
justifyContent:'center',
borderRadius:20,
marginBottom:5
},
newText:{
  color:'white',
  fontSize:14,
  fontWeight:'700',
  textAlign:'center'

}

})

