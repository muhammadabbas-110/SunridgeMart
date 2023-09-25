import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import {height, width} from 'react-native-dimension';
import BackButton from '../../component/BackButton';
import background from '../../Assest/Images/whitebackground.png';
import {AppRegex} from '../../constant';
import logo from '../../Assest/Images/unityxpress_logo.png';
import ApiManager from '../../Api/ApiManager';
import TextBold from '../../component/TextBold';
import lock from '../../Assest/Images/padlock.png';
import errorgif from '../../Assest/Images/errorgif.json';
import emailicon from '../../Assest/Images/email.png';
import CustomTextinput from '../../component/CustomTextinput';
import CheckBox from '@react-native-community/checkbox';
import TextRegular from '../../component/TextRegular';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../component/CustomButton';
import fonts from '../../Assest/Fonts';
import Facebookimg from '../../Assest/Images/facebook.png';
import { SigninService } from '../../Api/Authentication';
import googleicon from '../../Assest/Images/google.png';
import TextMedium from '../../component/TextMedium';
import AsyncStorage from '@react-native-community/async-storage';
import { authUser,logIn,setUser} from '../../redux/slices/authReducer';
import {AppContext} from '../../context';
import Alert from '../../component/Alert';

export default function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [secureText,setSecureText]=useState(true);
  const [loading,setLoading]=useState(false);
  const [newPassSecure, setNewPassSecure] = useState(true);
  const [modelVisibleError,setModalVisbileError]=useState(false)
const [apiError,setApiError]=useState('');
  const [validationMessage,setValidationMessage]=useState({
    email:'',
    password:'',
  })
  //const {setUser} = useContext(AppContext); // Access setUser from the context
const dispatch=useDispatch();
const LoginButton=()=>{
  const validateInputs = () => {
   
    let check = true;
    let message = {
        email: '',
        password: '',
        
    };
    if (email?.trim() == '') {
        check = false;
        message.email = 'Email is required';
    } else if (AppRegex.isInvalidate(email, AppRegex.Email)) {
        check = false;
        message.email = 'Email is invalid'
    }
    if (Password?.trim() == '') {
        check = false;
        message.password = 'Password is required';
    }
    
 
    setValidationMessage(message);
    return check;
};
  const handleLogin = async (username, password) => {
    console.log(
      'Logging in with username:',
      username,
      'and password:',
      password,
    );
    if (username === 'admin' && password === '123') {
      const userData = {username: 'admin'};
      await AsyncStorage.setItem('isUser', JSON.stringify(userData));
 
     dispatch(setUser(userData));
     dispatch(logIn(userData));
    } else {
      alert('Invalid username or password');
    }
  };

  const submitdata = () => {
   
    if (validateInputs()) {
      setLoading(true)
      ApiManager.fetch(SigninService,
        {
          email:email,
          password:Password
        },
        onApiResponse,onApiError)
     // handleLogin(email, Password);
    } 
  };
  const onApiResponse = async(response) => {
   
  console.log('Api response',response?.data?.data)
  const userInfo=response?.data?.data;
  const userData = {email:userInfo?.email,
    token:userInfo?.token
  };
 await AsyncStorage.setItem('isUser', JSON.stringify(userData));
 dispatch(setUser(userData));
dispatch(logIn(userData));
setLoading(false)
    };
    const onApiError = (error) => {
      setLoading(false);
      if(error?.response?.data?.message)
      setApiError(error?.response?.data?.message)
    else  setApiError("Login Failed")
    setModalVisbileError(true);
    };
  return(
    <View style={{alignItems: 'center'}}>
     {loading ?
     <ActivityIndicator color={'orange'} size={35} />
   
              :<CustomButton
                onPress={() => {
                  submitdata();
                }}
                text={'SIGN IN'}
              />
}
            </View>

  )
}
  
  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.containerback}>
        <BackButton onPress={() => props.navigation.goBack()} />
      </View>
      <SafeAreaView style={styles.containersafearea}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <View style={styles.logoContainer}>
            <Image source={logo} resizeMode="contain" style={styles.img} />
            <TextBold
              fontSize={27}
              color={'#666666'}
              text={'Create Yor Account'}
            />
          </View>
          <View>
            <CustomTextinput
              image={emailicon}
              value={email}
              onChangeText={setEmail}
              placeholder={'Enter Your Email'}
              errorMessage={validationMessage.email}
            />
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
            <View style={styles.View2}>
              <View style={styles.rowcheck}>
                <CheckBox
                  disabled={false}
                  value={checked}
                  onCheckColor="#ffffff"
                  onValueChange={val => {
                    setChecked(val);
                  }}
                />
                <TextRegular fontSize={14} text={'Remember me'} />
              </View>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('ForgotPasswordSelector');
                }}
                style={{marginRight: width(4)}}>
                <TextRegular
                  fontSize={14}
                  color={'#FF2A00'}
                  text={'Forget Password'}
                />
              </TouchableOpacity>
            </View>
            <LoginButton/>
            <View style={styles.viewww}>
              <View style={styles.verticalline} />
              <View>
                <Text style={styles.verticaltext}>Or Continue with</Text>
              </View>
              <View style={styles.verticalline} />
            </View>
            <View style={styles.socialcontainer}>
              <TouchableOpacity style={styles.backgroundsocial}>
                <Image source={Facebookimg} style={styles.iconsocial} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.backgroundsocial}>
                <Image source={googleicon} style={styles.iconsocial} />
              </TouchableOpacity>
            </View>
            <View style={styles.bottomview}>
              <View style={styles.rowcontainer}>
                <TextMedium
                  fontSize={12}
                  color={'#707070'}
                  text={'Do you have an account ?'}
                />
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Signupscreen')}>
                  <TextMedium
                    fontSize={12}
                    color={'#FF2A00'}
                    text={'  Sign Up'}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Alert
          visible={modelVisibleError}
         source={errorgif}
          Message={apiError}
          Button={() => {
            setModalVisbileError(!modelVisibleError);
          }}
        />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    resizeMode: 'cover',
    flex: 1,
    alignItems: 'center',
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
    marginTop: width(10),
  },
  img: {
    height: height(25),
  },
  sectionStyle: {
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
  imageStyle: {
    padding: 10,
    margin: 5,
    marginHorizontal: 10,
    height: 25,
    width: 25,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  View2: {
    marginVertical: width(2),
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  rowcheck: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 9,
  },
  viewww: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width(10),
  },
  verticalline: {
    marginHorizontal: 10,
    flex: 1,
    height: 1.5,
    backgroundColor: '#C8C8C8',
  },
  verticaltext: {
    textAlign: 'center',
    fontFamily: fonts.poppins.medium,
    color: '#333333',
    fontSize: 20,
  },
  socialcontainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: width(1),
  },
  backgroundsocial: {
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 10,
  },
  iconsocial: {
    resizeMode: 'contain',
    height: height(3),
    width: width(7),
  },
  bottomview: {
    alignItems: 'center',
    marginVertical: 8,
  },
  rowcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});
