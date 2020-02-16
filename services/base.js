import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({});

// Whenever a request is made, we attach our token in header.
api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

// Whenever a response is received
api.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response.data;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // error.response.data
    return Promise.reject(error);
  },
);

export default {
  api,
};
