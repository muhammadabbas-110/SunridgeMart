import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Splash from '../../../Screens/AuthScreens/Splash';
import OnBoarding from '../../../Screens/AuthScreens/OnBoarding';
import OnBoarding1 from '../../../Screens/AuthScreens/OnBoarding1';
import OnBoarding2 from '../../../Screens/AuthScreens/OnBoarding2';
import OnBoarding3 from '../../../Screens/AuthScreens/OnBoarding3';
import SignupSocial from '../../../Screens/AuthScreens/SignupSocial';
import LoginScreen from '../../../Screens/AuthScreens/LoginScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="OnBoarding1"
        component={OnBoarding1}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="OnBoarding2"
        component={OnBoarding2}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="OnBoarding3"
        component={OnBoarding3}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="SignupSocial"
        component={SignupSocial}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
        <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />

    </Stack.Navigator>
  );
}
