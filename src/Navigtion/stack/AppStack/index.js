import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from '../../../Screens/AppScreens/HomeScreen';
import myTab from '../../../Screens/BottomTab.js';
import ProductDetail from '../../../Screens/AppScreens/ProductDetail';
import CheckOut from '../../../Screens/AppScreens/CheckOut';
import ShippingType from '../../../Screens/AppScreens/ShippingType';
import ShippingAddress from '../../../Screens/AppScreens/ShippingAddress';
import AddNewAddress from '../../../Screens/AppScreens/AddNewAddress';
import AddPromo from '../../../Screens/AppScreens/AddPromo';
import PaymentMethod from '../../../Screens/AppScreens/PaymentMethod';
import EditProfile from '../../../Screens/AppScreens/EditProfile';
import PrivacyPolicy from '../../../Screens/AppScreens/PrivacyPolicy';
import HelpCenter from '../../../Screens/AppScreens/HelpCenter';
import AdminChat from '../../../Screens/AppScreens/AdminChat';
import Notification from '../../../Screens/AppScreens/Notification';
import WishList from '../../../Screens/AppScreens/WishList';
import AllProductList from '../../../Screens/AppScreens/AllProductList';
import TrackOrder from '../../../Screens/AppScreens/TrackOrder';
import SignupSocial from '../../../Screens/AuthScreens/SignupSocial';
import LoginScreen from '../../../Screens/AuthScreens/LoginScreen';
import Signupscreen from '../../../Screens/AuthScreens/Signupscreen';
import ForgotPasswordSelector from '../../../Screens/AuthScreens/ForgotPasswordSelector';
import OtpScreen from '../../../Screens/AuthScreens/OtpScreen';
import NewPasswordScreen from '../../../Screens/AuthScreens/NewPasswordScreen';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="myTab"
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
      <Stack.Screen
        name="CheckOut"
        component={CheckOut}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="ShippingType"
        component={ShippingType}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="ShippingAddress"
        component={ShippingAddress}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="AddNewAddress"
        component={AddNewAddress}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="AddPromo"
        component={AddPromo}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="HelpCenter"
        component={HelpCenter}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="AdminChat"
        component={AdminChat}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="WishList"
        component={WishList}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="AllProductList"
        component={AllProductList}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="TrackOrder"
        component={TrackOrder}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
}
