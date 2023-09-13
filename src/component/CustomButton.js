import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import TextMedium from './TextMedium';
import {height, width} from 'react-native-dimension';

export default function CustomButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.touchbtn,props.styles]}>
      <TextMedium color={'#fff'} fontSize={15} text={props.text} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  touchbtn: {
    backgroundColor: '#FF2A00',
    alignItems: 'center',
    padding: 12,
    width: width(60),
    borderRadius: 10,
    marginTop: height(2),
  },
});
