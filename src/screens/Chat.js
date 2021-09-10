import React from 'react';
import {View, Text} from 'react-native';
import database from '@react-native-firebase/database';

const Chat = () => {
  const reference = database().ref('/chat');
  reference.once('value').then(snapshot => console.log(snapshot.val()));
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Chat;
