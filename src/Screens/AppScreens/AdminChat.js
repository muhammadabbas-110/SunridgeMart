import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Bubble, GiftedChat, Send, InputToolbar} from 'react-native-gifted-chat';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {LogBox} from 'react-native';
import {Provider, Appbar, Card} from 'react-native-paper';
import BackButton from '../../component/BackButton';
import {height, width} from 'react-native-dimension';

LogBox.ignoreLogs(['EventEmitter.removeListener']);
export default function AdminChat(props) {
  const [messages, setMessages] = useState([]);
  const [sender_id, setsender_id] = useState(2);

  useEffect(() => {
    setMessages([
      {
        _id: 6,
        text: 'So, while you were gone, a lot has happened.Let me give you a brief idea.',
        createdAt: new Date(),

        user: {
          _id: 3,
          name: 'React Natives',
        },
      },
      {
        _id: 5,
        text: 'So, while you were gone, a lot has happened.Let me give you a brief idea.',
        createdAt: new Date(),

        user: {
          _id: 3,
          name: 'React Natives',
        },
      },
      {
        _id: 4,
        text: 'So, while you were gone, a lot has happened.Let me give you a brief idea.',
        createdAt: new Date(),

        user: {
          _id: 2,
          name: 'React Native',
        },
      },
      {
        _id: 3,
        text: 'Yeah. Right! As if that would hapeen !',
        createdAt: new Date(),

        user: {
          _id: 2,
          name: 'React Native',
        },
      },

      {
        _id: 2,
        text: 'Goodnight!',
        createdAt: new Date(),

        user: {
          _id: 3,
          name: 'React Natives',
        },
      },
      {
        _id: 1,
        text: 'So, while you were gone, a lot has happened.Let me give you a brief idea.',
        createdAt: new Date(),

        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#FF2A00',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

  const renderInputToolbar = props => {
    return <InputToolbar {...props} textInputStyle={{color: '#000'}} />;
  };

  const renderAttachment = props => {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          //   onPress={selectFile}
          style={styles.gallerycontainer}>
          <Image
            source={require('../../Assest/Images/gallery.png')}
            style={styles.galleryicon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Provider>
        <Appbar.Header theme={{colors: {primary: '#1C1C28'}}}>
          <View style={styles.searchengine}>
            <BackButton
              onPress={() => props.navigation.goBack()}
              heading={'Customer Service'}
            />
          </View>
        </Appbar.Header>

        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: sender_id,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          }}
          renderActions={renderAttachment}
          scrollToBottom
          scrollToBottomComponent={scrollToBottomComponent}
          renderBubble={renderBubble}
          alwaysShowSend
          renderInputToolbar={renderInputToolbar}
        />
      </Provider>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  searchengine: {
    margin: 10,
  },
  gallerycontainer: {
    marginHorizontal: 5,
    bottom: width(1),
    height: 30,
    width: 30,
    flexDirection: 'column',
  },
  galleryicon: {
    height: 20,
    width: 20,
    padding: 0,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
