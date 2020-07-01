import * as httpClient from './client';
import { Alert } from 'react-native';

export const AuthService = {
  login: async (email: string, password: string) => {
    try {
      const data = await httpClient.login(email, password);
      console.log(data);
    } catch (e) {
      const errorMessage = e.response.data.errors.join('\n');
      Alert.alert(errorMessage);
    }
  },
};
