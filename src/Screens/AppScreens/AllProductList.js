import React, {useState,useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ActivityIndicator,
  
} from 'react-native';
import BackButton from '../../component/BackButton';
import alerticon from '../../Assest/Images/alerticon.png';
import errorgif from '../../Assest/Images/errorgif.json';
import {height, width} from 'react-native-dimension';
import TextMedium from '../../component/TextMedium';
import TextRegular from '../../component/TextRegular';
import Glass from '../../Assest/Images/magnifying-glass.png';
import AsyncStorage from '@react-native-community/async-storage';
import chakkiaata from '../../Assest/Images/Atta-Fortified-removebg-preview.png';
import maida from '../../Assest/Images/maida-1kg-removebg-preview.png';
import basmati from '../../Assest/Images/premium-basmati-rice-1kg-removebg-preview.png';
import sugar from '../../Assest/Images/sugar-removebg-preview.png';
import salt from '../../Assest/Images/salt-removebg-preview.png';
import cookingoil from '../../Assest/Images/oil-Cookioil-box-removebg-preview.png';
import wheart from '../../Assest/Images/whiteheart.png';
import star from '../../Assest/Images/star-social-favorite-middle-full.png';
import ApiManager from '../../Api/ApiManager';
import { AllProductService } from '../../Api/Home';
import { AddtoWhishlistService } from '../../Api/Wishlist';
import CustomAlert from '../../component/CustomAlert';
import Alert from '../../component/Alert';
const deviceWidth = Dimensions.get('window').width;
let pageNo=1;
export default function AllProductList(props) {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [productList,setProductList]=useState();
  const [productLoading,setProductLoading]=useState(false);
  const [errorMsg,setErrorMsg]=useState('');
  const [errorVisible,setErrorVisible]=useState(false);
  const [modalVisible,setModalVisible]=useState(false);
  const pageSize=20;
  const [filterBrandArray,setFilterBrandArray]=useState([{key:"",value:""}])
  const [filterCategoryArray,setFilterCategoryArray]=useState([{key:"",value:""}])
  useEffect(()=>{
    getProduct()
  },[])
  const getProduct=()=>{
    setProductLoading(true)
    ApiManager.fetch(AllProductService,{filterBrandArray,filterCategoryArray,pageNo,pageSize},onProductResponse,onProductError)
    
  }
  const onProductResponse=(response)=>{
    console.log('response getProductDAta',response?.data?.data?.products);
    setProductList(response?.data?.data.products)
    setProductLoading(false)
  }
  const onProductError=(error)=>{
    console.log('error',error?.data)
    setProductLoading(false)
  
  }
  const addToWishlist=async(item)=>{
    const customerId=await AsyncStorage.getItem('customerID')
    console.log(customerId,item.id);
  
  if(customerId!=null){
  const data={
    customerId:customerId,
    productId:item.id,
    
  }
  ApiManager.fetch(AddtoWhishlistService(customerId),data,onAddToWishlistResponse,onAddToWishlistError) 
  }
  }
  const onAddToWishlistResponse=(response)=>{
    console.log('hrll')
    setModalVisible(true)
  }
  const onAddToWishlistError=(error)=>{
    console.log('error')
    setErrorVisible(true)
    setErrorMsg(error.message)
    setLoading(false)
  
  }
  
  const toggleSearch = () => {
    setIsSearching(!isSearching);
  };

  const searchFunction = () => {
    console.log('Searching for:', searchText);
    setIsSearching(false);
  };

  const Itemlist = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('ProductDetail',{id:item?.id});
        }}
        style={styles.itemcontainer}>
        <TouchableOpacity style={styles.itemimageview}>
          <Image source={wheart} style={styles.itemimgheart} />
        </TouchableOpacity>
        <View style={styles.itemview}>
          <Image source={{uri:item?.imageURL[0]}} style={styles.itemlistproductimage} />
        </View>

        <View style={styles.itemsubcontainer}>
          <TextRegular fontSize={12} color={'#666666'} text={item.name} />
          <View style={styles.itemviewstar}>
            <Image source={star} style={styles.star} />
            <View style={styles.stargap}>
              <TextRegular fontSize={12} color={'#666666'} text={item.rating} />
            </View>
            <View style={styles.itemtotalcontainer}>
              <TextRegular fontSize={12} color={'#666666'} text={`${item?.numberOfSold} Sold`} />
            </View>
          </View>
        </View>

        <View style={styles.itempricing}>
          <TextMedium
            color={'#FF2A00'}
            fontSize={18}
            text={'PKR' + item.price}
          />
          <TextRegular
            color={'#9E9E9E'}
            fontSize={12}
            text={'PKR' + item.discount}
          />
        </View>
        <View style={styles.itemdiscount}>
          <TextMedium color={'#666666'} fontSize={14} text={'Discount 20%'} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchengine}>
        <BackButton
          onPress={() => props.navigation.goBack()}
          heading={'Most Popular'}
        />
        {isSearching ? (
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            onChangeText={text => setSearchText(text)}
            value={searchText}
            onBlur={() => searchFunction()}
            autoFocus
          />
        ) : (
          <TouchableOpacity onPress={toggleSearch}>
            <Image source={Glass} style={styles.iconstyle} />
          </TouchableOpacity>
        )}
      </View>
      <View>

      {productLoading && <ActivityIndicator size={'small'} color={'#FF2A00'}/>}
        <FlatList
          data={productList}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Itemlist item={item} />}
          numColumns={2}
          onEndReached={()=>{
            pageNo=pageNo+1,
            getProduct()}}
          contentContainerStyle={styles.flatListContainer}
        />
         <CustomAlert
        alertheading={'Add to Wishlist'}
        textmessage={'Item is added to Wishlist'}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchengine: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
    marginTop: width(9),
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  iconstyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 8,
    padding: 5,
    marginRight: 10,
  },
  popularcontainer: {
    borderWidth: 1,
    borderColor: '#707070',
    padding: 8,
    margin: 5,
    marginHorizontal: 5,
    width: deviceWidth / 2.8 - 20,
    alignItems: 'center',
    borderRadius: 8,
  },
  flatListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  itemcontainer: {
    flex: 1,
    marginBottom: 10,
    width: deviceWidth / 2 - 20,
    marginHorizontal: 5,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  itemimageview: {
    alignSelf: 'flex-end',
    backgroundColor: '#FF2A00',
    padding: 8,
    borderRadius: 50,
    margin: 9,
    marginRight: width(3),
  },
  itemimgheart: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
  },
  itemlistproductimage: {
    resizeMode: 'contain',
    height: height(20),
    width: width(50),
  },
  itemview: {
    bottom: 5,
  },
  itemsubcontainer: {
    marginHorizontal: width(2),
    marginVertical: 10,
  },
  itemviewstar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    resizeMode: 'contain',
    height: 15,
    width: 15,
  },
  stargap: {
    marginHorizontal: 3,
  },
  itemtotalcontainer: {
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#666666',
    padding: 2,
    borderRadius: 4,
  },
  itempricing: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: width(3),
  },
  itemdiscount: {
    marginHorizontal: width(3),
  },
});
