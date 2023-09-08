import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import whatsapp from '../../Assest/Images/whatsapp.png';
import www from '../../Assest/Images/world-wide-web.png';
import customercare from '../../Assest/Images/customer-care.png';
import {height, width} from 'react-native-dimension';
import TextMedium from '../../component/TextMedium';

export default function Contactus() {
  const Data = [
    {
      id: 1,
      image: customercare,
      name: 'Customer Service',
    },
    {
      id: 2,
      image: whatsapp,
      name: 'WhatsApp',
    },
    {
      id: 3,
      image: www,
      name: 'Website',
    },
  ];
  const renderItem = ({item}) => {
    const handleItemPress = () => {
      switch (item.name) {
        case 'Customer Service':
          Alert.alert('Customer Service');
          break;
        case 'WhatsApp':
          Alert.alert('WhatsApp');
          break;
        case 'Website':
          Alert.alert('Website');
          break;
        default:
      }
    };

    return (
      <TouchableOpacity style={styles.btncontainer} onPress={handleItemPress}>
        <Image source={item.image} style={styles.iconss} />
        <TextMedium fontSize={16} color={'#666666'} text={item.name} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  iconss: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  btncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: width(2),
    backgroundColor: '#fff',
    elevation: 5,
    marginVertical: width(2),
    borderRadius: 10,
  },
});
