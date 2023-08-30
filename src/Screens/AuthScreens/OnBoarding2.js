import {
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import background from '../../Assest/Images/background.png';
import itemimg from '../../Assest/Images/valuebox.png';
import pagination from '../../Assest/Images/pagination2.png';
import {height, width} from 'react-native-dimension';
import * as Animatable from 'react-native-animatable';
import TextBold from '../../component/TextBold';
import TextMedium from '../../component/TextMedium';
import TextRegular from '../../component/TextRegular';

export default function OnBoarding2(props) {
  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={itemimg} resizeMode="contain" style={styles.img} />

        <View style={styles.bottomView}>
          <Animatable.View
            animation="fadeInRight"
            useNativeDriver="true"
            duration={1000}
            delay={1000}>
            <TextBold
              text={'Your Satisfaction Is Our Nymber One Priority !'}
              fontSize={30}
              color={'#fff'}
              textAlign={'center'}
            />
            <View style={styles.mainimgview}>
              <Image source={pagination} style={styles.imgpag} />
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('OnBoarding3')}
              style={styles.touchablebtn}>
              <TextMedium fontSize={13} color={'#fff'} text={'NEXT'} />
            </TouchableOpacity>
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
    height: height(35),
    marginBottom: width(15),
  },
  bottomView: {
    opacity: 0.9,
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
  touchablebtn: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    padding: 10,
    width: width(40),
    alignItems: 'center',
    borderRadius: 10,
    marginTop: width(4),
  },
  imgpag: {
    resizeMode: 'contain',
    height: height(1),
  },
  mainimgview: {
    alignItems: 'center',
    marginVertical: 8,
  },
});
