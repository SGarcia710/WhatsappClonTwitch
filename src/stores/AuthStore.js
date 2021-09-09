import create from 'zustand';
import auth from '@react-native-firebase/auth';

const useAuthStore = create(set => ({
  user: null,
  loading: false,
  setUser: user => set({user}),
  signup: async (email, password) => {
    try {
      set({loading: true});
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log('🔴 signup', response);
      set({loading: false});
    } catch (error) {
      console.log('There was at signup: ', error);
    }
  },
  signin: async (email, password) => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      console.log('🔴 signin', response);
      // set({user: response});
    } catch (error) {
      console.log('There was an error at signin: ', error);
    }
  },
  signout: async () => {
    try {
      const response = await auth().signOut();
      console.log('🔴 SignOut', response);
    } catch (error) {
      console.log('There was an error signing out:', error);
    }
  },
}));

export default useAuthStore;
