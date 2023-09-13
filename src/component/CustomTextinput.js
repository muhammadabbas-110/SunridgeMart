import React, {useState} from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';

export default function CustomTextinput(props) {
  const [onfocus, Setonfocus] = useState(false);
  return (
    <View style={onfocus ? styles.sectionStyle : styles.searchSectionBlur}>
      {props?.image &&
      <Image source={props.image} style={styles.imageStyle} />
}
      <TextInput
        style={[styles.textcontainer,{paddingHorizontal:props?.image?0:height(3)}]}
        placeholder={props.placeholder}
        underlineColorAndroid="transparent"
        editable={props.editable}
        onFocus={() => {
          Setonfocus(true);
        }}
        onBlur={() => {
          Setonfocus(false);
        }}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        onChangeText={props.onChangeText}
      />
       {props?.imageRight &&
      <Image source={props.imageRight} style={styles.imageStyle} />
}
    </View>
  );
}
const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
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
    borderColor: '#f5f5f5',
    elevation: 5,
    borderRadius: 10,
    margin: 10,
    height: height(8),
  },
});
