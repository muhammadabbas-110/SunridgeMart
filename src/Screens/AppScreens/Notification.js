import { View, StyleSheet } from 'react-native'
import React from 'react'
import BackButton from '../../component/BackButton'
import { height, width } from 'react-native-dimension';

export default function Notification() {
  return (
    <View style={styles.searchengine}>
    <BackButton
      onPress={() => props.navigation.goBack()}
      heading={'My Notification'}
    />
  </View>
  )
}
const styles = StyleSheet.create({
    searchengine:{
        margin: 10,
        marginTop: width(8),
    }
})