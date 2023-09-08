import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { height } from 'react-native-dimension';
import Faqs from './Faqs';
import Contactus from './Contactus';




const Tab = createMaterialTopTabNavigator();

export default function HelpCenterTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#FF2A00',
      inactiveTintColor: '#000',
      indicatorStyle: {
        backgroundColor: '#FF2A00',

      },
      style: {
        backgroundColor: '#fff',
      },
      labelStyle: { fontSize: 14, fontWeight: "500" },

    }}>

      <Tab.Screen name="Faqs" component={Faqs} />
      <Tab.Screen name="Contactus" component={Contactus} />

    </Tab.Navigator>
  );
}


