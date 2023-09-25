import React, {useState} from 'react';
import {height,width} from 'react-native-dimension';
import DropDownPicker from 'react-native-dropdown-picker';

export default function CustomDropDown(props) {
  const [Opendropdown, setOpendropdown] = useState(false);
  const [items, setItems] = useState([
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ]);
  return (
    <DropDownPicker
      dropDownContainerStyle={{
        width: '95%',
        zIndex:10,
        alignSelf: 'center',
        borderWidth: 0,
        elevation: 5,
        zIndex: 100,
      }}
      placeholderStyle={{color: '#000',opacity:0.5, fontSize: 14,left:width(6)}}
      selectedItemContainerStyle={{backgroundColor:"#e5e5e5"}}
      open={Opendropdown}
      value={props.value}
      items={items}
      setOpen={setOpendropdown}
      setValue={props.setValue}
      setItems={setItems}
      style={{
        backgroundColor: '#fff',
        borderWidth: 0,
        width: '95%',
        alignSelf: 'center',
        elevation: 5,
        borderRadius: 10,
        height: height(8),
      }}
      placeholder={'Gender'}
      ListModeInterface={'SCROLLVIEW'}
    />
  );
}
