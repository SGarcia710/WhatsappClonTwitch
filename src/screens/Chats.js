import React from 'react';
import {View, Text, ScrollView, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import COLORS from '@chatApp/commons/constants/colors';
import ChatItem from '@chatApp/components/ChatItem';

const Chats = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ScrollView
        bounces={false}
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Messages</Text>
          <Feather name="edit" size={23} color={COLORS.accentColor} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 30,
            marginBottom: 16,
            backgroundColor: COLORS.darkGray,
          }}>
          <Feather name="search" size={16} color={COLORS.gray} />
          <TextInput
            placeholderTextColor={COLORS.gray}
            style={{marginLeft: 8, flex: 1, color: 'white'}}
            placeholder="Search"
          />
        </View>
        <ChatItem />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitle: {color: 'white', fontSize: 32, fontWeight: 'bold'},
});

export default Chats;
