import {StyleSheet, Image, Text, ImageBackground, View} from 'react-native';
import React from 'react';
import background from '../../Assest/Images/background.png';
import logo from '../../Assest/Images/logo-color.png';
import {height} from 'react-native-dimension';
import * as Animatable from 'react-native-animatable';
import TextBold from '../../component/TextBold';
import TextMedium from '../../component/TextMedium';
import TextRegular from '../../component/TextRegular';

export default function OnBoarding(props) {
    setTimeout(() => {
        props.navigation.navigate('OnBoarding1');
      }, 3000);
  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={logo} resizeMode="contain" style={styles.img} />

        <View style={styles.bottomView}>
          <Animatable.View
            animation='fadeInRight'
            useNativeDriver="true"
            duration={1000}
            delay={1000}>
            <TextMedium fontSize={20} color={'#fff'} text={'Welcome To'} />
            <TextBold text={'Sunridge Foods'} fontSize={32} color={'#fff'} />
            <TextRegular
              text={
                ' Sunridge aims to provide food for life. We transform crops into  products that serve the vital global needs of the food sector in this ever-growing world.'
              }
              color={'#fff'}
              fontSize={15}
            />
          </Animatable.View>
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
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: height(20),
  },
  bottomView: {
    opacity:0.9,
    backgroundColor: '#FF2A00',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 16,
    width: '100%',
    height: height(35),
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
});
