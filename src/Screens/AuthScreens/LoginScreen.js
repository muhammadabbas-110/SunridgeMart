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
} from 'react-native';
import {height, width} from 'react-native-dimension';
import BackButton from '../../component/BackButton';
import background from '../../Assest/Images/whitebackground.png';
import logo from '../../Assest/Images/unityxpress_logo.png';
import TextBold from '../../component/TextBold';
import lock from '../../Assest/Images/padlock.png';
import emailicon from '../../Assest/Images/email.png';
import CustomTextinput from '../../component/CustomTextinput';
import CheckBox from '@react-native-community/checkbox';
import TextRegular from '../../component/TextRegular';
import CustomButton from '../../component/CustomButton';
import fonts from '../../Assest/Fonts';
import Facebookimg from '../../Assest/Images/facebook.png';
import googleicon from '../../Assest/Images/google.png';
import TextMedium from '../../component/TextMedium';
import AsyncStorage from '@react-native-community/async-storage';
import {AppContext} from '../../context';

export default function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const {setUser} = useContext(AppContext); // Access setUser from the context

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
      setUser(userData);
    } else {
      alert('Invalid username or password');
    }
  };

  const submitdata = () => {
    if (email && Password) {
      handleLogin(email, Password);
    } else {
      alert('Please enter your fields');
    }
  };
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
            />
            <CustomTextinput
              image={lock}
              value={Password}
              onChangeText={setPassword}
              placeholder={'Enter Your Password'}
              secureTextEntry={true}
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
            <View style={{alignItems: 'center'}}>
              <CustomButton
                onPress={() => {
                  submitdata();
                }}
                text={'SIGN IN'}
              />
            </View>
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
