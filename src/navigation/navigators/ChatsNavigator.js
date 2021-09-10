import * as React from 'react';
import {ChatScreen, ChatsScreen} from '@chatApp/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ChatsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => {
        return {
          headerShown: false,
        };
      }}>
      <Stack.Screen name="List" component={ChatsScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default ChatsNavigator;
