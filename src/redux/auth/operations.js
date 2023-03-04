import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = ` Bearer ${token}`;
};
const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

const registration = createAsyncThunk(
  'auth/registration',
  async (credentials, ThunkAPI) => {
    try {
      const resp = await axios.post('/users/signup', credentials);
      setAuthToken(resp.data.token);
      return resp.data;
    } catch (e) {
      return ThunkAPI.rejectWithValue(e.message);
    }
  }
);
const logIn = createAsyncThunk('auth/login', async (credentials, ThunkAPI) => {
  try {
    const resp = await axios.post('/users/login', credentials);
    setAuthToken(resp.data.token);
    return resp.data;
  } catch (e) {
    return ThunkAPI.rejectWithValue(e.message);
  }
});
const logOut = createAsyncThunk('auth/logout', async (_, ThunkAPI) => {
  try {
    const resp = await axios.post('/users/logout');
    clearAuthToken();
    return resp.data;
  } catch (e) {
    return ThunkAPI.rejectWithValue(e.message);
  }
});
const refreshUser = createAsyncThunk('auth/refresh', async (_, ThunkAPI) => {
  const { token } = ThunkAPI.getState().auth;
  if (!token) {
    return ThunkAPI.rejectWithValue('No valid token');
  }

  try {
    setAuthToken(token);
    const resp = await axios.get('/users/current');
    return resp.data;
  } catch (e) {
    return ThunkAPI.rejectWithValue(e.message);
  }
});

export const authOperations = {
  registration,
  logIn,
  logOut,
  refreshUser,
};
