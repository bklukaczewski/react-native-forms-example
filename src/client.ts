import axios from 'axios';

const baseURL = 'https://api.nutrra.com';

const httpClient = axios.create({
  baseURL,
});

export const login = (email: string, password: string) =>
  httpClient.post('/users/login', { email, password });
