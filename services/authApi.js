import base from './base';
import AsyncStorage from '@react-native-community/async-storage';

const API_ROOT = 'http://localhost/v1';

const fetchUser = async () => {
  const data = await base.api.get(`${API_ROOT}/auth/user/`);
  return data;
};

const login = async (username, password) => {
  const response = await fetch(`${API_ROOT}/auth/login/`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password}),
  });

  const responseJson = await response.json();
  const {key} = responseJson;
  await AsyncStorage.setItem('token', key);

  // Fetch user info after getting token
  const user = await fetchUser();
  const {id, email} = user;
  await AsyncStorage.setItem('userEmail', email);
  await AsyncStorage.setItem('userId', id);
};

export default {
  login,
};
