import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import TextMedium from './TextMedium'
import {height, width} from 'react-native-dimension';
import backimg from '../Assest/Images/back.png'

export default function BackButton(props) {
  return (
    <View style={{flexDirection: 'row',alignItems:"center"}}>
        <TouchableOpacity>
          <Image source={backimg} style={{resizeMode:'contain',height:height(2),width:width(5)}}/>
        </TouchableOpacity>
        <TextMedium marginHorizontal={20} text={props.heading}/>
      </View>
  )
}