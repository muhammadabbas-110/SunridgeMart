
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import AppProvider from './src/context';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import RootNavigation from './src/Navigtion/stack';
export default function App() {
  return (
    <>
      
        <Provider store={store}>
      <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
        // hidden={true}

      />
       
          <RootNavigation />
      
      </NavigationContainer>
      </Provider>
    </>
  );
}
