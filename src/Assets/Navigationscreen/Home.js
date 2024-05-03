import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import React from 'react'
import CustomButton from '../../../components/CustomButton'

const Home = ({navigation}) => {
    const handleStarted=()=>{
        navigation.navigate('Login')
    }
    return (
        <><View style={{ flex: 1, backgroundColor: 'whitesmoke' }}>

            <Image source={require('../Images/12.png')}
                style={{}}
            />
            <Image source={require('../Images/Ca.png')}
                style={{ alignSelf: 'center', bottom: 15, }}
            />

            <View style={{ left: 7 }}>
                <Text style={{ fontSize: 25, fontWeight: '500', color: 'black', alignSelf: 'center', justifyContent: 'center' }}>
                    Get things done with TODo
                </Text>
            </View>

            <View style={{ alignItems: 'center', margin:13 }}>
                <Text style={{ fontSize: 16, fontWeight: '400' , color:'black'}}>Welcome to TODo. To continue, Click on  </Text>

                <Text style={{ fontSize: 16, fontWeight: '400', color:'black'}}>'Get Started' button to start your experience </Text>

                <Text style={{ fontSize: 16, fontWeight:'400' ,color:'black'}}>in TODo. First you have to create an account.</Text>

            </View  >
            <View style={{justifyContent:'space-around'}}>
            <CustomButton ButtonTitle={'Get Started'} action={handleStarted}/></View>
        </View>
       
        </>





    )

}

export default Home

const styles = StyleSheet.create({})


