import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {AppContext} from '../../context';
import AppStack from './AppStack';
import AuthStack from './AuthStack/AuthStack';

const RootNavigation = () => {
  const Stack = createStackNavigator();

  const context = useContext(AppContext);
  const {user, setUser} = context;

  const [isLoading, setIsLoading] = useState(true);

  const getUserDetails = async () => {
    try {
      const userData = await AsyncStorage.getItem('isUser');
      if (userData != null) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const handleLogin = async (username, password) => {
    if (username === 'admin' && password === 123) {
      const userData = {username: 'admin'};
      await AsyncStorage.setItem('isUser', JSON.stringify(userData));
      setUser(userData);
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('isUser');
    setUser(null);
  };

  const renderStack = () => {
    if (user) {
      return <AppStack onLogout={handleLogout} />;
    } else {
      return <AuthStack onLogin={handleLogin} />;
    }
  };

  return renderStack();
};

export default RootNavigation;
