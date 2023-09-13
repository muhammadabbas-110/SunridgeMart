import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,

} from 'react-native';
import React, {useState, useRef,useContext} from 'react';
import BackButton from '../../component/BackButton';
import Modal from "react-native-modal";
import {height, width} from 'react-native-dimension';
import arrow from '../../Assest/Images/down-arrow.png';
import userimg from '../../Assest/Images/userimg.png';
import editprofile from '../../Assest/Images/editprofile.png';
import CustomButton from '../../component/CustomButton';
import background from '../../Assest/Images/whitebackground.png';
import { ActionSheet } from 'react-native-cross-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';
import TextRegular from '../../component/TextRegular';
import user from '../../Assest/Images/user.png';
import address from '../../Assest/Images/placeholder.png';
import shield from '../../Assest/Images/shield.png';
import helpdesk from '../../Assest/Images/help-desk.png';
import logout from '../../Assest/Images/logout.png';
import TextMedium from '../../component/TextMedium';
import RBSheet from 'react-native-raw-bottom-sheet';
import TextBold from '../../component/TextBold';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { AppContext } from '../../context';
import { setLogOut,setUser } from '../../redux/slices/authReducer';

export default function Profile(props) {
const dispatch=useDispatch();
const [imageUri, setImageUri] = useState();
  const refRBSheet = useRef();
  const [optionVisible,setOptionVisible]=useState(false)
  const showBottomSheet = () => {
    refRBSheet.current.open();
  };

  const hideBottomSheet = () => {
    refRBSheet.current.close();
  };
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
        props.navigation.navigate('EditProfile');
        break;
      case 1:
        props.navigation.navigate('ShippingAddress');
        break;
      case 2:
        props.navigation.navigate('PrivacyPolicy');
        break;
      case 3:
        props.navigation.navigate('HelpCenter');
        break;
      case 4:
        showBottomSheet();
        break;
      default:
        break;
    }
  };
  const uploadImage = () => {
   setOptionVisible(true);
   console.log('hello')
}
const selectImage = () => {
  ImagePicker.openPicker({
      width: 100,
      height: 100,
      mediaType: "photo",
      cropping: true,
  }).then(response => {

      setImageUri(response.path)
      console.log(response.path)
  }).catch(error => {
      console.log(error.code, error.message);
     
  });
}
const useCamera = () => {
  ImagePicker.openCamera({
      path: true,
      multiple: false,
      width: 100,
      height: 100,
      cropping: true,
  }).then(image => {
      setImageUri(image.path)
  }).catch(error => {
      console.log(error.message);
      
  });

}
const onClose=()=>{
  setOptionVisible(false);
}
const ImageModal=()=>{
  return(
    <Modal isVisible={optionVisible} animationType="fade" transparent={true} style={{justifyContent:'center'}}>
    <View style={{ flex: 1,alignContent:'center',alignSelf:'center',justifyContent:'center' }}>
      <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
        <TextRegular
          color={'#333333'}
          fontSize={18}
          text={'Select an Image'}
        />
         <CustomButton 
         onPress={useCamera}
          text={'Take Photo'}/>
        
        <CustomButton 
         onPress={selectImage}
          text={'Gallery'}/>
          <CustomButton 
         onPress={onClose}
          text={'Cancel'}/>
        
      </View>
    </View>
  
  </Modal>
  )
}
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
  const Handlelogout = async () => {
      await AsyncStorage.removeItem('isUser');
      dispatch(setUser(null));
   dispatch(setLogOut(null));
  }
  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.searchengine}>
        <BackButton
          onPress={() => props.navigation.goBack()}
          heading={'Fill Your Profile'}
        />
      </View>
      <TouchableOpacity style={styles.profileimgcontainer} 
      onPress={uploadImage}>
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
      <ImageModal/>
      <View style={{borderBottomWidth: 1, borderColor: '#D6D6D6'}} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
          
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
            height: '30%',
            backgroundColor: '#f5f5f5',
          },
        }}>
        <View style={styles.sheetcontainer}>
          <TextBold
            alignSelf={'center'}
            fontSize={18}
            color={'#666666'}
            text={'Logout'}
          />
          <View style={styles.verticallinesheet} />
          <View style={styles.innercontainer}>
            <TextMedium
              fontSize={18}
              color={'#666666'}
              text={'Are you sure you want to logout?'}
            />
          </View>
          <View style={styles.inlinebuttons}>
            <TouchableOpacity
              onPress={() => {
                hideBottomSheet();
              }}
              style={styles.whitebtn}>
              <TextMedium fontSize={15} color={'#666666'} text={'CANCEL'} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Handlelogout();
              }}
              style={styles.primrybtn}>
              <TextMedium fontSize={15} color={'#fff'} text={'YES, LOGOUT'} />
            </TouchableOpacity>
          </View>
        </View>
   
      </RBSheet>
      
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
  sheetcontainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  verticallinesheet: {
    borderBottomWidth: 1,
    borderColor: '#666666',
    marginVertical: width(2),
  },
  innercontainer: {
    alignItems: 'center',
    marginVertical: width(5),
  },
  inlinebuttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  whitebtn: {
    borderWidth: 1,
    borderColor: '#666666',
    padding: 10,
    width: width(40),
    alignItems: 'center',
    borderRadius: 10,
  },
  primrybtn: {
    borderWidth: 1,
    borderColor: '#FF2A00',
    backgroundColor: '#FF2A00',
    padding: 10,
    width: width(40),
    alignItems: 'center',
    borderRadius: 10,
  },
});
