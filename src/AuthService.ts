import { Alert } from 'react-native';

import * as httpClient from './client';

export const AuthService = {
  signIn: async (email: string, password: string) => {
    try {
      await httpClient.signIn(email, password);
      Alert.alert('Success');
    } catch (e) {
      const errorMessage = e.response.data.errors.join('\n');
      Alert.alert(errorMessage);
    }
  },

  signUp: async (email: string, password: string, confirmPassword: string) => {
    try {
      const data = await httpClient.signUp(email, password, confirmPassword);
      Alert.alert('Success', `Your user ID is ${data.data.id}`);
    } catch (e) {
      const errorMessage = e.response.data.errors.join('\n');
      Alert.alert(errorMessage);
    }
  },
};
