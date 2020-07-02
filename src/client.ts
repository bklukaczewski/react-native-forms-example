import axios from 'axios';

const baseURL = 'https://api.nutrra.com';

const httpClient = axios.create({
  baseURL,
});

export const signIn = (email: string, password: string) =>
  httpClient.post('/users/login', { email, password });

export const signUp = (email: string, password: string, confirmPassword: string) =>
  httpClient.post('/users/register', { email, password, confirm_password: confirmPassword });
