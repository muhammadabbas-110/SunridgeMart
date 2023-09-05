import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';
import {height, width} from 'react-native-dimension';
import BackButton from '../../component/BackButton';
import TextMedium from '../../component/TextMedium';
import TextBold from '../../component/TextBold';
import locationicon from '../../Assest/Images/location.png';
import edit from '../../Assest/Images/edit.png';
import cookingoil from '../../Assest/Images/oil-Cookioil-box-removebg-preview.png';
import basmati from '../../Assest/Images/premium-basmati-rice-1kg-removebg-preview.png';
import maida from '../../Assest/Images/maida-1kg-removebg-preview.png';
import atta from '../../Assest/Images/Atta-Fortified-removebg-preview.png';
import car from '../../Assest/Images/car.png';
import arrow from '../../Assest/Images/down-arrow.png';
import CustomTextinput from '../../component/CustomTextinput';
import plus from '../../Assest/Images/groupplus.png';
import promocode from '../../Assest/Images/promo-code.png';
import CustomButton from '../../component/CustomButton';

export default function CheckOut(props) {
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

  const renderItems = () => {
    return data.map(item => (
      <View style={styles.cartcontainer} key={item.id}>
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
        <View style={styles.number}>
          <TextMedium fontSize={14} color={'#666666'} text={'2'} />
        </View>
        <View></View>
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchengine}>
          <BackButton
            onPress={() => props.navigation.goBack()}
            heading={'My Checkout'}
          />
          <View style={styles.locationcontainer}>
            <View style={{flexDirection: 'row'}}>
              <Image source={locationicon} style={styles.iconlocation} />
              <View style={styles.textcontainer}>
                <TextMedium fontSize={15} color={'#333333'} text={'Home'} />
                <TextBold
                  fontSize={12}
                  color={'#333333'}
                  text={
                    'Shop # 6, 7 & 8, Tai Roshan Residency P.E.C.H.S. Block 2,'
                  }
                />
              </View>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate("ShippingAddress")}>
              <Image source={edit} style={styles.editicon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.vericalline} />
        <View style={styles.heading}>
          <TextMedium fontSize={20} color={'#333333'} text={'Order List'} />
          {renderItems()}
        </View>
        <View style={styles.vericalline} />
        <View style={styles.heading}>
          <TextMedium
            fontSize={20}
            color={'#333333'}
            text={'Choose Shipping'}
          />
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('ShippingType');
            }}
            style={styles.touchablebtnpromocode}>
            <View style={styles.rowdataa}>
              <Image source={car} style={styles.carimg} />
              <TextMedium marginHorizontal={5} text={'Choose Shipping Type '} />
            </View>
            <Image source={arrow} style={styles.standardicon} />
          </TouchableOpacity>
        </View>
        <View style={styles.vericalline} />
        <View style={styles.heading}>
          <TextMedium fontSize={20} color={'#333333'} text={'Promo Code'} />
          <View style={styles.rowdataa}>
            <View style={styles.textinputcontainer}>
              <CustomTextinput
                image={promocode}
                placeholder={'Enter Promo Code'}
              />
            </View>
            <TouchableOpacity>
              <Image source={plus} style={styles.standardicon} />
            </TouchableOpacity>
          </View>
          <View style={styles.billingtype}>
            <TextMedium color={'#333333'} fontSize={15} text={'Amount'} />
            <TextMedium color={'#333333'} fontSize={15} text={'645 PKR'} />
          </View>
          <View style={styles.billingtype}>
            <TextMedium color={'#333333'} fontSize={15} text={'Shipping'} />
            <TextMedium color={'#333333'} fontSize={15} text={'700 PKR'} />
          </View>
        </View>
        <View style={styles.vericalline} />
        <View style={styles.heading}>
          <View style={styles.billingtype}>
            <TextMedium color={'#333333'} fontSize={15} text={'Total'} />
            <TextMedium color={'#333333'} fontSize={15} text={'1500 PKR'} />
          </View>
          <View style={{alignItems: 'center'}}>
            <CustomButton
              onPress={() => {
                props.navigation.navigate('');
              }}
              text={'Continue to payment'}
            />
          </View>
        </View>
      </ScrollView>
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
  locationcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: width(3),
    marginHorizontal: width(2),
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 10,
    padding: 10,
    borderRadius: 10,
  },
  iconlocation: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
  textcontainer: {
    width: width(40),
    marginHorizontal: 10,
  },
  editicon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
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
    width: width(90),
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

  deletconatiner: {
    marginBottom: width(5),
    marginRight: width(4),
  },
  delicon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  number: {
    borderWidth: 1,
    borderColor: '#666666',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  vericalline: {
    borderBottomWidth: 1,
    borderColor: '#D6D6D6',
  },
  heading: {
    marginHorizontal: width(3),
    marginVertical: width(3),
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
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  textinputcontainer: {
    width: width(84),
    alignItems: 'center',
  },
  billingtype: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
