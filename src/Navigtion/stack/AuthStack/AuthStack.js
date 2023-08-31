import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Splash from '../../../Screens/AuthScreens/Splash';
import OnBoarding from '../../../Screens/AuthScreens/OnBoarding';
import OnBoarding1 from '../../../Screens/AuthScreens/OnBoarding1';
import OnBoarding2 from '../../../Screens/AuthScreens/OnBoarding2';
import OnBoarding3 from '../../../Screens/AuthScreens/OnBoarding3';
import SignupSocial from '../../../Screens/AuthScreens/SignupSocial';
import LoginScreen from '../../../Screens/AuthScreens/LoginScreen';
import Signupscreen from '../../../Screens/AuthScreens/Signupscreen';
import ForgotPasswordSelector from '../../../Screens/AuthScreens/ForgotPasswordSelector';
import OtpScreen from '../../../Screens/AuthScreens/OtpScreen';
import NewPasswordScreen from '../../../Screens/AuthScreens/NewPasswordScreen';

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
      <Stack.Screen
        name="Signupscreen"
        component={Signupscreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="ForgotPasswordSelector"
        component={ForgotPasswordSelector}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="NewPasswordScreen"
        component={NewPasswordScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
}
