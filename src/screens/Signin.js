import useAuthStore from '@chatApp/stores/AuthStore';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';

const signinSelector = state => state.signin;
const loaderSelector = state => state.loading;

const Signin = props => {
  const [showPassword, setShowPassword] = React.useState(false);

  const [data, setData] = React.useState({
    password: '',
    email: '',
  });

  const signin = useAuthStore(signinSelector);
  const loading = useAuthStore(loaderSelector);

  const onSubmit = () => {
    signin(data.email, data.password);
  };

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 25,
        paddingTop: 18,
        backgroundColor: '#18171F',
        flex: 1,
      }}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={16}
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 34,
              color: 'white',
              marginBottom: 14,
            }}>
            Let's sign you in.
          </Text>
          <Text
            style={{
              fontSize: 34,
              color: 'white',
              marginBottom: 42,
            }}>
            Welcome back {'\n'}You've been missed!
          </Text>

          <TextInput
            style={{
              ...styles.inputText,
              ...styles.input,
            }}
            placeholder="Email"
            placeholderTextColor="#888692"
            autoCompleteType="email"
            autoCapitalize={false}
            keyboardType="email-address"
            onChangeText={text => setData({...data, email: text})}
          />
          <View
            style={{
              flexDirection: 'row',
              ...styles.input,
              justifyContent: 'space-between',
            }}>
            <TextInput
              style={{...styles.inputText, flex: 1}}
              onChangeText={text => setData({...data, password: text})}
              placeholder="Password"
              secureTextEntry={showPassword ? false : true}
              placeholderTextColor="#888692"
              textContentType="password"
            />

            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}>
              <Entypo
                name={showPassword ? 'eye-with-line' : 'eye'}
                size={24}
                color="#888692"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
          <Text
            style={{
              color: '#888692',
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Don't have an account?{' '}
            <Text style={{fontWeight: '800', color: 'white'}}>Register</Text>
          </Text>
        </TouchableOpacity>
        {!!loading && <ActivityIndicator style={{marginTop: 16}} />}
        {!loading && (
          <TouchableOpacity
            disabled={data.email === '' || data.password === ''}
            onPress={onSubmit}
            style={styles.buttonContainer}>
            <Text style={styles.textButton}>Sign In</Text>
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 14,
    marginBottom: 16,
    backgroundColor: '#1D1C23',
  },
  inputText: {
    fontWeight: '600',
    fontSize: 16,
    color: 'white',
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 16,
    marginTop: 24,
  },
  textButton: {
    color: '#18171F',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Signin;
