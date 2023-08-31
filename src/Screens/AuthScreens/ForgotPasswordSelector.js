import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import background from '../../Assest/Images/whitebackground.png';
import emailsend from '../../Assest/Images/emailsend.png';
import forgotpass from '../../Assest/Images/forgotpass.png';
import chat from '../../Assest/Images/chat.png';
import {height, width} from 'react-native-dimension';
import TextRegular from '../../component/TextRegular';
import BackButton from '../../component/BackButton';

export default function ForgotPasswordSelector(props) {
  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.containerback}>
        <BackButton  onPress={() => props.navigation.goBack()} heading={'Forgot Password'} />
      </View>
      <View style={{marginTop: width(10)}}>
        <Image source={forgotpass} resizeMode="contain" style={styles.img} />
      </View>
      <View style={{width: width(70), marginVertical: width(10)}}>
        <TextRegular
          color={'#333333'}
          textAlign={'center'}
          fontSize={16}
          text={'Which Contact Details Should We Used To Rest Your Password'}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('OtpScreen');
        }}
        style={styles.firstbutton}>
        <View style={styles.iconcontainerred}>
          <Image source={chat} style={styles.icon} />
        </View>
        <View style={styles.spacing}>
          <TextRegular fontSize={18} color={'#333333'} text={'Via SMS'} />
          <TextRegular fontSize={18} color={'#333333'} text={'+1 111****33'} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('OtpScreen');
        }}
        style={styles.secoundbutton}>
        <View style={styles.secoundiconcontainer}>
          <Image source={emailsend} style={styles.icon} />
        </View>
        <View style={styles.spacing}>
          <TextRegular fontSize={18} color={'#333333'} text={'Via Email'} />
          <TextRegular
            fontSize={18}
            color={'#333333'}
            text={'info@email.com'}
          />
        </View>
      </TouchableOpacity>
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
    // justifyContent:'center'
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
  firstbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width(90),
    borderWidth: 2,
    padding: 15,
    borderRadius: 15,
    borderColor: '#FF2A00',
  },
  iconcontainerred: {
    backgroundColor: '#FF2A00',
    padding: 10,
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  spacing: {
    marginLeft: width(5),
  },
  secoundbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width(90),
    borderWidth: 2,
    padding: 15,
    borderRadius: 15,
    borderColor: '#D8D8D8',
    marginTop: width(5),
  },
  secoundiconcontainer: {
    backgroundColor: '#fff',
    padding: 10,
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D8D8D8',
    borderWidth: 2,
  },
});
