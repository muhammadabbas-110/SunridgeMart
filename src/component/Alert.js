import {
    View,
    Text,
    Modal,
    Image,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';
  import {height, width} from 'react-native-dimension';
  import Lottie from 'lottie-react-native';
  import {BlurView} from '@react-native-community/blur';
  import fonts from '../Assest/Fonts';
  
  export default function Alert(props) {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.visible}
        onRequestClose={props.onRequestClose}>
        <BlurView style={styles.blurstyle} blurType="light" blurAmount={10} />
  
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Lottie
              source={props.source}
              // okaygif
              resizeMode="contain"
              style={styles.gif}
              autoPlay
              loop
            />
            <View style={styles.vieww}>
              <Text style={styles.msg}>{props.Message}</Text>
  
              <TouchableOpacity onPress={props.Button} style={styles.btn}>
                <Text style={styles.btntext}>Okay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
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
      height: height(12),
      alignSelf: 'center',
    },
    vieww: {
      marginHorizontal: width(8),
      alignItems: 'center',
      marginVertical: 5,
    },
    msg: {
      color: '#000',
      fontSize: 18,
      textTransform: 'uppercase',
      textAlign: 'center',
      fontFamily:fonts.poppins.bold,
    },
    btn: {
      backgroundColor: '#f15922',
      alignItems: 'center',
      justifyContent:'center',
      borderRadius: 30,
      height: height(6),
      width: width(35),
      marginTop: height(1.5),
    },
    btntext: {
      color: '#fff',
      fontSize: 17,
      fontWeight: 'bold',
    },
  });
  