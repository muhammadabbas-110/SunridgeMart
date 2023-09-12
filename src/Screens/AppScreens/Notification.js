import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import BackButton from '../../component/BackButton';
import { height, width } from 'react-native-dimension';
import TextMedium from '../../component/TextMedium';
import TextRegular from '../../component/TextRegular';
import gift from '../../Assest/Images/gift.png';

export default function Notification(props) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      date: 'Today',
      title: '30% Special Discount',
      description: 'Special Promotion Only Valid Today',
    },
    {
      id: 2,
      date: 'Yesterday',
      title: 'Yesterday Notification 1',
      description: 'This is a notification from yesterday.',
    },
    {
      id: 3,
      date: 'Yesterday',
      title: 'Yesterday Notification 2',
      description: 'Another notification from yesterday.',
    },
    {
      id: 4,
      date: 'Yesterday',
      title: 'Yesterday Notification 3',
      description: 'One more notification from yesterday.',
    },
    {
      id: 5,
      date: 'Last Week',
      title: 'Last Week Notification 1',
      description: 'This is a notification from last week.',
    },
    {
      id: 6,
      date: 'Last Week',
      title: 'Last Week Notification 2',
      description: 'Another notification from last week.',
    },
  ]);

  const groupedNotifications = notifications.reduce((acc, notification) => {
    if (!acc[notification.date]) {
      acc[notification.date] = [];
    }
    acc[notification.date].push(notification);
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <View style={styles.searchengine}>
        <BackButton onPress={() => props.navigation.goBack()} heading={'My Notification'} />

        {groupedNotifications['Today'] && (
          <View style={styles.sectionContainer}>
            <TextMedium color={'#333333'} fontSize={18} text={'Today'} />
            {groupedNotifications['Today'].map((notification) => (
              <TouchableOpacity key={notification.id} style={styles.touchablecontainer}>
                <View style={styles.imagecontainer}>
                  <Image source={gift} style={styles.iconstyle} />
                </View>
                <View>
                  <TextMedium color={'#333333'} fontSize={14} text={notification.title} />
                  <TextRegular color={'#333333'} fontSize={10} text={notification.description} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {groupedNotifications['Yesterday'] && (
          <View style={styles.sectionContainer}>
            <TextMedium color={'#333333'} fontSize={18} text={'Yesterday'} />
            {groupedNotifications['Yesterday'].map((notification) => (
              <TouchableOpacity key={notification.id} style={styles.touchablecontainer}>
                <View style={styles.imagecontainer}>
                  <Image source={gift} style={styles.iconstyle} />
                </View>
                <View>
                  <TextMedium color={'#333333'} fontSize={14} text={notification.title} />
                  <TextRegular color={'#333333'} fontSize={10} text={notification.description} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {groupedNotifications['Last Week'] && (
          <View style={styles.sectionContainer}>
            <TextMedium color={'#333333'} fontSize={18} text={'Last Week'} />
            {groupedNotifications['Last Week'].map((notification) => (
              <TouchableOpacity key={notification.id} style={styles.touchablecontainer}>
                <View style={styles.imagecontainer}>
                  <Image source={gift} style={styles.iconstyle} />
                </View>
                <View>
                  <TextMedium color={'#333333'} fontSize={14} text={notification.title} />
                  <TextRegular color={'#333333'} fontSize={10} text={notification.description} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchengine: {
    margin: 10,
    marginTop: width(8),
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  sectionContainer: {
    width: width(95),
    marginVertical: width(2),
  },
  touchablecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 7,
    borderRadius: 8,
    borderColor: '#707070',
    marginVertical: 5,
  },
  imagecontainer: {
    backgroundColor: '#FF2A00',
    padding: 15,
    borderRadius: 30,
    marginHorizontal: width(2),
  },
  iconstyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
});
