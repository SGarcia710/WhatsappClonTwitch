import COLORS from '@chatApp/commons/constants/colors';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const ChatItem = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Chat')}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 64,
          height: 64,
          borderRadius: 64 / 2,
          borderWidth: 2,
          borderColor: COLORS.accentColor,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            width: 54,
            height: 54,
            borderRadius: 54 / 2,
          }}
          source={{
            uri: 'https://images.pexels.com/photos/4577583/pexels-photo-4577583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          }}
        />
      </View>
      <View style={{flex: 1, marginLeft: 12}}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 4,
          }}
          numberOfLines={1}>
          Emilia Clark
        </Text>
        <Text
          style={{
            color: 'white',
            lineHeight: 20,
          }}
          numberOfLines={2}>
          Oye, vuelve a casa, maldito, te estoy esperando. Hay que comprar
          mercado.
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: COLORS.accentColor,
            fontSize: 12,
            marginBottom: 8,
          }}>
          23min
        </Text>
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 20 / 2,
            backgroundColor: COLORS.accentColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 12,
            }}>
            2
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;
