import {
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {height, width} from 'react-native-dimension';
import noitemicon from '../../Assest/Images/noitem.png';
import TextRegular from '../../component/TextRegular';
import cookingoil from '../../Assest/Images/oil-Cookioil-box-removebg-preview.png';
import basmati from '../../Assest/Images/premium-basmati-rice-1kg-removebg-preview.png';
import maida from '../../Assest/Images/maida-1kg-removebg-preview.png';
import atta from '../../Assest/Images/Atta-Fortified-removebg-preview.png';
import TextMedium from '../../component/TextMedium';
import TextBold from '../../component/TextBold';
import RBSheet from 'react-native-raw-bottom-sheet';
import {AirbnbRating, Rating} from 'react-native-ratings';
import CustomTextinput from '../../component/CustomTextinput';
import gallery from '../../Assest/Images/gallery.png';
export default function Compeleted(props) {
  const refRBSheet = useRef();
  const [starCount, setStarCount] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const openBottomSheet = item => {
    setSelectedItem(item); // Set the selected item
    refRBSheet.current.open();
  };
  const onStarRatingPress = rating => {
    setStarCount(rating);
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
          <TouchableOpacity
            onPress={() => openBottomSheet(item)}
            style={styles.colorbtn}>
            <TextRegular color={'#fff'} fontSize={10} text={'LEAVE REVIEW'} />
          </TouchableOpacity>
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
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#666666',
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#F5F5F5',
            height: height(65),
          },
        }}>
        <View style={styles.sheetcontainer}>
          {selectedItem && (
            <>
              <TextBold
                alignSelf={'center'}
                fontSize={18}
                color={'#666666'}
                text={'Remove From Cart? '}
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
                    <TextMedium
                      color={'#333333'}
                      fontSize={15}
                      text={selectedItem.name}
                    />
                    <View style={{height: 7}} />
                    <TextBold
                      color={'#FF2A00'}
                      fontSize={18}
                      text={selectedItem.price}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.verticallinesheet} />
              <TextBold
                alignSelf={'center'}
                fontSize={20}
                color={'#666666'}
                text={'How Is Your Order? '}
              />
              <TextRegular
                textAlign={'center'}
                fontSize={14}
                color={'#666666'}
                text={'Please Give Your Rating & Also Your Reviews'}
              />
              <AirbnbRating
                count={5}
                size={25}
                defaultRating={starCount}
                showRating={false}
                onFinishRating={e => onStarRatingPress(e)}
                selectedColor="#000"
                ratingContainerStyle={{
                  alignSelf: 'center',
                  marginTop: width(1),
                }}
              />
              <CustomTextinput
                image={gallery}
                placeholder={'Place your comment'}
              />
            </>
          )}
          <View style={styles.touchbtncontainer}>
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.close();
              }}
              style={styles.whitebtn}>
              <TextMedium color={'#707070'} fontSize={15} text={'CANCEL'} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.close();
              }}
              style={styles.primrybtn}>
              <TextMedium color={'#fff'} fontSize={15} text={'SUBMIT'} />
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
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
  verticallinesheet: {
    borderBottomWidth: 1,
    borderColor: '#D6D6D6',
    marginVertical: width(2),
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
    marginTop: height(5),
  },
  sheetcontainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  touchbtncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: height(2),
  },
  whitebtn: {
    borderWidth: 1,
    borderColor: '#707070',
    padding: 10,
    width: width(40),
    alignItems: 'center',
    borderRadius: 7,
  },
  primrybtn: {
    backgroundColor: '#FF2A00',
    borderWidth: 1,
    borderColor: '#FF2A00',
    padding: 10,
    width: width(40),
    alignItems: 'center',
    borderRadius: 7,
  },
});
