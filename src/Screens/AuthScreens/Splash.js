import {StyleSheet, Image, SafeAreaView, ImageBackground} from 'react-native';
import React from 'react';
import background from '../../Assest/Images/background.png';
import logo from '../../Assest/Images/logo-color.png';
import {height} from 'react-native-dimension';
import * as Animatable from 'react-native-animatable';

export default function Splash(props) {
    setTimeout(() => {
        props.navigation.navigate('OnBoarding');
      }, 3000);
  return (
    <ImageBackground source={background} style={styles.container}>
      <Animatable.View
        animation="zoomInUp"
        useNativeDriver={true}
        duration={2000}
        delay={1000}>
        <Image source={logo} resizeMode="contain" style={styles.img} />
      </Animatable.View>
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
    height: height(20),
  },
});
