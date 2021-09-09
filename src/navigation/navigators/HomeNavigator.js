import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CallsScreen, CameraScreen, ChatsScreen} from '@chatApp/screens';
import Settings from '@chatApp/screens/Settings';
import AD from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => {
        return {
          tabBarIcon: ({focused, size, color}) => {
            switch (route.name) {
              case 'Chats':
                return (
                  <AD
                    name="message1"
                    size={28}
                    color={focused ? 'white' : 'gray'}
                  />
                );
              case 'Calls':
                return (
                  <AD
                    name="phone"
                    size={28}
                    color={focused ? 'white' : 'gray'}
                  />
                );
              case 'Camera':
                return (
                  <AD
                    name="camerao"
                    size={28}
                    color={focused ? 'white' : 'gray'}
                  />
                );
              case 'Settings':
                return (
                  <AD
                    name="setting"
                    size={28}
                    color={focused ? 'white' : 'gray'}
                  />
                );
            }
          },
          tabBarShowLabel: false,
          headerShown: false,
        };
      }}>
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
