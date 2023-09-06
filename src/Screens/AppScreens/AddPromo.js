import {
    View,
    Text,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Image,
  } from 'react-native';
  import {height, width} from 'react-native-dimension';
  import React, {useState} from 'react';
  import BackButton from '../../component/BackButton';
  import TextMedium from '../../component/TextMedium'; 
  import unslecticon from '../../Assest/Images/unslect.png';
  import selctedicon from '../../Assest/Images/selcted.png';
  import TextRegular from '../../component/TextRegular';
  import CustomButton from '../../component/CustomButton';
  import ticket from "../../Assest/Images/ticket.png" 
  export default function AddPromo (props) {
    const [data, setData] = useState([
      {
        id:1,
        key: 'Special 25% Off',
        selected: false,
        des: 'Special promo only today!',
        image: ticket,
      },
      {
        id:2,
        key: 'Discount 30% Off',
        selected: false,
        des: 'New user special promo',
        image: ticket,
      },
      {
        id:3,
        key: 'Special 20% Off',
        selected: false,
        des: 'Special promo only today!',
        image:ticket,
      },
      {
        id:4,
        key: 'Discount 30% Off',
        selected: false,
        des: 'New user special promo valid today',
        image:ticket,
      },
      
    ]);
  
    const handleItemPress = (itemIndex) => {
      const newData = [...data];
      newData.forEach((item) => {
          item.selected = false;
        });
      newData[itemIndex].selected = !newData[itemIndex].selected;
  
      setData(newData);
    };
  
    const renderItem = ({item, index}) => (
      <TouchableOpacity
        onPress={() => handleItemPress(index)}
        style={styles.touchablebtnpromocode}>
        <View style={styles.rowdataa}>
          <Image source={item.image} style={styles.carimg} />
          <View style={{marginHorizontal:5}}>
            <TextMedium  color={"#666666"}fontSize={15} text={item.key} />
            <TextRegular color={"#666666"}fontSize={12}  text={item.des} />
          </View>
        </View>
        <Image source={item.selected ? selctedicon : unslecticon} style={styles.standardicon} />
      </TouchableOpacity>
    );
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.searchengine}>
          <BackButton
            onPress={() => props.navigation.goBack()}
            heading={'Choose Shipping'}
          />
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.key}
        />
        <View style={{alignItems:'center'}} >
        <CustomButton onPress={()=>{props.navigation.navigate("CheckOut")}} text={"APPLY"}/>
        </View>
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
    item: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 5,
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
      width:width(95),
      alignSelf:"center"
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
      marginRight:5,
      height: 20,
      width: 20,
      resizeMode: 'contain',
    },
  });
  