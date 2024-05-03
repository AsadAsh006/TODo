import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View , FlatList, Button, Modal, } from 'react-native'
import React,{useState,useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import DateTimePicker from 'react-native-modal-datetime-picker';
import Camera from '../../../components/Camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
const App =  ({navigation}) => {

const [data, setData]= useState ([])


  return (

<View style={{flex:1,backgroundColor:'whitesmoke', zIndex:10,justifyContent:'space-around'}}>
 
<View style={{justifyContent:'space-around',  }}>
<Image source={require('../Images/12.png')}
 style={{position:'absolute'}}
 />
   <Image source={require('../Images/tr.png')}
      style={{width:'100',}}
      />
  

 <View style={{alignItems:'center',position:'absolute', justifyContent:"center", alignSelf:'center', borderRadius:75, height:150, width:150,}}>
<Camera/>
</View>

   <Text style={{ alignSelf:'center', fontSize:23, color:'black',fontWeight:'500',justifyContent:"center", position:'absolute', }}>
  Welcome Fisayami
</Text>

</View>

<Image source={require('../Images/cy.png')}
style={{alignSelf:'center', justifyContent:'center', margin:5}}
/>

<Text style={{ fontWeight:'500', color:'black',fontSize:20, }}>
  Todo Tasks.
</Text>
 


<View style={{ height:'25%', backgroundColor:'white', margin:10, borderRadius:20}}>

<TouchableOpacity onPress={()=>navigation.navigate('Add')}
style={{alignItems:'flex-end', margin:20}}>
<AntDesign name={'pluscircle'} color={'black'} size={30}/>
</TouchableOpacity>


<ActivityIndicator color={'red'} size={30} style={{alignSelf:"center", justifyContent:"center"}}/>


<FlatList
data={data}


renderItem={({item , index})=>{
return(

  
  <View style={{flexDirection:'row', flex:1,margin:10, marginLeft:10 }}>
   
   

    <TouchableOpacity style={{marginLeft:20, backgroundColor:'red',padding:2, borderRadius:5}} onPress={()=>setModalVisble(true)}>
      <Text style={{color:'white'}}>
       catch
      </Text>

    </TouchableOpacity>

  {/* <Modal
  animationType='slide'
  transparent={true}
  visible={modalVisible}
  onRequestClose={()=>setModalVisble(false)}
  >
    <View style={{flex:1, justifyContent:'center', padding:10}}>
    <View style={{ backgroundColor:'lightgreen',flex:0.3, margin:10, borderRadius:15,  }}>
      
    <TextInput
            value={task}
            onChangeText={(text) => setTask(text)}
            placeholder="Enter task" placeholderTextColor={'grey'} 
            style={{ marginBottom: 10,margin:5 , borderWidth:1, borderRadius:10, borderColor:'grey', color:'black', backgroundColor:'white'}}
          />
          <TouchableOpacity style={{height:50,width:'95%', borderWidth:1, borderColor:'grey',borderRadius:10 ,justifyContent:'center', backgroundColor:'white', alignSelf:'center'}}
   onPress={showTimePicker}>
    <Text style={{color:'black'}}>
        Select Time : {selectedTime ?  selectedTime.toLocaleTimeString() : 'Not Selected'}
    </Text>
   </TouchableOpacity>

   
<TouchableOpacity style={{height:50,width:'95%',borderRadius:10 ,justifyContent:'center', backgroundColor:'white', alignSelf:'center', margin:5, borderWidth:1, borderColor:'grey'}}
   onPress={showDatePicker}>
    <Text style={{color:'black'}}>
        Select Date: {selectedDate ?  selectedDate.toDateString() : 'Not Selected'}
    </Text>
   </TouchableOpacity>
        
          <Button title="Cancel" onPress={() => setModalVisble(false)} />
          <Button title='Update' onPress={update}/>

          <DateTimePicker
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
        onChange={(val)=>console.log(val)}
        
      />

<DateTimePicker
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
        onChange={(val)=>console.log(val)}
        
      />

          </View>

         
    </View>


  </Modal> */}

  </View>
)
}}

/>

</View>


    </View>

)

}



export default App

const styles = StyleSheet.create({})