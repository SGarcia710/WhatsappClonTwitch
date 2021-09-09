import * as React from 'react';
import {SigninScreen, SignupScreen} from '@chatApp/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeNavigator from './HomeNavigator';
import auth from '@react-native-firebase/auth';
import useAuthStore from '@chatApp/stores/AuthStore';

const Stack = createNativeStackNavigator();

const userSelector = state => state.user;

const RootNavigator = () => {
  const user = useAuthStore(userSelector);
  const setUser = useAuthStore(state => state.setUser);

  const [initializing, setInitializing] = React.useState(true);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => {
        return {
          headerShown: false,
        };
      }}>
      {!user && (
        <Stack.Group>
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Group>
      )}
      {!!user && <Stack.Screen name="Home" component={HomeNavigator} />}
    </Stack.Navigator>
  );
};

export default RootNavigator;
