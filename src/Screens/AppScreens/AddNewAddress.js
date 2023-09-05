import { SafeAreaView,View, Text,StyleSheet } from 'react-native'
import React from 'react'
import BackButton from '../../component/BackButton'
import {height, width} from 'react-native-dimension';

export default function AddNewAddress(props) {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.searchengine}>
      <BackButton
        onPress={() => props.navigation.goBack()}
        heading={'Add New Address'}
      />
    </View>
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
      marginTop: width(8),
    },
})