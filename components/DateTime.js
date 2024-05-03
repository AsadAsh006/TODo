import { StyleSheet, Text, View , Button, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import InputText from './InputText'
import CustomButton from './CustomButton'
import firestore from '@react-native-firebase/firestore';
const DateTime = () => {
    const [time, setSelectedTime] = useState(new Date())
    const [date, setSelectedDate] = useState(new Date())
    const [openTime, setOpenTime] = useState(false)
    const [open, setOpen] = useState(false)
    const [dateTimeData, setDateTimeData] = useState([]);
    const [task, setTask]=useState()
    const handleDateSelection = (newDate) => {
        setSelectedDate.toString(newDate);
        setOpen(false);
      };
        
    
      const handleTimeSelection = (newTime) => {
        setSelectedTime(newTime);
        setOpen(false);
      };
    
      const handleDateTimeSelection = () => {
        const formattedDateTime = `${date.toISOString().split('T')[0]} ${time.toTimeString().split(' ')[0]}`;
        setDateTimeData([...dateTimeData, formattedDateTime]);
      };

    const addData=()=>{
      firestore()
  .collection('Users')
  .add({
    Time: time.toTimeString().split(' ')[0],
    Date:date.toISOString().split('T')[0],
    New:task,
  })
  .then(() => {
    console.log('User added!');
    navigation.navigate('Dashboard')
  });
    }
  return (
  <View style={{flex:1,backgroundColor:'ghostwhite'}}>
    <InputText title={'Enter Task'} state={setTask} val={task}/>

     <TouchableOpacity style={{height:50,width:'90%', backgroundColor:"white", borderColor:"grey", alignSelf:'center', borderRadius:10, justifyContent:"center", margin:10}} onPress={()=>setOpenTime(true)}> 
    <Text style={{color:"black",fontSize:15, marginLeft:10}}>Selected Time: {time.toTimeString().split(' ')[0]} </Text>
    </TouchableOpacity>

    <TouchableOpacity style={{height:50,width:'90%', backgroundColor:"white", borderColor:"grey", alignSelf:'center', borderRadius:10, justifyContent:"center", margin:10}} onPress={()=>setOpen(true)}> 
    <Text style={{color:"black",fontSize:15, marginLeft:10}}>Selected Date: {date.toISOString().split('T')[0]}   </Text>
    </TouchableOpacity>

    <CustomButton ButtonTitle={'Add to list'}  onPress={addData}/>
  
      <DatePicker
        modal
        mode='date'
        open={open}
        date={date}
        timeZoneOffsetInMinutes={new Date().getTimezoneOffset()}
        is24hourSource="locale"
        onDateChange={handleDateSelection}
        onConfirm={handleDateSelection}
        onCancel={() => {
          setOpen(false)
        }}
      />

      <DatePicker
        modal
        mode='time'
        open={openTime}
        date={time}
        is24hourSource="locale"
        onDateChange={handleTimeSelection}
        onConfirm={handleTimeSelection}
      
        onCancel={() => {
          setOpenTime(false)
        }}
        
      />
   </View>
 
  )
}

export default DateTime

const styles = StyleSheet.create({})