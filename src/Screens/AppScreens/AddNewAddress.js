import { SafeAreaView, TextInput, View,  StyleSheet } from 'react-native';
import React, { useState } from 'react';
import BackButton from '../../component/BackButton';
import { height, width } from 'react-native-dimension';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { vw } from '../../constant';
import PlacesApiTextinput from '../../component/PlacesApiTextinput';
import TextMedium from '../../component/TextMedium';
import TextBold from '../../component/TextBold';
import { ScrollView } from 'react-native-gesture-handler';
import fonts from '../../Assest/Fonts';
import CheckBox from '@react-native-community/checkbox';
import TextRegular from '../../component/TextRegular';
import CustomButton from '../../component/CustomButton';

export default function AddNewAddress(props) {

  const [checked, setChecked] = useState(false);
  const markers = [
    {
      latitude: 37.78825,
      longitude: -122.4324,
      title: 'Marker 1',
      description: 'This is marker 1.', 
    },
    {
      latitude: 37.7,
      longitude: -122.5,
      title: 'Marker 2',
      description: 'This is marker 2.',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.searchengine}>
          <BackButton
            onPress={() => props.navigation.goBack()}
            heading={'Add New Address'}
          />
        </View>
        <View style={styles.containermap}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            {markers.map((marker, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                title={marker.title}
                description={marker.description}
              />
            ))}
          </MapView>
        </View>
        <View style={{ marginVertical: 10 }}>
          <TextBold
            fontSize={20}
            color={'#666666'}
            textAlign={'center'}
            text={'Address details'}
          />
          <View
            style={{
              borderBottomColor: ' #D6D6D6',
              borderWidth: 2,
              opacity: 0.2,
            }}
          />
          <View style={{ marginHorizontal: width(3) }}>
            <TextMedium
              marginVertical={5}
              fontSize={14}
              color={'#707070'}
              text={'Name Address'}
            />
            <TextInput
              placeholder="Enter Address"
              placeholderTextColor="#000"

              style={styles.textfiled}
            />
            <TextMedium
              marginVertical={5}
              fontSize={14}
              color={'#707070'}
              text={'Address Details'}
            />
          </View>
        </View>
        <PlacesApiTextinput />

        <View style={styles.View2}>
          <View style={styles.rowcheck}>
            <CheckBox
              disabled={false}
              value={checked}
              onCheckColor='#ffffff'
              onValueChange={(val) => {
                setChecked(val);
              }}
            />
            <TextRegular fontSize={14} text={'Make This As The Default Address'} />
          </View>
        </View>
      <View style={{marginBottom:5,alignItems:'center'}}>
        <CustomButton text={"Add"}/>
      </View>

      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchengine: {
    margin: 10,
    marginTop: width(8),
  },
  containermap: {
    height: vw * 100,
    width: vw * 100,
    alignItems: 'center',
    alignSelf: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  textfiled: {
    paddingHorizontal: 10,
    fontFamily: fonts.poppins.regular,
    fontSize: 16,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    elevation: 5,
    borderRadius: 10,
    bottom: 5,
    height: height(7),
  },
  View2: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowcheck: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 9,
  },
});
