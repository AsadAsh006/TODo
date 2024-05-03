import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Assets/Navigationscreen/Home';
import Login from './src/Assets/Navigationscreen/Login' ;
import SignUp from './src/Assets/Navigationscreen/SignUp'
import Add from './src/Assets/Navigationscreen/Add'
import Dashboard from './src/Assets/Navigationscreen/Dashboard'
import CustomButton from './components/CustomButton';
import Camera from './components/Camera';
import Sample from './src/Assets/Navigationscreen/Sample';
import DateTime from './components/DateTime';
const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
<Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Dashboard'>
  <Stack.Screen name='Date' component={DateTime}/>
  <Stack.Screen name='Camera' component={Camera}/>
<Stack.Screen name="Login" component={Login}/>
<Stack.Screen name="Home" component={Home}/>
<Stack.Screen name="SignUp" component={SignUp}/>
<Stack.Screen name="Add" component={Add}/>
<Stack.Screen name='Dashboard' component={Dashboard}/>
<Stack.Screen name='button' component={CustomButton}/>
<Stack.Screen name="Sample" component={Sample}/>


</Stack.Navigator>
    </NavigationContainer>




  );
}

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default App;