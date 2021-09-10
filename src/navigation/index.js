import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator';
import COLORS from '@chatApp/commons/constants/colors';

const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: COLORS.background,
  },
};

const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
