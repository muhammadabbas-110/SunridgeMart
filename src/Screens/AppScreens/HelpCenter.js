import { View, SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import BackButton from '../../component/BackButton'
import {height, width} from 'react-native-dimension';
import HelpCenterTabs from './HelpCenterTabs';

export default function HelpCenter(props) {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.searchengine}>
      <BackButton 
        onPress={() => props.navigation.goBack()}
        heading={'Help Center'}
      />
    </View>
    <HelpCenterTabs/>
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