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
import {height, width} from 'react-native-dimension';
import BackButton from '../../component/BackButton';
import background from '../../Assest/Images/whitebackground.png';
import userr from '../../Assest/Images/userimage.png';
import usericon from '../../Assest/Images/user.png';
import emailicon from '../../Assest/Images/email.png';
import CustomTextinput from '../../component/CustomTextinput';
import CustomButton from '../../component/CustomButton';
import {AppRegex} from '../../constant';
import phoneicon from '../../Assest/Images/phone.png';
import CustomDatePicker from '../../component/CustomDatePicker';
import CustomDropDown from '../../component/CustomDropDown';
import { ImagePickerErrorCodes } from "../../constant";
import ImagePicker from 'react-native-image-crop-picker';
import TextRegular from '../../component/TextRegular';
import Modal from "react-native-modal";
import editprofile from '../../Assest/Images/editprofile.png';
import { showSettingsAlertForPermission,showConfirmationAlert} from "../../common";

export default function Signupscreen(props) {
  const [fullname, setfullname] = useState('');
  const [NickName, setNickName] = useState('');
  const [phoneno, setphoneno] = useState('');
  const [Email, setEmail] = useState('');
  const [onfocus, Setonfocus] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [imageUri, setImageUri] = useState();
  const [optionVisible,setOptionVisible]=useState(false)
  const [password, setPassword] = useState('');
  const [secureText,setSecureText]=useState(true);
  const [confirmSecureText,setConfirmSecureText]=useState(true)
  const [confirmPassword, setConfirmPassword] = useState('');
  const inputRef = useRef(null);
  const [value, setValue] = useState();
  const [newPassSecure, setNewPassSecure] = useState(true);
  const [confirmPassHide, setConfirmPassHide] = useState(false);

  const [validationMessage, setValidationMessage] = useState({
    email: '',
    password: '',
    repassword: '',
    name:'',
    nickname:'',
    phone:'',
    dob:'',
    gender:'',
})
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
 const ContinueButton=()=>{
  const validateInputs = () => {
    let check = true;
    let message = {
        email: '',
        password: '',
        repassword: ''
    };
    if (Email?.trim() == '') {
        check = false;
        message.email = 'Email is required';
    } else if (AppRegex.isInvalidate(Email, AppRegex.Email)) {
        check = false;
        message.email = 'Email is invalid'
    }
    if (password?.trim() == '') {
        check = false;
        message.password = 'Password is required';
    }
    else if (password?.trim().length < 8) {
        check = false;
        message.password = 'Must be at least 8 characters long'
    }
    else if (password?.trim() != confirmPassword?.trim()) {
        check = false;
        message.repassword = 'Password mismatch';
    }
    if(fullname?.trim()==""){
      check=false,
      message.name="Fullname is required"
    }
    else if (AppRegex.isInvalidate(fullname, AppRegex.name)) {
      check = false;
      message.name = 'Fullname is invalid'
  }
    if(NickName?.trim()==""){
      check=false,
      message.nickname="Nickname is required"
    }
    if(phoneno?.trim()==""){
      check=false,
      message.phone="Phone number is required"
    }



    setValidationMessage(message);
    return check;
};
const Submit=()=>{
  if (validateInputs()) {
   props.navigation.navigate('LoginScreen')
  }

}
  
  return(
  <View style={{alignItems: 'center'}}>
  <CustomButton 
  onPress={Submit}
  text={'CONTINUE'} />
</View>
 )
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

  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.containerback}>
        <BackButton onPress={() => props.navigation.goBack()}  heading={'Fill Your Profile'} />
      </View>
      <SafeAreaView style={styles.containersafearea}>
        <ScrollView
        keyboardShouldPersistTaps='handled'
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
           <TouchableOpacity style={styles.profileimgcontainer} 
      onPress={uploadImage}>
        <Image source={userr} style={styles.userimgpic} />

        <View style={{alignSelf: 'flex-end'}}>
          <Image source={editprofile} style={styles.editicon} />
        </View>
      </TouchableOpacity>
          <View>
            <CustomTextinput
            
              value={fullname}
              onChangeText={setfullname}
              placeholder={'Enter Full Name'}
              errorMessage={validationMessage.name}
            />
            <CustomTextinput
          
              value={NickName}
              onChangeText={setNickName}
              placeholder={'Enter Your  Nick Name'}
              errorMessage={validationMessage.nickname}
            />
            <CustomTextinput
              value={phoneno}
              onChangeText={setphoneno}
              placeholder={'Enter Your  Phone Number'}
              errorMessage={validationMessage.phone}
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
              errorMessage={validationMessage.email}
            />
             <CustomTextinput
              value={password}
              onChangeText={setPassword}
              Password={true}
              secureTextEntry={secureText}
           
              show={newPassSecure}
              showPress={()=>{setNewPassSecure(!newPassSecure)
              setSecureText(!secureText)}}
              hidePress={()=>{setNewPassSecure(!newPassSecure)
                setSecureText(!secureText)}}
              placeholder={'Enter Your  Password'}
              errorMessage={validationMessage.password}
            />
            <CustomTextinput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              Password={true}
              secureTextEntry={confirmSecureText}
              show={confirmPassHide}
              showPress={()=>{setConfirmPassHide(!confirmPassHide)
              setConfirmSecureText(!confirmSecureText)}}
              hidePress={()=>{setConfirmPassHide(!confirmPassHide)
                setConfirmSecureText(!confirmSecureText)}}
              placeholder={'Enter Your Confirm Password'}
              errorMessage={validationMessage.repassword}
            />
            <CustomDropDown value={value} setValue={setValue} />
         <ContinueButton/>
          </View>
        </ScrollView>
        <ImageModal/>
        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={handleDateChange}
          onCancel={closeDatePicker}
        />
      </SafeAreaView>
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
  userimgpic: {
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
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
  editicon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    right: width(7),
    bottom: width(5),
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
});
