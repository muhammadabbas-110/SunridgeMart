import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
} from 'react-native';
import CustomTextinput from '../../component/CustomTextinput';
import searchicon from '../../Assest/Images/magnifying-glass.png';
import {height, width} from 'react-native-dimension';
import BackButton from '../../component/BackButton';
import TextMedium from '../../component/TextMedium';
import atta from '../../Assest/Images/Atta-Fortified-removebg-preview.png';
import TextBold from '../../component/TextBold';
import deleteicon from '../../Assest/Images/delete.png';
import add from '../../Assest/Images/add.png';
import sub from '../../Assest/Images/sub.png';
import cookingoil from '../../Assest/Images/oil-Cookioil-box-removebg-preview.png';
import basmati from '../../Assest/Images/premium-basmati-rice-1kg-removebg-preview.png';
import maida from '../../Assest/Images/maida-1kg-removebg-preview.png';

export default function Cart(props) {
  const [itemCounts, setItemCounts] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });

  const incrementCount = itemId => {
    setItemCounts(prevCounts => ({
      ...prevCounts,
      [itemId]: prevCounts[itemId] + 1,
    }));
  };

  const decrementCount = itemId => {
    if (itemCounts[itemId] > 0) {
      setItemCounts(prevCounts => ({
        ...prevCounts,
        [itemId]: prevCounts[itemId] - 1,
      }));
    }
  };

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

  const renderItem = ({item}) => (
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
      <View style={styles.secoundsection}>
        <TouchableOpacity
          onPress={() => decrementCount(item.id)}
          style={styles.deletconatiner}>
          <Image source={deleteicon} style={styles.delicon} />
        </TouchableOpacity>
        <View style={styles.countercontainer}>
          <TouchableOpacity
            onPress={() => decrementCount(item.id)}
            style={styles.innerspacecounter}>
            <Image source={sub} style={styles.imgcounter} />
          </TouchableOpacity>
          <Text style={styles.count}>{itemCounts[item.id]}</Text>
          <TouchableOpacity
            onPress={() => incrementCount(item.id)}
            style={styles.innerspacecounter}>
            <Image source={add} style={styles.imgcounter} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchengine}>
        <BackButton
          onPress={() => props.navigation.goBack()}
          heading={'My Cart'}
        />
      </View>
      <CustomTextinput image={searchicon} placeholder={'Search'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
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
  itemtotalcontainer: {
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#666666',
    padding: 2,
    borderRadius: 4,
  },
  bottomcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width(7),
  },
  countercontainer: {
    right: width(2),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#666666',
    padding: 6,
  },
  innerspacecounter: {
    paddingHorizontal: 9,
    paddingVertical: 2,
  },
  imgcounter: {
    resizeMode: 'contain',
    height: 15,
    width: 15,
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
  secoundsection: {
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  deletconatiner: {
    marginBottom: width(5),
    marginRight: width(4),
  },
  delicon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});
