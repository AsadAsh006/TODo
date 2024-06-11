import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, Modal, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import Camera from '../../../components/Camera';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputText from '../../../components/InputText';
import DatePicker from 'react-native-date-picker';
import CustomButton from '../../../components/CustomButton';
import { firebase } from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState('');
  const [time, setSelectedTime] = useState(new Date());
  const [date, setSelectedDate] = useState(new Date());
  const [openTime, setOpenTime] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);  // State to store the current item being updated
const [name, setName]=useState('')
  const handleDateSelection = (newDate) => {
    setSelectedDate(newDate);
    setOpen(false);
  };

  const handleTimeSelection = (newTime) => {
    setSelectedTime(newTime);
    setOpenTime(false);
  };

  useEffect(() => {
    loadUserName()
    const userData = async () => {
      const users = await firestore().collection('Users').get();
      const NewUsers = users.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setData(NewUsers);
      return NewUsers;
    };

    userData();
  }, []);

  const UpdateData = () => {
    if (!currentItem) return;  // Ensure that there is a current item selected for update

    const combinedDateTime = new Date(date);
    combinedDateTime.setHours(time.getHours());
    combinedDateTime.setMinutes(time.getMinutes());

    const firestoreTimestamp = firebase.firestore.Timestamp.fromDate(combinedDateTime);

    firestore()
      .collection('Users')
      .doc(currentItem.id)
      .update({
        Time: firestoreTimestamp.toDate().toLocaleString(),
        New: task,
      })
      .then(() => {
        console.log('User updated!');
        setModalVisible(false);  // Close the modal after updating
      });
  };

  const Delete = (id) => {
    firestore()
      .collection('Users')
      .doc(id)
      .delete()
      .then(() => {
        console.log('User deleted!');
      });
  };


  const loadUserName = async () => {
    try {
      const savedName = await AsyncStorage.getItem('names');
      if (savedName !== null) {
        setName(savedName);
      }
    } catch (error) {
      console.error('Error loading name:', error);
    }
  };
  
  return (
    <View style={{ flex: 1, backgroundColor: 'whitesmoke', justifyContent: 'space-around' }}>
      <View style={{ justifyContent: 'space-around' }}>
        <Image source={require('../Images/12.png')} style={{ position: 'absolute' }} />
        <Image source={require('../Images/tr.png')} style={{ width: '100%' }} />
        <View style={{ alignItems: 'center', position: 'absolute', justifyContent: "center", alignSelf: 'center', borderRadius: 75, height: 150, width: 150 }}>
          <Camera />
        </View>
        <Text style={{ alignSelf: 'center', fontSize: 23, color: 'black', fontWeight: '500', justifyContent: "center", position: 'absolute' }}>
          Welcome {name}
        </Text>
      </View>
      <Image source={require('../Images/cy.png')} style={{ alignSelf: 'center', justifyContent: 'center', margin: 5 }} />
      <Text style={{ fontWeight: '500', color: 'black', fontSize: 20 }}>
        Todo Tasks.
      </Text>
      <View style={{ height: '25%', backgroundColor: 'white', margin: 10, borderRadius: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Add')} style={{ alignItems: 'flex-end', margin: 20 }}>
          <AntDesign name={'pluscircle'} color={'black'} size={30} />
        </TouchableOpacity>
        <FlatList
          data={data}
          pagingEnabled
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: 'row', flex: 1, marginLeft: 10, justifyContent: 'space-around', alignItems: 'center' }}>
                <Text style={{ color: 'white', backgroundColor: 'cadetblue', width: '25%', alignSelf: "center", textAlign: 'center', borderRadius: 10 }}>{item.New}</Text>
                <Text style={{ marginLeft: 20, color: 'black', fontSize: 13, marginRight: 7 }}>{item.Time}</Text>
                <CustomButton Height={20} Width={50} ButtonTitle={"Delete"} TextSize={10} bRadius={10} Margin={0} action={() => Delete(item.id)} />
                <CustomButton Height={20} Width={50} ButtonTitle={"Update"} TextSize={10} bRadius={10} Margin={0} action={() => { setCurrentItem(item); setModalVisible(true); }} />
              </View>
            );
          }}
        />
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={{ flex: 1, backgroundColor: 'rgba(50,50,50,0.2)', justifyContent: 'center', padding: 20 }}>
            <View style={{ flex: 0.45, backgroundColor: 'ghostwhite', borderRadius: 10 }}>
              <InputText title={'Enter Task'} state={setTask} val={task} />
              <TouchableOpacity style={styles.timePicker} onPress={() => setOpenTime(true)}>
                <Text style={styles.timePickerText}>Selected Time: {time.toLocaleTimeString()}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.datePicker} onPress={() => setOpen(true)}>
                <Text style={styles.datePickerText}>Selected Date: {date.toLocaleDateString()}</Text>
              </TouchableOpacity>
              <CustomButton ButtonTitle={'Update'} Width={'40%'} bRadius={20} action={UpdateData} />
              <CustomButton ButtonTitle={'Cancel'} Width={'40%'} bRadius={20} action={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
        <DatePicker
          modal
          mode='date'
          open={open}
          date={date}
          timeZoneOffsetInMinutes={new Date().getTimezoneOffset()}
          is24hourSource="locale"
          onDateChange={handleDateSelection}
          onConfirm={handleDateSelection}
          onCancel={() => setOpen(false)}
        />
        <DatePicker
          modal
          mode='time'
          open={openTime}
          date={time}
          is24hourSource="locale"
          onDateChange={handleTimeSelection}
          onConfirm={handleTimeSelection}
          onCancel={() => setOpenTime(false)}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  newButton: {
    alignSelf: 'center',
    height: 37,
    width: '37%',
    backgroundColor: 'teal',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 5
  },
  newText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center'
  },
  timePicker: {
    height: 50,
    width: '90%',
    backgroundColor: "white",
    borderColor: "grey",
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: "center",
    margin: 10
  },
  timePickerText: {
    color: "black",
    fontSize: 15,
    marginLeft: 10
  },
  datePicker: {
    height: 50,
    width: '90%',
    backgroundColor: "white",
    borderColor: "grey",
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: "center",
    margin: 10
  },
  datePickerText: {
    color: "black",
    fontSize: 15,
    marginLeft: 10
  }
});
