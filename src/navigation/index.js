import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator';

const Navigation = () => {
  return (
    // <ThemeProvider theme={darkColors}>
    <NavigationContainer theme={DarkTheme}>
      <RootNavigator />
    </NavigationContainer>
    // </ThemeProvider>
  );
};

export default Navigation;
