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
import CustomButton from '../../component/CustomButton';
import zindagiwallet from '../../Assest/Images/zindagiwallet.png';
import zindagisunridge from '../../Assest/Images/zindagisunridge.png';
import hbl from '../../Assest/Images/hbl.png';
import cod from '../../Assest/Images/cod.png';
import banktransfer from '../../Assest/Images/banktransfer.png';
import alerticon from '../../Assest/Images/alerticon.png';
import CustomAlertButton from '../../component/CustomAlertButton';

export default function PaymentMethod(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      key: 'Zindagi Wallet',
      selected: false,
      image: zindagiwallet,
    },
    {
      id: 2,
      key: 'Zindagi Sunridge Card',
      selected: false,
      image: zindagisunridge,
    },
    {
      id: 3,
      key: 'HBL Connect',
      selected: false,
      image: hbl,
    },
    {
      id: 4,
      key: 'COD',
      selected: false,
      image: cod,
    },
    {
      id: 5,
      key: 'Bank Transfer',
      selected: false,
      image: banktransfer,
    },
  ]);

  const handleItemPress = itemIndex => {
    const newData = [...data];
    newData.forEach(item => {
      item.selected = false;
    });
    newData[itemIndex].selected = !newData[itemIndex].selected;

    setData(newData);
  };
  const handlepress = () => {
    setModalVisible(true);
  };
  const Alertbuttonfunction = () => {
    // props.navigation.navigate('myTab')
    props.navigation.navigate('myTab', { screen: 'History' });
    setModalVisible(false);
  };
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => handleItemPress(index)}
      style={styles.touchablebtnpromocode}>
      <View style={styles.rowdataa}>
        <Image source={item.image} style={styles.carimg} />
        <View style={{marginHorizontal: 5}}>
          <TextMedium color={'#666666'} fontSize={15} text={item.key} />
        </View>
      </View>
      <Image
        source={item.selected ? selctedicon : unslecticon}
        style={styles.standardicon}
      />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchengine}>
        <BackButton
          onPress={() => props.navigation.goBack()}
          heading={'Payment Method'}
        />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
      <View style={{alignItems: 'center'}}>
        <CustomButton onPress={() => handlepress()} text={'APPLY'} />
      </View>
      <CustomAlertButton
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        image={alerticon}
        buttontext={'View Order'}
        Alerttittle={'Order Successful!'}
        Alertmessage={'You Have Successfully Made Order'}
        onPress={() => {
          Alertbuttonfunction();
        }}
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
    width: width(95),
    alignSelf: 'center',
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
    marginRight: 5,
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});
