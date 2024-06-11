import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputText from '../../../components/InputText'
import CustomButton from '../../../components/CustomButton'
import firestore,{Timestamp, firebase} from '@react-native-firebase/firestore';
import DatePicker from 'react-native-date-picker'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LeftColor from '../../../components/LeftColor';


const App = ({navigation}) => {
  const [time, setSelectedTime] = useState(new Date())
  const [date, setSelectedDate] = useState(new Date())
  const [openTime, setOpenTime] = useState(false)
  const [open, setOpen] = useState(false)
  const [task, setTask]=useState()

  const handleDateSelection = (newDate) => {
      setSelectedDate(newDate);
      console.log(setSelectedDate)
      setOpen(false);
    };
      
    
    const handleTimeSelection = (newTime) => {
      setSelectedTime(newTime);
      console.log(setSelectedTime)
      setOpenTime(false);
    };
const okay=()=>{
    time.toLocaleTimeString().split(' ')[0];
    console.log(time)
}


const addData = () => {
  const combinedDateTime = new Date(date);
  combinedDateTime.setHours(time.getHours());
  combinedDateTime.setMinutes(time.getMinutes());

  // Convert combined date and time to Firestore Timestamp
  const firestoreTimestamp = firebase.firestore.Timestamp.fromDate(combinedDateTime);

  firestore()
    .collection('Users')
    .add({
      Time: firestoreTimestamp.toDate().toLocaleString(), // Convert Firestore Timestamp to Date object and then to string
      New: task,
    })
    .then(() => {
      navigation.navigate('Dashboard');
      console.log('User added!');
    })
    .catch((error) => {
      console.error('Error adding user: ', error);
    });
};

  return (
    <View style={{flex:1,backgroundColor:'whitesmoke', }}>
 
<LeftColor action={()=>navigation.navigate('Dashboard') } customFlex={0.3}/>

<Text style={{fontSize:23, fontWeight:'600', color:'black',textAlign:'center'}}>Welcome Onboard!</Text>

<Image source={require('../Images/gb.png')}
style={{alignSelf:'center', margin:15}}
></Image>

<Text style={{color:'teal', fontSize:16, fontWeight:'500', textAlign:"center", margin:15}}>
  Add What your want to do later on..
</Text>

<View style={{height:50, width:'98%', flex:0.7}}>
<InputText title={'Enter Task'} state={setTask} val={task}/>

<TouchableOpacity style={{height:50,width:'90%', backgroundColor:"white", borderColor:"grey", alignSelf:'center', borderRadius:10, justifyContent:"center", margin:10}} onPress={()=>setOpenTime(true)} > 
<Text style={{color:"black",fontSize:15, marginLeft:10}}>Selected Time: {time.toLocaleTimeString()} </Text>
</TouchableOpacity>

<TouchableOpacity style={{ height:50,width:'90%', backgroundColor:"white", borderColor:"grey", alignSelf:'center', borderRadius:10, justifyContent:"center", margin:10}} onPress={()=>setOpen(true)} > 
<Text style={{color:"black",fontSize:15, marginLeft:10}}>Selected Date: {date.toLocaleDateString()}   </Text>
</TouchableOpacity>

<CustomButton ButtonTitle={'Add to list'}  action={addData} topMargin={20}/>


</View>
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

export default App

const styles = StyleSheet.create({})

