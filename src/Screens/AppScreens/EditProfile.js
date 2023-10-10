import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Modal from "react-native-modal";
import {height, width} from 'react-native-dimension';
import BackButton from '../../component/BackButton';
import background from '../../Assest/Images/whitebackground.png';
import userr from '../../Assest/Images/userimg.png';
import usericon from '../../Assest/Images/user.png';
import { ImagePickerErrorCodes } from "../../constant";
import emailicon from '../../Assest/Images/email.png';
import { showSettingsAlertForPermission,showConfirmationAlert} from "../../common";
import ImagePicker from 'react-native-image-crop-picker';
import CustomTextinput from '../../component/CustomTextinput';
import CustomButton from '../../component/CustomButton';
import phoneicon from '../../Assest/Images/phone.png';
import CustomDatePicker from '../../component/CustomDatePicker';
import CustomDropDown from '../../component/CustomDropDown';
import CustomAlert from '../../component/CustomAlert';
import alerticon from '../../Assest/Images/alerticon.png';
import TextRegular from '../../component/TextRegular';
import cameraIcon from '../../Assest/Images/editprofile.png';

export default function editprofile(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [catPageNo,setCatPageNo]=useState()
  const [productPageNo,setproductPageNo]=useState()
  const [fullname, setfullname] = useState('');
  const [NickName, setNickName] = useState('');
  const [phoneno, setphoneno] = useState('');
  const [Email, setEmail] = useState('');
  const [onfocus, Setonfocus] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [imageUri, setImageUri] = useState();
  const inputRef = useRef(null);
  const [optionVisible,setOptionVisible]=useState(false)
  const [value, setValue] = useState();
  const openDatePicker = () => {
    setOpen(true);
  };

  const closeDatePicker = () => {
    setOpen(false);
  };

  const handleDateChange = selectedDate => {
    setDate(selectedDate);
    closeDatePicker();
  };
  const uploadImage = () => {
    setOptionVisible(true);
    console.log('hello')
 }
 const selectImage = () => {
  setOptionVisible(false);
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
       if (error.code == ImagePickerErrorCodes.permissionMissing) {
        showSettingsAlertForPermission('photos');
    }  
   });
 }
 const useCamera = () => {
  setOptionVisible(false);
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
       if (error.code == ImagePickerErrorCodes.cameraPermission) {
        showSettingsAlertForPermission('camera');
    }
       
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
  const handlepress = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 3000);
  };
  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.containerback}>
        <BackButton
          onPress={() => props.navigation.goBack()}
          heading={'Edit Profile'}
        />
      </View>
      <SafeAreaView style={styles.containersafearea}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={styles.profileimgcontainer} 
      onPress={uploadImage}>
        <Image source={userr} style={styles.userimgpic} />

        <View style={{alignSelf: 'flex-end'}}>
          <Image source={cameraIcon} style={styles.editicon} />
        </View>
      </TouchableOpacity>
       
          <View>
            <CustomTextinput
              value={fullname}
              onChangeText={setfullname}
              placeholder={'Enter Full Name'}
            />
            <CustomTextinput
              value={NickName}
              onChangeText={setNickName}
              placeholder={'Enter Your  Nick Name'}
            />
            <CustomTextinput
              value={phoneno}
              onChangeText={setphoneno}
              placeholder={'Enter Your  Phone Number'}
            />

            <CustomDatePicker
            right={true}
              onFocus={() => {
                Setonfocus(true);
                openDatePicker();
              }}
              onBlur={() => {
                Setonfocus(false);
              }}
              value={date.toLocaleDateString()}
            />
            <CustomTextinput
              imageRight={emailicon}
              value={Email}
              onChangeText={setEmail}
              placeholder={'Enter Your  Email'}
            />
            <CustomDropDown value={value} setValue={setValue} />
            <View style={{alignItems: 'center'}}>
              <CustomButton
                onPress={() => {
                  handlepress();
                }}
                text={'UPDATE'}
              />
            </View>
          </View>
        </ScrollView>
        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={handleDateChange}
          onCancel={closeDatePicker}
        />
              <ImageModal/>
      </SafeAreaView>
      <CustomAlert
        alertheading={'Congratulations'}
        textmessage={'Your profile has been updated'}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        image={alerticon}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    resizeMode: 'cover',
    flex: 1,
  },
  containersafearea: {
    flex: 1,
  },
  containerback: {
    marginTop: width(9),
    alignSelf: 'flex-start',
    padding: 10,
    marginLeft: width(3),
  },
  scrollView: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: width(5),
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
  img: {
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3E3E3',
    borderWidth: 1,
    elevation: 5,
    borderRadius: 10,
    margin: 10,
    height: height(8),
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    marginHorizontal: 10,
    height: 25,
    width: 25,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  textcontainer: {
    flex: 1,
    color: '#000',
    fontSize: 14,
  },
  searchSectionBlur: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    elevation: 5,
    borderRadius: 10,
    margin: 10,
    height: height(8),
  },
  editicon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    right: width(7),
    bottom: width(5),
  }
});
