
/*
Name: Emmy Ali
Student Number: A01004664
Course: MDIA 4295 App Development Strategy 2
*/

import {NavigationContainer} from '@react-navigation/native'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'; 
import AlphaScreen from './screens/AlphaScreen'; 
import BetaScreen from './screens/BetaScreen'; 

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
       name="Home"
       component={HomeScreen}
      />
       <Stack.Screen
       name="Alpha"
       component={AlphaScreen}
      />
       <Stack.Screen
       name="Beta"
       component={BetaScreen}
      />

  </Stack.Navigator>
</NavigationContainer>
  );
}


