import React, {useState} from 'react';
import {View, TextInput, Image, StyleSheet,TouchableOpacity} from 'react-native';
import {height, width} from 'react-native-dimension';
import InputErrorMessage from "./ErrorMessage";
import Icon from 'react-native-vector-icons/Feather';

export default function CustomTextinput(props) {
  const [onfocus, Setonfocus] = useState(false);
  return (
    <>
    <View style={onfocus ? styles.sectionStyle : styles.searchSectionBlur}>
      {props?.image &&
      <Image source={props.image} style={styles.imageStyle} />
}
      <TextInput
        style={[styles.textcontainer,{paddingHorizontal:props?.image?0:height(3)}]}
        placeholder={props.placeholder}
        underlineColorAndroid="transparent"
        editable={props.editable}
        maxLength={props.maxLength}
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
      {
        props.Password ?
        !props.show ? (
          <TouchableOpacity 
        style={styles.eyeIcon}
          onPress={props.showPress}>
<Icon name="eye" size={25}/>
</TouchableOpacity>
        )
          :(
            <TouchableOpacity
            style={styles.eyeIcon}
             onPress={props.hidePress}>
            <Icon name="eye-off" size={25}/>
            </TouchableOpacity>
          )
        
      :null}
       {props?.imageRight &&
      <Image source={props.imageRight} style={styles.imageStyle} />
}

    </View>
    <InputErrorMessage
    
     value={props.errorMessage} />
    </>
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
  eyeIcon: {
    padding: 10,
    margin: 5,
    marginHorizontal: 10,
    
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
