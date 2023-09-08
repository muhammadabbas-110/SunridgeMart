import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { height } from 'react-native-dimension';
import Active from './Active';
import Compeleted from './Compeleted';




const Tab = createMaterialTopTabNavigator();

export default function MyOrderTab() {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#FF2A00',
      inactiveTintColor: '#000',
      indicatorStyle: {
        backgroundColor: '#FF2A00',

      },
      style: {
        backgroundColor: '#fff',
        // marginTop:height(3)
      },
      labelStyle: { fontSize: 14, fontWeight: "500" },

    }}>

      <Tab.Screen name="Active" component={Active} />
      <Tab.Screen name="Compeleted" component={Compeleted} />

    </Tab.Navigator>
  );
}


