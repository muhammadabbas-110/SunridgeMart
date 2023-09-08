import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Alert,
} from 'react-native';
import React from 'react';
import BackButton from '../../component/BackButton';
import {height, width} from 'react-native-dimension';
import arrow from '../../Assest/Images/down-arrow.png';
import userimg from '../../Assest/Images/userimg.png';
import editprofile from '../../Assest/Images/editprofile.png';
import background from '../../Assest/Images/whitebackground.png';
import TextRegular from '../../component/TextRegular';
import user from '../../Assest/Images/user.png';
import address from '../../Assest/Images/placeholder.png';
import shield from '../../Assest/Images/shield.png';
import helpdesk from '../../Assest/Images/help-desk.png';
import logout from '../../Assest/Images/logout.png';
import TextMedium from '../../component/TextMedium';

export default function Profile(props) {
  const data = [
    {id: 1, text: 'Edit Profile', icon: user},
    {id: 2, text: 'Address', icon: address},
    {id: 3, text: 'Privacy Policy', icon: shield},
    {id: 4, text: 'Help Center', icon: helpdesk},
    {id: 5, text: 'Logout', icon: logout},
  ];

  const handleItemPress = index => {
    switch (index) {
      case 0:
       props.navigation.navigate("EditProfile")
        break;
      case 1:
        props.navigation.navigate("ShippingAddress")
        break;
      case 2:
        props.navigation.navigate("PrivacyPolicy")
        break;
      case 3:
        props.navigation.navigate("HelpCenter")
        break;
      case 4:
        Alert.alert('Logout Pressed', 'You pressed Logout.');
        break;
      default:
        break;
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => handleItemPress(index)}
        style={styles.listcontainer}>
        <View style={styles.subcontainer}>
          <Image source={item.icon} style={styles.iconstyle} />
          <TextMedium
            marginHorizontal={width(3)}
            color={'#666666'}
            fontSize={16}
            text={item.text}
          />
        </View>
        <View>
          <Image source={arrow} style={styles.iconstyle} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.searchengine}>
        <BackButton
          onPress={() => props.navigation.goBack()}
          heading={'Fill Your Profile'}
        />
      </View>
      <TouchableOpacity style={styles.profileimgcontainer}>
        <Image source={userimg} style={styles.userimgpic} />

        <View style={{alignSelf: 'flex-end'}}>
          <Image source={editprofile} style={styles.editicon} />
        </View>
      </TouchableOpacity>
      <View style={styles.userinfo}>
        <TextRegular
          color={'#333333'}
          fontSize={18}
          text={'Syed Muhammad Abbas'}
        />
        <TextRegular color={'#333333'} fontSize={18} text={'+92 311862433'} />
      </View>
      <View style={{borderBottomWidth: 1, borderColor: '#D6D6D6'}} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    resizeMode: 'cover',
    flex: 1,
  },
  searchengine: {
    margin: 10,
    marginTop: width(9),
  },
  listcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: width(2),
    marginHorizontal: width(2),
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileimgcontainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  iconstyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  userimgpic: {
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
  },
  editicon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    right: width(7),
    bottom: width(5),
  },
  userinfo: {
    marginVertical: width(5),
    alignItems: 'center',
  },
});
