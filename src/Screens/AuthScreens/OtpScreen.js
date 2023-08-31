import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import background from '../../Assest/Images/whitebackground.png';
import {width} from 'react-native-dimension';
import TextRegular from '../../component/TextRegular';
import BackButton from '../../component/BackButton';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import fonts from '../../Assest/Fonts';
import CustomButton from '../../component/CustomButton';
const CELL_COUNT = 4;

export default function OtpScreen(props) {
  const [value, setValue] = useState('');
  const [remainingTime, setRemainingTime] = useState(60); // 60 seconds
  const [showResendButton, setShowResendButton] = useState(false); // Declare showResendButton state

  useEffect(() => {
    let interval;
    if (remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setShowResendButton(true);
    }

    return () => {
      clearInterval(interval);
    };
  }, [remainingTime]);

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [prop1s, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const handleResendOTP = () => {
    // Logic to resend OTP
    setRemainingTime(60); // Reset timer
    setShowResendButton(false); // Hide the resend button
  };
  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.containerback}>
        <BackButton  onPress={() => props.navigation.goBack()} heading={'Forgot Password'} />
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={{marginVertical: width(20), alignItems: 'center'}}>
          <TextRegular
            color={'#333333'}
            fontSize={16}
            text={'Code Has Been Send To'}
          />
          <TextRegular color={'#333333'} fontSize={16} text={'+1 111****33'} />
        </View>

        <CodeField
          ref={ref}
          {...prop1s}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: width(8),
          }}>
          {showResendButton ? (
            <TouchableOpacity onPress={handleResendOTP}>
              <TextRegular
                color={'#333333'}
                fontSize={16}
                text={'Resend OTP'}
              />
            </TouchableOpacity>
          ) : (
            <TextRegular
              color={'#333333'}
              fontSize={16}
              text={`Resend OTP in ${remainingTime} s`}
            />
          )}
        </View>
   
      </View>
      <View style={{position:'absolute',bottom:10,alignSelf:'center'}}>
              <CustomButton onPress={()=>{props.navigation.navigate("NewPasswordScreen")}} text={'CONTINUE'} />
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
  },
  containerback: {
    marginTop: width(9),
    alignSelf: 'flex-start',
    padding: 10,
    marginLeft: width(1),
  },

  vectorimgview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    alignSelf: 'flex-start',
  },
  imgstylee: {
    height: 5,
    width: 15,
  },
  codeFieldRoot: {
    marginTop: 10,
  },
  cell: {
    borderRadius: 10,
    width: 65,
    height: 65,
    lineHeight: 70,
    fontSize: 30,
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: '#FFFF',
    fontFamily: fonts.poppins.medium,
    color: '#000',
    borderWidth: 1,
    borderColor: '#00000030',
    textAlign: 'center',
  },
});
