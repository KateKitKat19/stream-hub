import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllStreamers = createAsyncThunk(
  'streamers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/streamers');
      console.log('res.data in fetchAllStreamers: ', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOneStreamer = createAsyncThunk(
  'streamers/fetchOne',
  async (streamerId, thunkAPI) => {
    try {
      const res = await axios.get(`/streamers/${streamerId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addStreamer = createAsyncThunk(
  'streamers/addNew',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/streamers', { credentials });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const upvoteStreamer = createAsyncThunk(
  'streamers/upvote',
  async (streamerId, thunkAPI) => {
    try {
      const response = await axios.put(`/streamers/${streamerId}/upvote`);
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const downvoteStreamer = createAsyncThunk(
  'streamers/downvote',
  async (streamerId, thunkAPI) => {
    try {
      const response = await axios.put(`/streamers/${streamerId}/downvote`);
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
