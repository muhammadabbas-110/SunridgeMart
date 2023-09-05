import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {height, width} from 'react-native-dimension';
import React, {useState} from 'react';
import BackButton from '../../component/BackButton';
import TextMedium from '../../component/TextMedium';
import unslecticon from '../../Assest/Images/unslect.png';
import selctedicon from '../../Assest/Images/selcted.png';
import TextRegular from '../../component/TextRegular';
import CustomButton from '../../component/CustomButton';
import locationicon from '../../Assest/Images/location.png';
export default function ShippingAddress(props) {
  const [data, setData] = useState([
    {
      key: 'Home',
      selected: false,
      des: 'Shop # 6, 7 & 8, Tai Roshan Residency P.E.C.H.S. Block 2,',
      image: locationicon,
    },
    {
      key: 'Office',
      selected: false,
      des: 'Shop # 6, 7 & 8, Tai Roshan Residency P.E.C.H.S. Block 2,',
      image: locationicon,
    },
    {
      key: 'Appartment',
      selected: false,
      des: 'Shop # 6, 7 & 8, Tai Roshan Residency P.E.C.H.S. Block 2,',
      image: locationicon,
    },
    {
      key: 'Parents House',
      selected: false,
      des: 'Shop # 6, 7 & 8, Tai Roshan Residency P.E.C.H.S. Block 2,',
      image: locationicon,
    },
  ]);

  const handleItemPress = itemIndex => {
    const newData = [...data];
    newData.forEach(item => {
      item.selected = false;
    });
    newData[itemIndex].selected = !newData[itemIndex].selected;

    setData(newData);
  };

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => handleItemPress(index)}
      style={styles.touchablebtnpromocode}>
      <View style={styles.rowdataa}>
        <Image source={item.image} style={styles.carimg} />
        <View style={{marginHorizontal: 5, width: width(60)}}>
          <TextMedium color={'#666666'} fontSize={15} text={item.key} />
          <TextRegular color={'#666666'} fontSize={12} text={item.des} />
        </View>
      </View>
      <Image
        source={item.selected ? selctedicon : unslecticon}
        style={styles.standardicon}
      />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchengine}>
        <BackButton
          onPress={() => props.navigation.goBack()}
          heading={'Shipping Address'}
        />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
      <View
        style={styles.rowbutons}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('AddNewAddress');
          }}
          style={styles.touchbtn}>
          <TextMedium color={'#fff'} fontSize={15} text={'ADD NEW ADDRESS'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.touchbtn}>
          <TextMedium color={'#fff'} fontSize={15} text={'APPLY'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchengine: {
    margin: 10,
    marginTop: width(8),
  },
  item: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  touchablebtnpromocode: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 10,
    marginVertical: 5,
    width: width(95),
    alignSelf: 'center',
  },
  rowdataa: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carimg: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  standardicon: {
    marginRight: 5,
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  touchbtn: {
    backgroundColor: '#FF2A00',
    alignItems: 'center',
    padding: 10,
    width: width(45),
    borderRadius: 10,
    marginTop: height(2),
  },
  rowbutons:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
});
