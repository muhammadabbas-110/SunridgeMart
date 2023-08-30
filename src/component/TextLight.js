import { View, Text } from 'react-native'
import React from 'react'
import fonts from '../Assest/Fonts'

export default function TextLight(props) {
  return (
    <View style={{ elevation: 10, }}>
    <Text
        numberOfLines={props.numberOfLines}
        style={{

            backgroundColor: props.backgroundColor,
            textDecorationLine: props.textDecorationLine,
            textDecorationStyle: props.textDecorationStyle,
            fontSize: props.fontSize ? props.fontSize : 20,
            color: props.fontColor,
            width: props.fontWidth,
            height: props.fontHeigth,
            marginHorizontal: props.marginHorizontal,
            marginVertical: props.marginVertical ,
            alignSelf: props.alignSelf,
            marginTop: props.marginTop,
            alignItems: props.alignItems,
            fontFamily: props.fontFamily ? props.fontFamily : fonts.poppins.light,
            color: props.color ? props.color : 'black'

        }}
    >{props.text}</Text>
</View>
  )
}