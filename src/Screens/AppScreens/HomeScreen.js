import React, {useState,useRef,useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {vh, vw} from '../../constant';
import FastImage from 'react-native-fast-image';
import {height, width} from 'react-native-dimension';
import TextRegular from '../../component/TextRegular';
import userimg from '../../Assest/Images/userimage.png';
import notification from '../../Assest/Images/notification.png';
import heart from '../../Assest/Images/heart.png';
import TextBold from '../../component/TextBold';
import Alert from '../../component/Alert';
import ApiManager from '../../Api/ApiManager';
import { AllProductService,AllCategoriesService,GetProductByCategoryService } from '../../Api/Home';
import searchicon from '../../Assest/Images/magnifying-glass.png';
import CustomTextinput from '../../component/CustomTextinput';
import TextMedium from '../../component/TextMedium';
import sliderimage2 from '../../Assest/Images/newslider.png';
import CustomSlider from '../../component/CustomSlider';
import chakkiaata from '../../Assest/Images/Atta-Fortified-removebg-preview.png';
import maida from '../../Assest/Images/maida-1kg-removebg-preview.png';
import basmati from '../../Assest/Images/premium-basmati-rice-1kg-removebg-preview.png';
import sugar from '../../Assest/Images/sugar-removebg-preview.png';
import salt from '../../Assest/Images/salt-removebg-preview.png';
import cookingoil from '../../Assest/Images/oil-Cookioil-box-removebg-preview.png';
import wheart from '../../Assest/Images/whiteheart.png';
import star from '../../Assest/Images/star-social-favorite-middle-full.png';
import Other from '../../Assest/Images/other.png';
import { ActivityIndicator } from 'react-native-paper';
const deviceWidth = Dimensions.get('window').width;
//import {Carousel,Pagination }from 'react-native-reanimated-carousel';
let pageNo=1;
export default function HomeScreen(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category,setCategory]=useState([])
  const [loading,setLoading]=useState();
  const [productList,setProductList]=useState([]);
  const [productLoading,setProductLoading]=useState(false)
  const [hasMoreData,setMoreData]=useState(0)
  const pageSize=20;
  const [filterBrandArray,setFilterBrandArray]=useState([{key:"",value:""}])
  const [filterCategoryArray,setFilterCategoryArray]=useState([{key:"",value:""}])
  const ref = useRef();
  useEffect(()=>{
getCategories();
getProduct();
  },[pageNo])
  const data = [
    {
      id: 1,
      imgUrl: sliderimage2,
    },
    {
      id: 2,
      imgUrl: sliderimage2,
    },
    {
      id: 3,
      imgUrl: sliderimage2,
    },
    
  ];

  /*const Category = [
    {
      id: 1,
      image: require('../../Assest/Images/supplies.png'),
      name: 'Donate Box',
    },
    {
      id: 2,
      image: require('../../Assest/Images/rice.png'),
      name: 'Rice',
    },
    {
      id: 3,
      image: require('../../Assest/Images/iconbox.png'),
      name: 'Value Bundle',
    },
    {
      id: 4,
      image: require('../../Assest/Images/BeasanIcon.png'),
      name: 'Besan',
    },
    {
      id: 5,
      image: require('../../Assest/Images/suji2.png'),
      name: 'Suji',
    },
    {
      id: 6,
      image: require('../../Assest/Images/flour.png'),
      name: 'Maida',
    },
    {
      id: 7,
      image: require('../../Assest/Images/sugar.png'),
      name: 'Sugar',
    },
    {
      id: 8,
      image: require('../../Assest/Images/ellipsis.png'),
      name: 'Others',
    },
  ];*/
  
 /* const Productlist = [
    {
      id: 1,
      image: chakkiaata,
      name: 'Sunridge Fortified Chakki Atta 5 Kg',
      rating: 4.5,
      price: 792,
      disount: 990,
    },
    {
      id: 2,
      image: maida,
      name: 'Sunridge Maida 1 Kg',
      rating: 4.5,
      price: 168,
      disount: 210,
    },
    {
      id: 3,
      image: basmati,
      name: 'Premium Basmati Rice 1 Kg',
      rating: 4.5,
      price: 432,
      disount: 540,
    },

    {
      id: 4,
      image: sugar,
      name: 'Sunridge White Crystal Sugar 1 Kg',
      rating: 4.5,
      price: 84,
      disount: 105,
    },
    {
      id: 5,
      image: salt,
      name: 'Sunridge Iodized Salt 800 GM',
      rating: 4.5,
      price: 32,
      disount: 40,
    },
    {
      id: 6,
      image: cookingoil,
      name: 'Dastak Cooking Oil Pouch Carton 1 X 5 Lt',
      rating: 4.5,
      price: 2000,
      disount: 2500,
    },
  ];*/
  const onSnapToItem = (index) => {
    setCurrentIndex(index); // Update currentIndex state immediately
  };
  const ProductsInRow = ({item,index}) => {
    return (
<>
     
      <View style={styles.productContainer}>
        <TouchableOpacity style={styles.porductrowcontainer}
        onPress={()=>getProductByCategories(item.id)}>
          <Image
          width={30}
          height={30}
            source={{uri:item.imageURL}}
            style={styles.productImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TextMedium fontSize={14} color={'#333333'} text={item.name} />
       
      </View>
      { category?.length >7 &&
          index==category?.length-1 &&
          <View style={styles.productContainer}>
          <TouchableOpacity style={styles.porductrowcontainer}
          onPress={()=>getProductByCategories(item.id)}>
         <Image
          width={30}
          height={30}
            source={Other}
            style={styles.productImage}
            resizeMode="contain"
          />
          </TouchableOpacity>
          <TextMedium fontSize={14} color={'#333333'} text={'Other'} />
          </View>
         
        }
      </>
    );
  };
const getProduct=()=>{
  setProductLoading(true)
  ApiManager.fetch(AllProductService,{filterBrandArray,filterCategoryArray,pageNo,pageSize},onProductResponse,onProductError)
  
}
const onProductResponse=(response)=>{
  console.log('response getProductDAta',response?.data?.data?.products);
  setProductList(response?.data?.data?.products);
  setProductLoading(false)
}
const onProductError=(error)=>{
  console.log('error',error?.data)
  setProductLoading(false)

}
const getCategories=()=>{
  setLoading(true);
  ApiManager.fetch(AllCategoriesService,{},onCategoriesResponse,onCategoriesError)
  
}
const onCategoriesResponse=(response)=>{
  
  setCategory(response?.data?.data);

}
const onCategoriesError=(error)=>{
  console.log('error',error?.data)

}
const getProductByCategories=(id)=>{
  setProductLoading(true);
  ApiManager.fetch(GetProductByCategoryService(id),{},onProductByCategoriesResponse,onProductByCategoriesError)
  
}
const onProductByCategoriesResponse=(response)=>{
 
  setProductList(response?.data?.data.products);
  setProductLoading(false);


}
const onProductByCategoriesError=(error)=>{
  console.log('error',error?.data)
  setProductLoading(false);

}
  const MostPopular = ({item}) => {
    return (
      <TouchableOpacity style={styles.popularcontainer} 
      onPress={()=>getProductByCategories(item?.id)}>
        <TextMedium fontSize={14} color={'#707070'} text={item.name} />
      </TouchableOpacity>
    );
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

  const renderFlatListItem = ({item, index}) => {
    if (index === 0) {
      // Render the header and other content before the FlatLists
      return (
        <View style={{marginTop: width(10)}}>
          <View style={styles.headercontainer}>
            <View style={styles.spacer}>
              <Image source={userimg} style={styles.userimage} />
              <View style={styles.viewtextarea}>
                <TextBold
                  color={'#333333'}
                  lineHeight={22}
                  fontSize={20}
                  text={'Welcome'}
                />
                <TextRegular
                  color={'#333333'}
                  lineHeight={22}
                  fontSize={16}
                  text={'Malik Muhammad'}
                />
              </View>
            </View>

            <View style={styles.spacer}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Notification');
                }}
                style={styles.rowbtn}>
                <Image source={notification} style={styles.rowbtn_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('WishList');
                }}
                style={styles.rowbtn}>
                <Image source={heart} style={styles.rowbtn_image} />
              </TouchableOpacity>
            </View>
          </View>

          <CustomTextinput image={searchicon} placeholder={'Search'} />

          <View style={styles.rowheading}>
            <TextMedium
              color={'#333333'}
              fontSize={16}
              text={'Special Offers'}
            />
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('AllProductList');
              }}>
              <TextMedium color={'#333333'} fontSize={16} text={'See All'} />
            </TouchableOpacity>
          </View>
          <View>
           <CustomSlider
              data={data}
              onSnapToItem={(index) => setCurrentIndex(index)}
              dotsLength={data.length}
              
              loopClonesPerSide={data.length}
              activeDotIndex={currentIndex}
              imagedata={data[currentIndex].imgUrl}
      />
   
 
          </View>
        </View>
      );
    } else if (index === 1) {
      // Render the first FlatList
      return (
        <View>
          <FlatList
            data={category}
            keyExtractor={item => item.id.toString()}
            renderItem={({item,index}) => <ProductsInRow item={item}  index={index}/>}
            numColumns={4}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      );
    } else if (index === 2) {
      // Render the "Most Popular" section
      return (
        <View>
          <View style={styles.rowheading}>
            <TextMedium color={'#333333'} fontSize={16} text={'Most Popular'} />
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('AllProductList');
              }}>
              <TextMedium color={'#333333'} fontSize={16} text={'See All'} />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={category}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => <MostPopular item={item} />}
              contentContainerStyle={styles.flatListContainer}
            />
          </View>
        </View>
      );
    } else if (index === 3) {
      // Render the second FlatList
      return (
        <View>
          {
            productLoading?
            <ActivityIndicator size={'small'} color={'#FF2A00'}/>
          :<FlatList
            data={productList}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Itemlist item={item} />}
            numColumns={2}
            onEndReached={()=>{
              pageNo=pageNo+1,
              getProduct()}}
            onEndReachedThreshold={0.1}
        
            contentContainerStyle={styles.flatListContainer}
          />
            }
        </View>
      );
    }
  };

  const dataForFlatList = [
    {id: 'header'},
    {id: 'categories'},
    {id: 'mostPopular'},
    {id: 'productList'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataForFlatList}
        keyExtractor={item => item.id.toString()}
        renderItem={renderFlatListItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  spacer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userimage: {
    resizeMode: 'contain',
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
  },
  viewtextarea: {
    marginLeft: width(2),
  },
  rowbtn: {
    marginHorizontal: 5,
  },
  rowbtn_image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },

  flatListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  productContainer: {
   
    flex: 1,
    //alignItems: 'center',
    
    marginBottom: 10,
    marginHorizontal:10,
    width: deviceWidth / 2.8 - 20, // Adjust the width to fit 2 products in a row
  },
  rowheading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: width(3),
  },
  productImage: {
    width: 25,
    height: 25,
  },
  porductrowcontainer: {
    backgroundColor: '#FF2A00',
    backgroundColor:'red',
    justifyContent:'space-around',
    padding: 15,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 35,
    width:70,
    height:70
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
  carasolmain: {
    width: '100%',
    position: 'relative',
    height: height(25),
    alignItems: 'center',

  },
  carasolsliderimage: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },

  paginationview: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
  },
  paginationdotstyle: {
    width: 18,
    height: 6,
    borderRadius: 5,
    marginHorizontal: -5,
    backgroundColor: '#FF2A00',
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
