import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {AppContext} from '../../context';
import AppStack from './AppStack';
import AuthStack from './AuthStack/AuthStack';
import { useDispatch, useSelector } from 'react-redux';
import { authUser,authSelector,setWithoutLoginUser} from '../../redux/slices/authReducer';
import { customerRegistrationService } from '../../Api/Authentication';
import ApiManager from '../../Api/ApiManager';

const RootNavigation = () => {
  const Stack = createStackNavigator();
  const user = useSelector(authUser);
  const isLoggedIn=useSelector(authSelector).isLoggedIn;
  const dispatch=useDispatch();
 // const customerId=useSelector(authSelector).customerId
  const [isLoading, setIsLoading] = useState(true);
useEffect(()=>{
  getUserDetail();
}
,[])
 const getUserDetail=async()=>{
 const customerId=await AsyncStorage.getItem('customerID')
 console.log(customerId)
  if(customerId==null){
  ApiManager.fetch(customerRegistrationService,{},onResponse,onError)}
  else{
    setIsLoading(false);
  }
 }
 const onResponse=async(response)=>{
  await AsyncStorage.setItem('customerID', response.data?.data?.customerId);
  setIsLoading(false)
}
const onError=(error)=>{
  
  console.log('error',error?.data)

}

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

 

  const renderStack = () => {
      return (
          <AppStack  />
      );
    }

  return renderStack();
};

export default RootNavigation;
