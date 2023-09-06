import {
    StyleSheet,
    Image,
    View,
    Modal,
  } from 'react-native';
  import React from 'react';
  import {height, width} from 'react-native-dimension';
  import {BlurView} from '@react-native-community/blur';
  import Lottie from 'lottie-react-native';
  import loaderjson from '../Assest/Images/loader .json';
  import TextMedium from '../component/TextMedium';
  import TextRegular from '../component/TextRegular';
import CustomButton from './CustomButton';

export default function CustomAlertButton(props) {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={props.visible}
        onRequestClose={props.onRequestClose}>
        <BlurView style={styles.blurstyle} blurType="light" blurAmount={10} />

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{marginVertical: width(4), alignItems: 'center'}}>
              <Image
                source={props.image}
                resizeMode="contain"
                style={{height: height(20)}}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <TextMedium
                color={'#333333'}
                fontSize={20}
                text={props.Alerttittle}
              />
              <View style={{width: width(70)}}>
                <TextRegular
                  textAlign={'center'}
                  color={'#333333'}
                  fontSize={16}
                  text={props.Alertmessage}
                /> 
              <View style={{alignItems:'center'}}>
                <CustomButton onPress={props.onPress} text={props.buttontext}/>
              </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
  )
}
const styles = StyleSheet.create({
    container: {
      resizeMode: 'cover',
      flex: 1,
      height: '100%',
      width: '100%',
      //   alignItems: 'center',
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
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      width: width(90),
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 10,
    },
    blurstyle: {
      flex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    gif: {
      height: height(10),
      alignSelf: 'center',
    },
  });
  