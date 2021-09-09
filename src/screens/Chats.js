import React from 'react';
import {View, Text} from 'react-native';
import FA from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import useAuthStore from '@chatApp/stores/AuthStore';

const userSelector = state => state.user;
const signoutSelector = state => state.signout;

const Chats = () => {
  const user = useAuthStore(userSelector);
  const signOut = useAuthStore(signoutSelector);
  console.log('user', user);
  return (
    <SafeAreaView>
      <Text style={{color: 'white'}}>Chats</Text>
      <FA name="glass" size={23} color="white" />

      <Button title="Cerrar Sesión" onPress={signOut} />
    </SafeAreaView>
  );
};

export default Chats;
