import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {height, width} from 'react-native-dimension';
import TextRegular from '../../component/TextRegular';
import maida from '../../Assest/Images/maida-1kg-removebg-preview.png';
import TextMedium from '../../component/TextMedium';
import TextBold from '../../component/TextBold';
import BackButton from '../../component/BackButton';
import ordercar from '../../Assest/Images/ordercar.png';
import box from '../../Assest/Images/box.png';
import order from '../../Assest/Images/doneparcel.png';
import packageicon from '../../Assest/Images/package.png';
import check from '../../Assest/Images/check.png';
import doted from '../../Assest/Images/doted.png';

export default function TrackOrder(props, status) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.searchengine}>
        <BackButton
          onPress={() => props.navigation.goBack()}
          heading={'Track Order'}
        />
      </View>
      <View style={styles.cartcontainer}>
        <View style={styles.firstsection}>
          <View style={styles.itemimagecontainer}>
            <Image source={maida} style={styles.itemimage} />
          </View>
          <View style={styles.textview}>
            <TextMedium
              color={'#333333'}
              fontSize={15}
              text={'Sunridge Maida 1 Kg'}
            />
            <View style={{height: 7}} />
            <TextBold color={'#FF2A00'} fontSize={18} text={'PKR 168'} />
          </View>
        </View>
      </View>
      <View style={styles.containericons}>
        <Image source={box} style={styles.iconstyle} />
        <Image source={ordercar} style={styles.iconstyle} />
        <Image source={packageicon} style={styles.iconstyle} />
        <Image source={order} style={styles.iconstyle} />
      </View>
      <View style={styles.tickcontainer}>
        <Image source={check} style={styles.tickicon} />
        <View style={styles.dottedline} />
        <Image source={check} style={styles.tickicon} />
        <View style={styles.dottedline} />

        <Image source={check} style={styles.tickicon} />
        <View style={styles.dottedline} />

        <Image source={check} style={styles.tickicon} />
      </View>
      <View style={{alignItems: 'center', marginVertical: width(3)}}>
        <TextMedium
          fontSize={20}
          color={'#333333'}
          text={'Packet In Delevery'}
        />
      </View>
      <View style={styles.verticalLine} />
      <View style={styles.spacing}>
        <TextMedium
          fontSize={20}
          color={'#333333'}
          text={'Order Status Details'}
        />
        <View style={styles.detailcontainer}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Image source={doted} style={styles.tickicon} />
            <View style={styles.innerspace}>
              <TextMedium
                color={'#666666'}
                fontSize={15}
                text={'Order In Transit - Sep 03'}
              />
              <TextRegular
                color={'#666666'}
                fontSize={12}
                text={'32 Manchester Ave. Ringgold .GA 4589'}
              />
            </View>
          </View>

          <TextRegular color={'#666666'} fontSize={9} text={'15:30 PM'} />
        </View>
        <View style={styles.detailcontainer}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Image source={doted} style={styles.tickicon} />
            <View style={styles.innerspace}>
              <TextMedium
                color={'#666666'}
                fontSize={15}
                text={'Order In Transit - Sep 03'}
              />
              <TextRegular
                color={'#666666'}
                fontSize={12}
                text={'32 Manchester Ave. Ringgold .GA 4589'}
              />
            </View>
          </View>

          <TextRegular color={'#666666'} fontSize={9} text={'15:30 PM'} />
        </View>
        <View style={styles.detailcontainer}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Image source={doted} style={styles.tickicon} />
            <View style={styles.innerspace}>
              <TextMedium
                color={'#666666'}
                fontSize={15}
                text={'Order In Transit - Sep 03'}
              />
              <TextRegular
                color={'#666666'}
                fontSize={12}
                text={'32 Manchester Ave. Ringgold .GA 4589'}
              />
            </View>
          </View>

          <TextRegular color={'#666666'} fontSize={9} text={'15:30 PM'} />
        </View>
        <View style={styles.detailcontainer}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Image source={doted} style={styles.tickicon} />
            <View style={styles.innerspace}>
              <TextMedium
                color={'#666666'}
                fontSize={15}
                text={'Order In Transit - Sep 03'}
              />
              <TextRegular
                color={'#666666'}
                fontSize={12}
                text={'32 Manchester Ave. Ringgold .GA 4589'}
              />
            </View>
          </View>

          <TextRegular color={'#666666'} fontSize={9} text={'15:30 PM'} />
        </View>
        <View style={styles.detailcontainer}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Image source={doted} style={styles.tickicon} />
            <View style={styles.innerspace}>
              <TextMedium
                color={'#666666'}
                fontSize={15}
                text={'Order In Transit - Sep 03'}
              />
              <TextRegular
                color={'#666666'}
                fontSize={12}
                text={'32 Manchester Ave. Ringgold .GA 4589'}
              />
            </View>
          </View>

          <TextRegular color={'#666666'} fontSize={9} text={'15:30 PM'} />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  searchengine: {
    margin: 10,
    marginTop: width(8),
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
  containericons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: width(3),
  },
  iconstyle: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  tickcontainer: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: width(3),
  },
  tickicon: {
    height: 13,
    width: 13,
    resizeMode: 'contain',
  },
  dottedline: {
    borderColor: '#333333',
    borderStyle: 'dashed',
    width: width(13),
    borderBottomWidth: 1,
    marginHorizontal: width(3),
  },
  verticalLine: {
    borderBottomWidth: 1,
    borderColor: '#707070',
  },
  spacing: {
    marginHorizontal: width(3),
    marginVertical: width(3),
  },
  detailcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  innerspace: {
    marginHorizontal: width(3),
  },
});
