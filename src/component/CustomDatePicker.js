import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Image,
  View,
  TextInput,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {height, width} from 'react-native-dimension';
import calendar from '../Assest/Images/calendar.png';

export default function CustomDatePicker(props) {
    const [onfocus, Setonfocus] = useState(false);
    const inputRef = useRef(null);

  
  return (
    <View
    style={onfocus ? styles.sectionStyle : styles.searchSectionBlur}>
    {!props?.right &&<Image source={calendar} style={styles.imageStyle} />}
    <TextInput
      ref={inputRef}
      style={[styles.textcontainer,{paddingHorizontal:props?.right?height(3):0}]}
      placeholder="Select a Date"
      underlineColorAndroid="transparent"
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      value={props.value}
    />
        {props.right &&<Image source={calendar} style={styles.imageStyle} />}
  </View>
  )
}
const styles = StyleSheet.create({
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3E3E3',
        borderWidth: 1,
        elevation: 5,
        borderRadius: 10,
        margin: 10,
        height: height(8),
      },
      imageStyle: {
        padding: 10,
        margin: 5,
        marginHorizontal: 10,
        height: 25,
        width: 25,
        resizeMode: 'contain',
        alignItems: 'center',
      },
      textcontainer: {
        flex: 1,
        color: '#000',
        fontSize: 14,
      },
      searchSectionBlur: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        elevation: 5,
        borderRadius: 10,
        margin: 10,
        height: height(8),
      },
})