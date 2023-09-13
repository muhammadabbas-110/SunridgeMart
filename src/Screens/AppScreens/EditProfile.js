import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {height, width} from 'react-native-dimension';
import BackButton from '../../component/BackButton';
import background from '../../Assest/Images/whitebackground.png';
import userr from '../../Assest/Images/userimg.png';
import usericon from '../../Assest/Images/user.png';
import emailicon from '../../Assest/Images/email.png';
import CustomTextinput from '../../component/CustomTextinput';
import CustomButton from '../../component/CustomButton';
import phoneicon from '../../Assest/Images/phone.png';
import CustomDatePicker from '../../component/CustomDatePicker';
import CustomDropDown from '../../component/CustomDropDown';
import CustomAlert from '../../component/CustomAlert';
import alerticon from '../../Assest/Images/alerticon.png';

export default function editprofile(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [fullname, setfullname] = useState('');
  const [NickName, setNickName] = useState('');
  const [phoneno, setphoneno] = useState('');
  const [Email, setEmail] = useState('');
  const [onfocus, Setonfocus] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const [value, setValue] = useState();
  const openDatePicker = () => {
    setOpen(true);
  };

  const closeDatePicker = () => {
    setOpen(false);
  };

  const handleDateChange = selectedDate => {
    setDate(selectedDate);
    closeDatePicker();
  };
  const handlepress = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 3000);
  };
  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.containerback}>
        <BackButton
          onPress={() => props.navigation.goBack()}
          heading={'Edit Profile'}
        />
      </View>
      <SafeAreaView style={styles.containersafearea}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
         <TouchableOpacity style={styles.logoContainer}>
        <Image source={userr} resizeMode='contain' style={styles.img} />

        <View style={{alignSelf: 'flex-end'}}>
          <Image source={editprofile} style={styles.editicon} />
        </View>
      </TouchableOpacity>
          <View>
            <CustomTextinput
              value={fullname}
              onChangeText={setfullname}
              placeholder={'Enter Full Name'}
            />
            <CustomTextinput
              value={NickName}
              onChangeText={setNickName}
              placeholder={'Enter Your  Nick Name'}
            />
            <CustomTextinput
              value={phoneno}
              onChangeText={setphoneno}
              placeholder={'Enter Your  Phone Number'}
            />

            <CustomDatePicker
            right={true}
              onFocus={() => {
                Setonfocus(true);
                openDatePicker();
              }}
              onBlur={() => {
                Setonfocus(false);
              }}
              value={date.toLocaleDateString()}
            />
            <CustomTextinput
              imageRight={emailicon}
              value={Email}
              onChangeText={setEmail}
              placeholder={'Enter Your  Email'}
            />
            <CustomDropDown value={value} setValue={setValue} />
            <View style={{alignItems: 'center'}}>
              <CustomButton
                onPress={() => {
                  handlepress();
                }}
                text={'UPDATE'}
              />
            </View>
          </View>
        </ScrollView>
        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={handleDateChange}
          onCancel={closeDatePicker}
        />
      </SafeAreaView>
      <CustomAlert
        alertheading={'Congratulations'}
        textmessage={'Your profile has been updated'}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        image={alerticon}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    resizeMode: 'cover',
    flex: 1,
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
    marginTop: width(5),
  },
  img: {
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3E3E3',
    borderWidth: 1,
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
  textcontainer: {
    flex: 1,
    color: '#000',
    fontSize: 14,
  },
  searchSectionBlur: {
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
});
