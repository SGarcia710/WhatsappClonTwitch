import React, {useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ScrollView,
} from 'react-native';
import database from '@react-native-firebase/database';
import useAuthStore from '@chatApp/stores/AuthStore';
import COLORS from '@chatApp/commons/constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useChat from '@chatApp/stores/useChatStore';
import {useForm} from 'react-hook-form';

const userSelector = state => state.user;
const Chat = props => {
  const user = useAuthStore(userSelector);
  const input = useRef(null);
  const params = props.route.params;
  const scrollView = useRef(null);

  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    reset,
  } = useForm();

  // https://reactnative.dev/docs/keyboard
  // Con esto se podria hacer scroll hacia abajo cuando abramos el keyboard

  const {messages, sendMessage} = useChat();
  const onSendMessage = handleSubmit((data, e) => {
    if (data.message) {
      const _message = {content: data.message, email: user.email};
      reset();
      input.current?.clear();
      sendMessage(_message);
    }
  });

  React.useEffect(() => {
    register('message');
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior="padding">
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={props.navigation.goBack}>
            <Ionicons
              name="chevron-back"
              size={28}
              color={COLORS.accentColor}
            />
            <View style={styles.goBackCounter}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                }}>
                102
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Image
              style={styles.headerImage}
              source={{uri: params.user.avatar}}
            />
            <Text style={styles.headerText}>{params.user.name}</Text>
          </View>
        </View>
        {/* MESSAGES */}
        <ScrollView
          contentContainerStyle={{
            paddingTop: 24,
          }}
          ref={scrollView}
          onContentSizeChange={() =>
            scrollView.current?.scrollToEnd({animated: true})
          }
          style={styles.messagesContainer}>
          {React.Children.toArray(
            Object.values(messages).map(message => (
              <View
                style={[
                  styles.messageContainer,
                  {
                    backgroundColor:
                      user.email === message.name
                        ? COLORS.accentColor
                        : COLORS.gray,
                    alignSelf:
                      user.email === message.name ? 'flex-end' : 'flex-start',
                  },
                ]}>
                <Text style={styles.messageText}>{message.content}</Text>
              </View>
            )),
          )}
        </ScrollView>
        {/* INPUT */}
        <View style={styles.messageInputContainer}>
          <TextInput
            ref={input}
            onChangeText={text => setValue('message', text)}
            style={styles.input}
            placeholderTextColor={COLORS.gray}
            placeholder="Write your message..."
          />
          <TouchableOpacity onPress={onSendMessage} style={styles.sendButton}>
            <Ionicons name="send" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  messagesContainer: {
    paddingHorizontal: 16,
    flex: 1,
  },
  messageContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 30,
    marginBottom: 10,
  },
  messageText: {
    color: 'white',
  },
  header: {
    alignItems: 'center',
    width: '100%',
    paddingBottom: 12,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 10,
    top: 0,
  },
  headerImage: {
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageInputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 16,
    height: 44,
    color: 'white',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    backgroundColor: COLORS.accentColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBackCounter: {
    backgroundColor: COLORS.accentColor,
    borderRadius: 24,
    paddingHorizontal: 6,
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -4,
  },
});

export default Chat;
