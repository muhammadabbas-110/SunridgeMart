import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {AppContext} from '../../context';
import AppStack from './AppStack';
import AuthStack from './AuthStack/AuthStack';
import { useDispatch, useSelector } from 'react-redux';
import { authUser,setUser,authSelector,logIn,setLogOut} from '../../redux/slices/authReducer';


const RootNavigation = () => {
  const Stack = createStackNavigator();
  const user = useSelector(authUser);
  const isLoggedIn=useSelector(authSelector).isLoggedIn;
  const dispatch=useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const getUserDetails = async () => {
    try {
      const userData = await AsyncStorage.getItem('isUser');
      console.log('setUser',user);
      if (userData != null) {
        dispatch(setUser(JSON.parse(userData)))
        dispatch(logIn(JSON.parse(userData)))
     
     
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
      dispatch(setUser(userData));
      dispatch(logIn(userData))

    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('isUser');
    dispatch(setUser(null));
    dispatch(setLogOut(null));
  };

  const renderStack = () => {
    if (isLoggedIn) {
      return (
          <AppStack onLogout={handleLogout} />
      );
    } else {
      return (
          <AuthStack onLogin={handleLogin} />
      );
      }
    }

  return renderStack();
};

export default RootNavigation;
