import React, {useState, useEffect} from 'react';
import database from '@react-native-firebase/database';
import create from 'zustand';
import {v4} from 'uuid';

const DB_CHATS = '/chat';
const reference = database().ref('/chat');

// Imprime lo que hay en la referencia
// reference.once('value').then(snapshot => console.log(snapshot.val()));

export const useChatStore = create(set => {
  return {
    messages: {},
    addMessage: newMessage =>
      set(state => ({
        messages: {...state.messages, [newMessage.id]: newMessage},
      })),
  };
});

const messagesSelector = state => state.messages;
const addMessageSelector = state => state.addMessage;

const useChat = () => {
  const messages = useChatStore(messagesSelector);
  const addMessage = useChatStore(addMessageSelector);

  const sendMessage = newMessage => {
    const messageId = v4();
    try {
      database().ref(`${DB_CHATS}/${messageId}`).set({
        name: newMessage.email,
        content: newMessage.content,
        id: messageId,
      });
      console.log(`Messasge sent by ${newMessage.email}`);
    } catch (error) {
      console.log('Error sending message', error);
    }
  };

  // Subscribe to the DB
  useEffect(() => {
    reference.on('child_added', snapshot => {
      const newMessage = snapshot.val();
      console.log('newMessage', {newMessage});

      addMessage(newMessage);
    });
  }, []);

  return {
    messages,
    sendMessage,
  };
};

export default useChat;
