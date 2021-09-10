import useAuthStore from '@chatApp/stores/AuthStore';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const signoutSelector = state => state.signout;

const Settings = () => {
  const signout = useAuthStore(signoutSelector);
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 16}}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <TouchableOpacity onPress={signout}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
          }}>
          Sign out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  headerTitle: {color: 'white', fontSize: 32, fontWeight: 'bold'},
});

export default Settings;
