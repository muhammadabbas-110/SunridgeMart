import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {height, width} from 'react-native-dimension';
import TextMedium from '../../component/TextMedium';
import CustomTextinput from '../../component/CustomTextinput';
import glass from '../../Assest/Images/magnifying-glass.png';
import Polygon from '../../Assest/Images/Polygon.png';
import TextRegular from '../../component/TextRegular';
const deviceWidth = Dimensions.get('window').width;
export default function Faqs(props) {
    const [activeSection, setActiveSection] = useState(null);
  const sections = [
    {
      id: 1,
      title: 'What Is The Delivery Time Duration?',
      content:
        'This privacy policy ("Policy") describes how we collect, protect, and use the personally identifiable information ("Personal Information") you ("User", "you" or "your") provided on the Sunridge website and any of its products or services (collectively, "Website" or "Services"). It also describes the choices available to you regarding our use of your personal information and how you can access and update this information. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.',
    },
    {
      id: 2,
      title: 'How Can I Request For An Exchange?',
      content:
        "We receive and store any information you knowingly provide to us when you fill any online forms on the Website. You can choose not to provide us with certain information, but then you may not be able to take advantage of some of the Website's features.",
    },
    {
      id: 3,
      title: 'How Can I Cancel Our Entire Order?',
      content:
        "We receive and store any information you knowingly provide to us when you fill any online forms on the Website. You can choose not to provide us with certain information, but then you may not be able to take advantage of some of the Website's features.",
    },
    {
      id: 4,
      title: 'What Is The Process Of Order Cancellation?',
      content:
        "We receive and store any information you knowingly provide to us when you fill any online forms on the Website. You can choose not to provide us with certain information, but then you may not be able to take advantage of some of the Website's features.",
    },
    {
      id: 5,
      title: 'The Order I Have Received Is Incorrect. What Can I Do?',
      content:
        "We receive and store any information you knowingly provide to us when you fill any online forms on the Website. You can choose not to provide us with certain information, but then you may not be able to take advantage of some of the Website's features.",
    },
    {
      id: 6,
      title: 'What Is The Refund Policy?',
      content:
        "We receive and store any information you knowingly provide to us when you fill any online forms on the Website. You can choose not to provide us with certain information, but then you may not be able to take advantage of some of the Website's features.",
    },
    {
      id: 7,
      title: 'What Is The Timing For The Customer Care Service?',
      content:
        "We receive and store any information you knowingly provide to us when you fill any online forms on the Website. You can choose not to provide us with certain information, but then you may not be able to take advantage of some of the Website's features.",
    },
  ];
  const Category = [
    {
      id: 1,
      name: 'Donate Box',
    },
    {
      id: 2,
      name: 'Rice',
    },
    {
      id: 3,
      name: 'Value Bundle',
    },
    {
      id: 4,

      name: 'Besan',
    },
    {
      id: 5,
      name: 'Suji',
    },
    {
      id: 6,
      name: 'Maida',
    },
    {
      id: 7,
      name: 'Sugar',
    },
    {
      id: 8,
      name: 'Others',
    },
  ];
  const MostPopular = ({item}) => {
    return (
      <TouchableOpacity style={styles.popularcontainer}>
        <TextMedium fontSize={14} color={'#707070'} text={item.name} />
      </TouchableOpacity>
    );
  };
  const toggleSection = sectionId => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <FlatList
            data={Category}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <MostPopular item={item} />}
            contentContainerStyle={styles.flatListContainer}
          />
          <CustomTextinput image={glass} placeholder={'search'} />
        </View>
        <View>
          {sections.map((section, index) => (
            <View key={section.id} style={styles.section}>
              <TouchableOpacity
                onPress={() => toggleSection(section.id)}
                style={styles.headingstyle}>
                <View style={{width: width(70)}}>
                  <TextMedium
                    color={'#333333'}
                    fontSize={14}
                    text={section.title}
                  />
                </View>
                <Image source={Polygon} style={styles.imgicon} />
              </TouchableOpacity>
              {activeSection === section.id && (
                <View style={styles.content}>
                  <TextRegular
                    color={'#333333'}
                    fontSize={12}
                    textAlign={'justify'}
                    text={section.content}
                  />
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginHorizontal: width(4),
  },

  content: {
    padding: 10,
  },

  popularcontainer: {
    borderWidth: 1,
    borderColor: '#707070',
    padding: 8,
    margin: 5,
    marginHorizontal: 5,
    width: deviceWidth / 2.8 - 20,
    alignItems: 'center',
    borderRadius: 8,
  },
  flatListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  headingstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    elevation: 5,
    marginVertical: 7,
    borderRadius: 10,
  },
  imgicon: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
  },
});

