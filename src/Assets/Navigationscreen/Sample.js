import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const Sample = (datetime, {navigation}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [date, setDate]=useState('')
    const [time, setTime]= useState('')

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleDateConfirm = date=> {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
      };
    
      const hideTimePicker = () => {
        setTimePickerVisibility(false);
      };
    
      const handleTimeConfirm = date => {
        console.warn("A Time has been selected: ", date);
        hideTimePicker();
      };
  return (

    <View style={{flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center' }}>
   <TouchableOpacity style={{borderWidth:1,height:40,width:'80%',borderRadius:10 ,justifyContent:'center', margin:10, backgroundColor:'white'}}
   onPress={showDatePicker}>
    <Text style={{color:'black'}}>
        Select Date
    </Text>
   </TouchableOpacity>
   <TouchableOpacity style={{borderWidth:1,height:40,width:'80%',borderRadius:10 ,justifyContent:'center', backgroundColor:'white'}}
   onPress={showTimePicker}
   
   >
    <Text style={{color:'black'}}>
        Select Time
    </Text>
   </TouchableOpacity>

   <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
        onChange={(val)=>{console.log(val)}}
      />

      
   <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
        onChange={(val)=>setTime(val)
        
    
    }
      />
    </View>
  )
}

export default Sample

const styles = StyleSheet.create({})