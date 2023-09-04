import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import home from '../../Assest/Images/home.png';
import cart from '../../Assest/Images/bag.png';
import history from '../../Assest/Images/clipboard.png';
import profile from '../../Assest/Images/user.png';
import {
  Image,
} from 'react-native';
import HomeScreen from '../AppScreens/HomeScreen';
import Cart from '../AppScreens/Cart';
import History from '../AppScreens/History';
import Profile from '../AppScreens/Profile';

const Tab = createBottomTabNavigator();

export default function myTab(props) {
  const screenOptions = {
    tabBarHideOnKeyboard: true,
  };

  return (
    <Tab.Navigator
      {...{screenOptions}}
      tabBarOptions={{
        activeTintColor: '#FF2A00',
        inactiveTintColor: '#CBCBCB',
        showLabel: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        screenOption={{}}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={home}
                style={{height: 30, width: 30, resizeMode: 'contain'}}
                tintColor={focused ? '#FF2A00' : '#CBCBCB'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        screenOption={{}}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={cart}
                style={{height: 30, width: 30, resizeMode: 'contain'}}
                tintColor={focused ? '#FF2A00' : '#CBCBCB'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        screenOption={{}}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={history}
                style={{height: 30, width: 30, resizeMode: 'contain'}}
                tintColor={focused ? '#FF2A00' : '#CBCBCB'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        screenOption={{}}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={profile}
                style={{height: 30, width: 30, resizeMode: 'contain'}}
                tintColor={focused ? '#FF2A00' : '#CBCBCB'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
