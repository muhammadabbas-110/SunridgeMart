import {View } from 'react-native';
import React from 'react';
import { height, width } from 'react-native-dimension';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function PlacesApiTextinput(props) {
  return (
    <View style={{}}>
      <GooglePlacesAutocomplete
        placeholder='Search for a place'
        minLength={2} // Minimum length of text to search
        autoFocus={false}
        textInputProps={{
            placeholderTextColor: 'black',
          }}
        returnKeyType={'search'} // Can be changed to 'default' or 'search'
        listViewDisplayed='auto'    // true/false/undefined
        fetchDetails={true}
        onFail={(e) => console.log(e, "onFailonFailonFailonFail")}
        onTimeout={(e) => console.log(e, "onTimeoutonTimeout")}
        onNotFound={(e) => console.log(e, "onNotFoundonNotFoundonNotFound")}
        renderDescription={row => row.description} // custom description render
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyCV1TD4IiQ0XoH6t6NwI9b-vudoLWhwsEU',
          language: 'en',
        }}
        styles={{
          container: {
            flex: 1,
          },
          textInput: {
            fontSize: 16,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            borderWidth: 1,
            elevation: 5,
            borderRadius: 10,
            margin: 10,
            bottom:width(6), 
            height: height(7),
          },
          description: {
            fontWeight: 'bold',
          },
        }}
        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        currentLocationLabel="Current location"
        nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GooglePlacesSearchQuery={{
          // Available options for GooglePlacesSearch API: https://developers.google.com/places/web-service/search
          rankby: 'distance',
          type: 'cafe',
        }}
        GoogleReverseGeocodingQuery={{
          // Available options for GoogleReverseGeocoding API: https://developers.google.com/maps/documentation/geocoding/start
        }}
        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      />
      </View>
  )
}