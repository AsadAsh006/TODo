import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DateTime = (params) => {
    const [task, setTask]= useState('')
    const [time , setSelectedTime]=useState(new Date())
    const [date , setSelectedDate]=useState(new Date())
    const [openTime, setOpenTime] = useState(false)
    const [open, setOpen] = useState(false)
    
    const handleDateSelection = (newDate) => {
      setSelectedDate(newDate);
      setOpen(false);
    };
      
    
    const handleTimeSelection = (newTime) => {
      setSelectedTime.toString(newTime);
      console.log(setSelectedTime)
      setOpenTime(false);
    };
    const okay=()=>{
    time.toLocaleTimeString().split(' ')[0];
    console.log(time)
    }
    
    
    useEffect(()=>{
    
      const userData =async()=>{
        const users = await firestore().collection('Users').get();
        const Newusers = users.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(Newusers)
        return Newusers;
      }
      
      userData()
    },[])

  return (
    <View style={{flex:1}}>
    <TouchableOpacity style={{height:50,width:'90%', backgroundColor:"white", borderColor:"grey", alignSelf:'center', borderRadius:10, justifyContent:"center", margin:10}} onPress={()=>setOpenTime(true)} > 
<Text style={{color:"black",fontSize:15, marginLeft:10}}>Selected Time: {time.toLocaleTimeString()} </Text>
</TouchableOpacity>

<TouchableOpacity style={{height:50,width:'90%', backgroundColor:"white", borderColor:"grey", alignSelf:'center', borderRadius:10, justifyContent:"center", margin:10}} onPress={()=>setOpen(true)}> 
<Text style={{color:"black",fontSize:15, marginLeft:10}}>Selected Date: {date.toLocaleDateString()}   </Text>
</TouchableOpacity>


<DatePicker
        modal
        mode='date'
        open={params.DateOpen?params.DateOpen:null}
        date={params.Date?params.Date:null}
        timeZoneOffsetInMinutes={new Date().getTimezoneOffset()}
        is24hourSource="locale"
        onDateChange={params.handleDate?params.handleDate:null}
        onConfirm={params.handleDate?params.handleDate:null}
        onCancel={params.cancelDate?cancelDate:null}
      />

      <DatePicker
        modal
        mode='time'
        open={params.OpenTime?params.OpenTime:null}
        date={params.Time?params.Time:null}
        is24hourSource="locale"
        onDateChange={params.handleTime?params.handleTime:null}
        onConfirm={params.handleTime?params.handleTime:null}
      
        onCancel={params.cancelTime?cancelTime:null}
        
      />
    </View>
  )
}

export default DateTime

const styles = StyleSheet.create({})