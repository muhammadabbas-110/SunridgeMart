import { View, SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import BackButton from '../../component/BackButton'
import {height, width} from 'react-native-dimension';
import MyOrderTab from './MyOrderTab';

export default function History() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.searchengine}>
      <BackButton 
        onPress={() => props.navigation.goBack()}
        heading={'My Order'}
      />
    </View>
    <MyOrderTab/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    searchengine: {
      margin: 10,
      marginTop: width(9),
    },
})