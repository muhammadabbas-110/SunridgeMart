import {
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {height, width} from 'react-native-dimension';
import noitemicon from '../../Assest/Images/noitem.png';
import TextRegular from '../../component/TextRegular';
import cookingoil from '../../Assest/Images/oil-Cookioil-box-removebg-preview.png';
import basmati from '../../Assest/Images/premium-basmati-rice-1kg-removebg-preview.png';
import maida from '../../Assest/Images/maida-1kg-removebg-preview.png';
import atta from '../../Assest/Images/Atta-Fortified-removebg-preview.png';
import TextMedium from '../../component/TextMedium';
import TextBold from '../../component/TextBold';

export default function Active(props) {
  const data = [
    {
      id: 1,
      name: 'Sunridge Maida 1 Kg',
      price: 'PKR 168',
      image: maida,
    },
    {
      id: 2,
      name: 'Sunridge Fortified Chakki Atta 5 Kg',
      price: 'PKR 792',
      image: atta,
    },
    {
      id: 3,
      name: 'Premium Basmati Rice 1 Kg',
      price: 'PKR 432',
      image: basmati,
    },
    {
      id: 4,
      name: 'Dastak Cooking Oil Pouch Carton 1 X 5 Lt',
      price: 'PKR 2000',
      image: cookingoil,
    },
   
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.cartcontainer}>
        <View style={styles.firstsection}>
          <View style={styles.itemimagecontainer}>
            <Image source={item.image} style={styles.itemimage} />
          </View>
          <View style={styles.textview}>
            <TextMedium color={'#333333'} fontSize={15} text={item.name} />
            <View style={{height: 7}} />
            <TextBold color={'#FF2A00'} fontSize={18} text={item.price} />
          </View>
        </View>

        <View style={styles.btncontainer}>
          <TouchableOpacity style={styles.colorbtn}>
            <TextRegular color={'#fff'} fontSize={10} text={'TRACK ORDER'} />
          </TouchableOpacity>
          <View style={styles.whitebtn}>
            <TextMedium color={'#666666'} fontSize={8} text={'IN DELEVERY'} />
          </View>
        </View>
      </View>
    );
  };
  if (data.length === 0) {
    return (
      <View style={styles.container}>
        <Image source={noitemicon} style={styles.imagestyle} />
        <View style={styles.textcontainer}>
          <TextMedium
            fontSize={14}
            color={'#333333'}
            textAlign={'center'}
            text={
              "You Don't Have An Order Yet You Dontt Have An Active Order This Time"
            }
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  imagestyle: {
    resizeMode: 'contain',
    height: height(40),
    width: width(100),
  },
  textcontainer: {
    width: width(70),
  },

  cartcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    width: width(96),
    alignSelf: 'center',
    marginVertical: 5,
  },
  firstsection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  itemimagecontainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 7,
    elevation: 2,
  },
  itemimage: {
    height: height(15),
    width: width(29),
    resizeMode: 'contain',
  },
  textview: {
    flexDirection: 'column',
    width: width(32),
    margin: 8,
  },
  btncontainer: {
    marginHorizontal: 5,
  },
  colorbtn: {
    backgroundColor: '#FF2A00',
    padding: 10,
    borderRadius: 7,
    alignItems: 'center',
    marginVertical: width(3),
  },
  whitebtn: {
    borderWidth: 1,
    borderColor: '#666666',
    padding: 5,
    borderRadius: 5,
    marginVertical: width(3),
    alignItems: 'center',
  },
});
