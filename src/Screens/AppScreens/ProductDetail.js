import {
  FlatList,
  Image,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Platform,
  SafeAreaView, 
} from 'react-native';
import React, { useState,useEffect } from 'react';
import { vh, vw } from '../../constant';
import back from '../../Assest/Images/back.png';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-community/async-storage';
import TextRegular from '../../component/TextRegular';
import TextBold from '../../component/TextBold';
import { height, width } from 'react-native-dimension';
import CustomAlert from '../../component/CustomAlert';
import star from '../../Assest/Images/star-social-favorite-middle-full.png';
import add from '../../Assest/Images/add.png';
import alerticon from '../../Assest/Images/alerticon.png';
import sub from '../../Assest/Images/sub.png';
import Alert from '../../component/Alert';
import cart from '../../Assest/Images/bag.png';
import ApiManager from '../../Api/ApiManager';
import errorgif from '../../Assest/Images/errorgif.json';
import { ProductDetailsService } from '../../Api/ProductDetails';
import { AddtoCartService } from '../../Api/Cart';
export default function ProductDetail(props) {
  const [activeBandIndex, setActiveBandIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [loading,setLoading]=useState(true);
  const [productData,setProductData]=useState()
  const [modalVisible, setModalVisible] = useState(false);
  const [errorVisible,setErrorVisible]=useState(false);
  const [errorMsg,setErrorMsg]=useState('');
const productId=props.route?.params?.id
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const slider = [
    {
      id: 1,
      iamges: require('../../Assest/Images/detailslider.png'),
    },
    {
      id: 2,
      iamges: require('../../Assest/Images/detailslider.png'),
    },
    {
      id: 3,
      iamges: require('../../Assest/Images/detailslider.png'),
    },
  ];
  useEffect(()=>{
    getProductDetail(productId);
  },[])
  const getProductDetail=(productId)=>{
    ApiManager.fetch(ProductDetailsService(productId),{},onProductResponse,onProductError)
    
  }
  const onProductResponse=(response)=>{
    setProductData(response?.data?.data);
 
    setLoading(false)
    
  }
  const onProductError=(error)=>{
    console.log('error',error?.data)
    setLoading(false)
  
  }
  const addToCart=async()=>{
    setLoading(true)
    const customerId=await AsyncStorage.getItem('customerID')

  if(customerId!=null && count>0){
  const data={
    customerId:customerId,
    productId:productId,
    quantity:count
}
    ApiManager.fetch(AddtoCartService(customerId),data,onAddToCartResponse,onAddToCartError)
  }
  
  }
  const onAddToCartResponse=(response)=>{
    setLoading(false)
    setModalVisible(true)
    
    
  }
  const onAddToCartError=(error)=>{
    setErrorVisible(true)
    setErrorMsg(error.message)
    setLoading(false)
  
  }
  const renderHeader = () => {
    return (
      <View style={styles.slidercontainer}>
        <Carousel
          data={slider}
          renderItem={({ item }) => { 
            return <Image style={styles.sliderimage} source={item.iamges} />;
          }}
          sliderWidth={width(100)}
          itemWidth={width(100)}
          hasParallaxImages={true}
          firstItem={activeBandIndex}
          inactiveSlideScale={0.9}
          inactiveSlideOpacity={0.7}
          onSnapToItem={index => {
            setActiveBandIndex(index);
          }}
          // inactiveSlideShift={20}
          containerCustomStyle={{}}
          contentContainerCustomStyle={{}}
          autoplay={false}
        />
        <Pagination
          dotsLength={slider.length}
          activeDotIndex={activeBandIndex}
          containerStyle={styles.Paginationcontainer}
          dotColor={'#000'}
          dotStyle={styles.dotstyle}
          inactiveDotColor={'#e5e5e5'}
          inactiveDotOpacity={0.7}
          inactiveDotScale={1}
        />
        <View style={styles.backbutton}>
          <TouchableOpacity
            style={{}}
            onPress={() => props.navigation.goBack()}>
            <Image
              style={styles.backbtnimg}
              source={back}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderDetails = propss => {
    return (

      <View style={styles.details}>
        <View style={{ marginHorizontal: width(5) }}>
          <TextBold
            color={'#666666'}
            fontSize={18}
            text={productData.name}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: width(5),
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={star} style={styles.star} />
            <View style={styles.itemsubcontainer}>
              <TextRegular fontSize={12} color={'#666666'} text={productData.rating} />
            </View>
            <TextRegular fontSize={12} color={'#666666'} text={'6,578'} />
            <View style={{ marginHorizontal: 5 }}>
              <TextRegular fontSize={12} color={'#666666'} text={'Reviews'} />
            </View>

            <View style={styles.itemtotalcontainer}>
              <TextRegular fontSize={12} color={'#666666'} text={`${productData?.numberOfSold} Sold`} />
            </View>
          </View>
          <View>
            <TextBold fontSize={18} color={'#FF2A00'} text={`${productData?.price}.00`} />
          </View>
        </View>
        <View style={{ marginHorizontal: width(5) }}>
          <TextRegular fontSize={16} color={'#666666'} text={'Description'} />

          <TextRegular
            color={'#666666'}
            fontSize={14}
            lineheight={20}
            text={productData.description}
          />

          <View
            style={styles.bottomcontainer}>
            <TextRegular fontSize={16} color={'#666666'} text={'Quantity'} />
            <View
              style={styles.countercontainer}>
              <TouchableOpacity
                onPress={decrementCount}
                style={styles.innerspacecounter}>
                <Image
                  source={sub}
                  style={styles.imgcounter}
                />
              </TouchableOpacity>
              <Text style={styles.count}>{count}</Text>
              <TouchableOpacity
                onPress={incrementCount}
                style={styles.innerspacecounter}>
                <Image
                  source={add}
                  style={styles.imgcounter}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={styles.verticalline}
          />

          <View
            style={styles.btnsection}>
            <View>
              <TextRegular
                fontSize={12}
                color={'#666666'}
                text={'Total Price'}
              />
              <TextBold fontSize={16} color={'#FF2A00'} text={productData.price*(count)} />
            </View>

            <TouchableOpacity
            onPress={()=>addToCart()}
              style={styles.buttoncontainer}>
              <Image
                source={cart}
                style={styles.buttonimage}
              />
              <TextBold text={'Add to cart'} color={'#fff'} fontSize={14} />
            </TouchableOpacity>
          </View>
          <CustomAlert
        alertheading={'Add To Cart'}
        textmessage={'Item is added to cart'}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        image={alerticon}
      />
       
       <Alert
          visible={errorVisible}
         source={errorgif}
          Message={errorMsg}
          Button={() => {
            setErrorVisible(!errorVisible);
          }}
        />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
     
      {loading?
       <View style={styles.emptyView}>
      <ActivityIndicator 
      size="large"
      color="#FF2A00"/>
      </View>
      :
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {renderHeader()}
        {renderDetails()}
      </ScrollView>
}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
     backgroundColor: '#fff' 
  },
  slidercontainer: {
    height: vh * 35,
    width: vw * 100,
  },
  sliderimage: {
    height: vh * 35,
    width: vw * 100,
    resizeMode: 'contain',
  },
  Paginationcontainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  dotstyle: {
    width: vw * 3,
    height: vw * 3,
    borderRadius: vw * 9999,
  },
  backbutton: {
    position: 'absolute',
    width: vw * 90,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    top: vh * 7,
  },
  backbtnimg: {
    width: vh * 3,
    height: vh * 3,
  },
  details: {
    backgroundColor: '#fff',
    elevation: 10,
    marginTop: -vh * 3,
    width: vw * 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: vh * 2,
  },

  itemsubcontainer: {
    marginHorizontal: width(2),
    marginVertical: 10,
  },
  star: {
    resizeMode: 'contain',
    height: 15,
    width: 15,
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
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#666666',
    marginHorizontal: 10,
    padding: 7,
  },
  innerspacecounter: {
    paddingHorizontal: 9,
    paddingVertical: 2,
  },
  imgcounter: {
    resizeMode: 'contain', height: 20, width: 20
  },
  verticalline: {
    borderBottomWidth: 1,
    borderColor: '#D6D6D6',
    marginTop: width(5),
    marginVertical: 10,
  },
  btnsection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttoncontainer: {
    backgroundColor: '#FF2A00',
    flexDirection: 'row',
    padding: 10,
    width: width(40),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 7,
  },
  buttonimage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  emptyView:
  {flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});
