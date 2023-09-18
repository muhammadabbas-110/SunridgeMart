import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import background from '../../Assest/Images/whitebackground.png';
import forgotpass from '../../Assest/Images/forgotpass.png';
import {height, width} from 'react-native-dimension';
import TextRegular from '../../component/TextRegular';
import BackButton from '../../component/BackButton';
import CustomTextinput from '../../component/CustomTextinput';
import lock from '../../Assest/Images/padlock.png';
import CustomButton from '../../component/CustomButton';
import alerticon from '../../Assest/Images/alerticon.png';
import CustomAlert from '../../component/CustomAlert';
export default function NewPasswordScreen(props) {
  const [Password, setPassword] = useState('');
  const [newpassword, setnewpassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [newPassSecure, setNewPassSecure] = useState(true);
  const [confirmPassHide, setConfirmPassHide] = useState(true);
  const [secureText,setSecureText]=useState(true);
  const [confirmSecureText,setConfirmSecureText]=useState(true)
  const [validationMessage, setValidationMessage] = useState({
    password: '',
    repassword: '',
  
})

 
  const ContinueButton=()=>{
    const validateInputs = () => {
      let check = true;
      let message = {
          password: '',
          repassword: ''
      };
     
      if (Password?.trim() == '') {
          check = false;
          message.password = 'Password is required';
      }
      else if (Password?.trim().length < 8) {
          check = false;
          message.password = 'Must be at least 8 characters long'
      }
      else if (newpassword?.trim() != newpassword?.trim()) {
          check = false;
          message.repassword = 'Password mismatch';
      }
    
      setValidationMessage(message);
      return check;
  };
  const handlepress = () => {
    if(validateInputs()){
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      props.navigation.navigate('LoginScreen')
    }, 3000);
  }
  };
    return(
      <View style={{alignItems: 'center'}}>
      <CustomButton onPress={() => handlepress()} text={'CONTINUE'} />
    </View>
    )
  }
  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.containerback}>
        <BackButton  onPress={() => props.navigation.goBack()} heading={'Forgot Password'} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}
       keyboardShouldPersistTaps='handled'>
        <View style={{marginTop: width(10), alignItems: 'center'}}>
          <Image source={forgotpass} resizeMode="contain" style={styles.img} />
        </View>
        <View
          style={{
            width: width(70),
            marginVertical: width(10),
            alignSelf: 'center',
          }}>
          <TextRegular
            color={'#333333'}
            textAlign={'center'}
            fontSize={16}
            text={'Create Your New Password'}
          />
        </View>
        <View>
          <CustomTextinput
            image={lock}
            value={Password}
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
            image={lock}
            value={newpassword}
            onChangeText={setnewpassword}
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
         <ContinueButton/>
        </View>
      </ScrollView>
      <CustomAlert
        alertheading={"Congratulations"}
        textmessage={'Your Account Is Ready To Use. You Will Be Redirect To The Home Page In A Few Seconds.!!'}
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
    height: '100%',
    width: '100%',
  },
  containerback: {
    marginTop: width(9),
    alignSelf: 'flex-start',
    padding: 10,
    marginLeft: width(1),
  },
  img: {
    height: height(25),
    marginTop: width(10),
  },
});
