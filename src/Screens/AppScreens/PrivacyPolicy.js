import {View, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import React, {useState} from 'react';
import BackButton from '../../component/BackButton';
import TextMedium from '../../component/TextMedium';
import TextRegular from '../../component/TextRegular';
import CustomButton from '../../component/CustomButton';
export default function PrivacyPolicy(props) {
  const data = [
    {
      id: 1,
      heading: 'Privacy Policy',
      content:
        'This privacy policy ("Policy") describes how we collect, protect, and use the personally identifiable information ("Personal Information") you ("User", "you" or "your") provided on the Sunridge website and any of its products or services (collectively, "Website" or "Services"). It also describes the choices available to you regarding our use of your personal information and how you can access and update this information. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.',
    },
    {
      id: 2,
      heading: 'Collection Of Personal Information',
      content:
        "We receive and store any information you knowingly provide to us when you fill any online forms on the Website. You can choose not to provide us with certain information, but then you may not be able to take advantage of some of the Website's features.",
    },
    {
      id: 3,
      heading: 'Collection Of Non-Personal Information',
      content:
        "When you visit the Website, our servers automatically record information that your browser sends. This data may include information such as your computer's IP address, browser type and version, operating system type and version, language preferences or the webpage you were visiting before you came to our Website, pages of our Website that you visit, the time spent on those pages, information you search for on our Website, access times and dates, and other statistics.",
    },
    {
      id: 4,
      heading: 'Use Of Collected Information',
      content:
        'Any of the information we collect from you may be used to send notification emails such as password reminders, updates, etc. run and operate our Website and Services. Non-personal information collected is used only to identify potential cases of abuse and establish statistical information regarding Website traffic and usage. This statistical information is not otherwise aggregated in such a way that would identify any particular user of the system.',
    },
    {
      id: 5,
      heading: 'Newsletters',
      content:
        'We offer electronic newsletters to which you may voluntarily subscribe at any time. You may choose to stop receiving our newsletter or marketing emails by following the unsubscribe instructions included in these emails or by contacting us.',
    },
    {
      id: 6,
      heading: 'Cookies',
      content:
        'The Website uses cookies to help personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you. We may use cookies to collect, store, and track information for statistical purposes to operate our Website and Services. You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.',
    },
  ];
  const renderItem = ({item}) => (
    <View style={styles.section}>
      <TextMedium fontSize={18} color={'#333'} text={item.heading} />
      <TextRegular fontSize={14} color={'#666'} text={item.content} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchengine}>
        <BackButton
          onPress={() => props.navigation.goBack()}
          heading={'Privacy Policy'}
        />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
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
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
