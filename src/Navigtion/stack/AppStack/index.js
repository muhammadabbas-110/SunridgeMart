import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from '../../../Screens/AppScreens/HomeScreen';
import myTab from '../../../Screens/BottomTab.js';
import ProductDetail from '../../../Screens/AppScreens/ProductDetail';
import CheckOut from '../../../Screens/AppScreens/CheckOut';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={myTab}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
         <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
       <Stack.Screen
        name="CheckOut"
        component={CheckOut}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
}
