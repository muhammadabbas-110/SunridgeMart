
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import AppProvider from './src/context';
import RootNavigation from './src/Navigtion/stack';
export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
        // hidden={true}

      />
      <NavigationContainer>
        <AppProvider>
          <RootNavigation />
        </AppProvider>
      </NavigationContainer>
    </>
  );
}
