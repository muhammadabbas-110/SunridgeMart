import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import background from '../../Assest/Images/whitebackground.png';
import logo from '../../Assest/Images/unityxpress_logo.png';
import Facebookimg from '../../Assest/Images/facebook.png';
import googleicon from '../../Assest/Images/google.png';
import {height, width} from 'react-native-dimension';
import TextBold from '../../component/TextBold';
import TextRegular from '../../component/TextRegular';
import fonts from '../../Assest/Fonts';
import TextMedium from '../../component/TextMedium';
import CustomButton from '../../component/CustomButton';

export default function SignupSocial(props) {
  return (
    <ImageBackground source={background} style={styles.container}>
      <Image source={logo} resizeMode="contain" style={styles.img} />
      <TextBold fontSize={30} color={'#666666'} text={'Let’s You In!'} />
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.btnsocial}>
          <Image source={Facebookimg} style={styles.socialicons} />
          <TextRegular fontSize={16} text={'Continue With Facebook'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnsocial}>
          <Image source={googleicon} style={styles.socialicons} />
          <TextRegular fontSize={16} text={'Continue With Facebook'} />
        </TouchableOpacity>
        <View style={styles.viewww}>
          <View style={styles.verticalline} />
          <View>
            <Text style={styles.verticaltext}>Or</Text>
          </View>
          <View style={styles.verticalline} />
        </View>
      </View>
      <View style={styles.bottomview}>
        <CustomButton text={"Sign in with password"} onPress={() => props.navigation.navigate('LoginScreen')}/>
        <View style={styles.rowcontainer}>
          <TextMedium
            fontSize={12}
            color={'#707070'}
            text={'Do you have an account ?'}
          />
          <TouchableOpacity>
            <TextMedium fontSize={12} color={'#FF2A00'} text={'  Sign Up'} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    resizeMode: 'cover',
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    height: height(25),
    marginTop: width(10),
  },
  subcontainer: {
    marginTop: height(4),
  },
  btnsocial: {
    marginVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E3E3E3',
    borderRadius: 9,
    padding: 10,
    height: height(8),
    width: width(85),
    justifyContent: 'space-evenly',
  },
  socialicons: {
    resizeMode: 'contain',
    height: height(9),
    width: width(9),
  },
  verticalline: {
    flex: 1,
    height: 1.5,
    backgroundColor: '#C8C8C8',
  },
  verticaltext: {
    width: 50,
    textAlign: 'center',
    fontFamily: fonts.poppins.medium,
    color: '#333333',
    fontSize: 20,
  },
  viewww: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width(10),
  },
  bottomview: {
    alignItems: 'center',
    marginVertical: 8,
  },
  touchbtn: {
    backgroundColor: '#FF2A00',
    alignItems: 'center',
    padding: 12,
    width: width(60),
    borderRadius: 10,
    marginTop: height(2),
  },
  rowcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});
