import React, {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import BackButton from '../../component/BackButton';
import {height, width} from 'react-native-dimension';
import TextMedium from '../../component/TextMedium';
import TextRegular from '../../component/TextRegular';
import Glass from '../../Assest/Images/magnifying-glass.png';
import chakkiaata from '../../Assest/Images/Atta-Fortified-removebg-preview.png';
import maida from '../../Assest/Images/maida-1kg-removebg-preview.png';
import basmati from '../../Assest/Images/premium-basmati-rice-1kg-removebg-preview.png';
import sugar from '../../Assest/Images/sugar-removebg-preview.png';
import salt from '../../Assest/Images/salt-removebg-preview.png';
import cookingoil from '../../Assest/Images/oil-Cookioil-box-removebg-preview.png';
import wheart from '../../Assest/Images/whiteheart.png';
import star from '../../Assest/Images/star-social-favorite-middle-full.png';

const deviceWidth = Dimensions.get('window').width;

export default function WishList(props) {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const Category = [
    {
      id: 0,
      name: 'All',
    },
    {
      id: 1,
      name: 'Donate Box',
    },
    {
      id: 2,
      name: 'Rice',
    },
    {
      id: 3,
      name: 'Value Bundle',
    },
    {
      id: 4,
      name: 'Besan',
    },
    {
      id: 5,
      name: 'Suji',
    },
    {
      id: 6,
      name: 'Maida',
    },
    {
      id: 7,
      name: 'Sugar',
    },
    {
      id: 8,
      name: 'Others',
    },
  ];
  const Productlist = [
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
  ];
  const toggleSearch = () => {
    setIsSearching(!isSearching);
  };

  const searchFunction = () => {
    console.log('Searching for:', searchText);
    setIsSearching(false);
  };

  const MostPopular = ({item}) => {
    return (
      <TouchableOpacity style={styles.popularcontainer}>
        <TextMedium fontSize={14} color={'#707070'} text={item.name} />
      </TouchableOpacity>
    );
  };
  const Itemlist = ({item}) => {
    return (
      <TouchableOpacity style={styles.itemcontainer}>
        <TouchableOpacity style={styles.itemimageview}>
          <Image source={wheart} style={styles.itemimgheart} />
        </TouchableOpacity>
        <View style={styles.itemview}>
          <Image source={item.image} style={styles.itemlistproductimage} />
        </View>

        <View style={styles.itemsubcontainer}>
          <TextRegular fontSize={12} color={'#666666'} text={item.name} />
          <View style={styles.itemviewstar}>
            <Image source={star} style={styles.star} />
            <View style={styles.stargap}>
              <TextRegular fontSize={12} color={'#666666'} text={item.rating} />
            </View>
            <View style={styles.itemtotalcontainer}>
              <TextRegular fontSize={12} color={'#666666'} text={'8354 Sold'} />
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
            text={'PKR' + item.disount}
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
          heading={'My Wishlist'}
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
        <FlatList
          data={Category}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <MostPopular item={item} />}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={Productlist}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Itemlist item={item} />}
          numColumns={2}
          contentContainerStyle={styles.flatListContainer}
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
