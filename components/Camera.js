import { StyleSheet, Text, View, Button, Image, Modal, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker'
import { launchCamera } from 'react-native-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
const Camera = (params) => {
  const [cameraModal, setCameraModal] = useState(false)
  useEffect(() => {
    getImage()
  }, [])

  // const setItem =async ()=>{

  //     const setNewImage = await AsyncStorage.setItem('@Image' ,selectedimage )
  //     setSelectedImage(setNewImage)
  // }    

  const getImage=async()=>{
     const getNewImage = await AsyncStorage.getItem('@image')
     console.log("🚀 ~ getImage ~ getNewImage:", getNewImage)
     setSelectedImage(getNewImage)
  }
  const [selectedimage, setSelectedImage] = useState()
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        AsyncStorage.setItem('@image' , imageUri)
        {setCameraModal(false)}
      }
    });
  };

  handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
      
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        AsyncStorage.setItem('@image' , imageUri)
        {setCameraModal(false)}
        console.log(imageUri);
      }
    });
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 0.5, }}>
      <Modal
        transparent={true}
        visible={cameraModal}
        onRequestClose={() => setCameraModal(false)}
        animationType='slide'
      >
        <Button title="Choose from Device" onPress={openImagePicker} />
        <Button title="Open Camera" onPress={handleCameraLaunch} />

      </Modal>
      <View style={{ backgroundColor: 'white', }}>
        <TouchableOpacity onPress={() => setCameraModal(true)}>
          {selectedimage?
            <Image style={{alignItems:'center',position:'absolute', justifyContent:"center", alignSelf:'center', borderRadius:75, height:150, width:150,backgroundColor:'white', }} source={{ uri: selectedimage }} />
            :
            <MaterialIcon name='add' color={'grey'} size={90} style={{ alignSelf: 'center', }} />

          }
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Camera

const styles = StyleSheet.create({})