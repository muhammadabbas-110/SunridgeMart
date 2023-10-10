import React, { useState, useRef,useEffect } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  ActivityIndicator
} from 'react-native';
import CustomTextinput from '../../component/CustomTextinput';
import searchicon from '../../Assest/Images/magnifying-glass.png';
import { height, width } from 'react-native-dimension';
import BackButton from '../../component/BackButton';
import TextMedium from '../../component/TextMedium';
import atta from '../../Assest/Images/Atta-Fortified-removebg-preview.png';
import TextBold from '../../component/TextBold';
import deleteicon from '../../Assest/Images/delete.png';
import add from '../../Assest/Images/add.png';
import sub from '../../Assest/Images/sub.png';
import ApiManager from '../../Api/ApiManager';
import cookingoil from '../../Assest/Images/oil-Cookioil-box-removebg-preview.png';
import basmati from '../../Assest/Images/premium-basmati-rice-1kg-removebg-preview.png';
import maida from '../../Assest/Images/maida-1kg-removebg-preview.png';
import RBSheet from 'react-native-raw-bottom-sheet';
import CustomButton from '../../component/CustomButton';
import TextRegular from '../../component/TextRegular';
import { BlurView } from '@react-native-community/blur';
import { GetCartItemService,DeleteCartService ,UpdateCartService} from '../../Api/Cart';
import AsyncStorage from '@react-native-community/async-storage';
import CustomAlert from '../../component/CustomAlert';
import alerticon from '../../Assest/Images/alerticon.png';
import { useIsFocused } from '@react-navigation/native';
import Alert from '../../component/Alert';
export default function Cart(props) {
  const refRBSheet = useRef();
const [data,setData]=useState([])
const [loading,setLoading]=useState(true);
  const [itemCounts, setItemCounts] = useState();
  const [deleteMsg,setDeleteMsg]=useState('');
  const [deleteModal,setDeleteModal]=useState(false)

  const [selectedItem, setSelectedItem] = useState(null);
const [cId,setCid]=useState('')
const focus=useIsFocused();
const [fullData,setFullData]=useState()
useEffect(()=>{
  getCartItem();
},[focus])
  const incrementCount = (item) => {
   const itemId=item.product.id
    UpdateCartService(item)
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: prevCounts[itemId] + 1,
    }));

  };
  const getItemCount = (itemId) => {

    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: prevCounts[itemId] + 1,
    }));
  };

  const decrementCount = (item) => {
    const itemId=item.product.id
    if (itemCounts[itemId] > 0) {
      UpdateCartService(item)
      setItemCounts((prevCounts) => ({
        ...prevCounts,
        [itemId]: prevCounts[itemId] - 1,
      }));
    }
  };

  const openBottomSheet = (item) => {
    setSelectedItem(item);
    refRBSheet.current.open();
  };

  /*const data = [
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
  ];*/
  const getCartItem=async()=>{
    setLoading(true)
    const customerId=await AsyncStorage.getItem('customerID')

  if(customerId){
  setCid(customerId)
    ApiManager.fetch(GetCartItemService(customerId),{},onGetItemResponse,onGetItemError)
  }
  
  }
  const onGetItemResponse=(response)=>{
    setLoading(false)
    console.log('resultttttttt',response.data.data.productWithQuantity);
    
  if(response.data.data.productWithQuantity){
  const newCounts = { ...itemCounts };

  response.data.data.productWithQuantity.forEach((item) => {
        const itemId = item.product.id;
        const quantity = item.quantity;
        
        // Set the default quantity from the API response
        newCounts[itemId] = quantity;
      });

      setItemCounts(newCounts);
    
      setData(response.data.data.productWithQuantity)
     
    } 
  }
  const onGetItemError=(error)=>{
    setLoading(false)
  
  }
const deleteCart=(item)=>{
  if(item){
    
    const data={id:0,
  customerId:cId,
  productId:item?.product.id,
  quantity:itemCounts[item?.product.id]

  }
  ApiManager.fetch(DeleteCartService(cId),data,onDeleteResponse,onDeleteError)
}
}
const updateCart=(item)=>{
  if(item){
    
    const data={id:0,
  customerId:cId,
  productId:item?.product.id,
  quantity:itemCounts[item?.product.id]

  }
  ApiManager.fetch(UpdateCartService(cId),data,onUpdateResponse, onUpdateError)
}
}
  const renderItem = ({ item }) => {
  //  console.log('itemmmCounts',itemCounts)
   const itemCount = itemCounts[item?.product?.id];
    return (
      <View style={styles.cartcontainer}>
        <View style={styles.firstsection}>
          <View style={styles.itemimagecontainer}>
            <Image source={{uri:item.product.imageURL[0]}} style={styles.itemimage} />
          </View>
          <View style={styles.textview}>
            <View style={{flexDirection:'row',justifyContent:'space-between' }}>
            <View style={{width: width(32)}}>
            <TextMedium color={'#333333'} fontSize={15} text={item.product.name} />
            </View>
            <TouchableOpacity
            onPress={() => openBottomSheet(item)}
            style={styles.deletconatiner}>
            <Image source={deleteicon} style={styles.delicon} />
          </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',justifyContent:"space-between"}}>
            <View style={{ height: 7 }} />
            <View style={{alignSelf:"flex-start",flex:1}}>
            <TextBold 
      
            color={'#FF2A00'} fontSize={18} text={item.product.price} />
            </View>
            <View style={styles.countercontainer}>
            <TouchableOpacity
              onPress={() => decrementCount(item.product?.id)}
              style={styles.innerspacecounter}>
              <Image source={sub} style={styles.imgcounter} />
            </TouchableOpacity>
            <Text style={styles.count}>{itemCount}</Text>
            <TouchableOpacity
              onPress={() => incrementCount(item)}
              style={styles.innerspacecounter}>
              <Image source={add} style={styles.imgcounter} />
            </TouchableOpacity>
          </View>
          </View>
          </View>
        </View>
  
          
          
        </View>
      
    );
  };
  const onDeleteResponse=(response)=>{

  setDeleteMsg(response.data.message)
  refRBSheet.current.close()
 setDeleteModal(true)
 
  
  }
  const onDeleteError=(error)=>{
    setLoading(false)
  
  }
  const onUpdateResponse=(response)=>{


    }
    const onUpdateError=(error)=>{
      setLoading(false)
    
    }

  return (
    <SafeAreaView style={styles.container}>
      {loading?
       <View style={styles.emptyView}>
      <ActivityIndicator 
      size="large"
      color="#FF2A00"/>
      </View>:
      <>
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
        keyExtractor={(item) => item.id?.toString()}
        renderItem={renderItem}
      />
      <View style={styles.footarsection}>
        <View>
          <TextRegular fontSize={12} color={'#666666'} text={'Total Price'} />
          <TextMedium fontSize={16} color={'#FF2A00'} text={'PKR 280'} />
        </View>

        <CustomButton
          onPress={() => {
            props.navigation.navigate('CheckOut');
          }}
          text={'CHECKOUT'}
        />
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          container: {
          flex:1
          
          },
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#666666',
          },
        }}>
        <View style={styles.sheetcontainer}>
          {selectedItem && (
            <>
              <TextBold
                alignSelf={'center'}
                fontSize={18}
                color={'#666666'}
                text={'Leave A Review'}
              />
              <View style={styles.verticallinesheet} />
              <View style={styles.cartcontainer}>
                <View style={styles.firstsection}>
                  <View style={styles.itemimagecontainer}>
                    <Image
                      source={selectedItem.image}
                      style={styles.itemimage}
                    />
                  </View>
                  <View style={styles.textview}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                      <View style={{width:width(32)}}>
                    <TextMedium
                      color={'#333333'}
                      fontSize={15}
                      text={selectedItem.product.name}
                    />
                    </View>
                     <TouchableOpacity
                    onPress={() => refRBSheet.current.close()}
                    style={styles.deletconatiner}>
                    <Image source={deleteicon} style={styles.delicon} />
                  </TouchableOpacity>
                  </View>
                    <View style={{ height: 7 }} />
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <TextBold
                      color={'#FF2A00'}
                      fontSize={18}
                      text={selectedItem.product.price}
                    />
                      <View style={styles.secoundsection}>
                 
                 <View style={styles.countercontainer}>
                   <TouchableOpacity
                     onPress={() => decrementCount(selectedItem.product.id)}
                     style={styles.innerspacecounter}>
                     <Image source={sub} style={styles.imgcounter} />
                   </TouchableOpacity>
                   <Text style={styles.count}>
                     {itemCounts[selectedItem.product.id]}
                   </Text>
                   <TouchableOpacity
                     onPress={() => incrementCount(selectedItem)}
                     style={styles.innerspacecounter}>
                     <Image source={add} style={styles.imgcounter} />
                   </TouchableOpacity>
                 </View>
               </View>
               </View>
                  </View>
                </View>
              
              </View>
            </>
          )}
          <View style={styles.sheetbuttonscontainer}>
            <TouchableOpacity style={styles.transbtn}>
              <TextMedium fontSize={14} color={'#666666'} text={'CANCEL'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.colorbtn}
            onPress={()=>deleteCart(selectedItem)}
            >
              <TextMedium
                fontSize={14}
                color={'#ffff'}
                text={'Yes, remove'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
      <Alert
           visible={deleteModal}
         source={alerticon}
          Message={deleteMsg}
          Button={() => {
            getCartItem();
            setDeleteModal(!deleteModal);

          
            
          }}
        />
     
      </>
}
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
    //right: width(2),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#666666',
    padding: 6,
    height:height(5),
 
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
  emptyView:
  {flex:1,
    alignItems:'center',
    justifyContent:'center'
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
   // width: width(32),
    margin: 8,
    flex:1
  },
  secoundsection: {
    alignItems: 'flex-end',
    flexDirection: 'column',
  
  },
  deletconatiner: {
    marginBottom: width(5),
    //marginRight: width(2),
  },
  delicon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  footarsection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: width(3),
    marginVertical: width(3),
  },
  sheetbuttonscontainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical:height(2)
   
    
  },
  transbtn: {
    borderColor: '#666666',
    padding: 9,
    borderWidth: 1,
    borderRadius: 10,
    width: width(40),
    alignItems: 'center',
    marginHorizontal: 5,
  },
  colorbtn: {
    backgroundColor: '#FF2A00',
    padding: 10,
    borderRadius: 10,
    width: width(40),
    alignItems: 'center',
    marginHorizontal: 5,
  },
  verticallinesheet: {
    borderBottomWidth: 1,
    borderColor: '#666666',
    marginVertical: width(2),
  },
  sheetcontainer: {
    flex:1,
    backgroundColor: '#f5f5f5',
   
  },
});
