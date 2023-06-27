import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllStreamers,
  fetchOneStreamer,
  addStreamer,
  upvoteStreamer,
  downvoteStreamer,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const streamersSlice = createSlice({
  name: 'streamers',
  initialState: {
    allStreamers: [],
    upvotedStreamers: [],
    selectedStreamer: null,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchAllStreamers.pending]: handlePending,
    [fetchOneStreamer.pending]: handlePending,
    [addStreamer.pending]: handlePending,
    [upvoteStreamer.pending]: handlePending,
    [downvoteStreamer.pending]: handlePending,

    [fetchAllStreamers.rejected]: handleRejected,
    [fetchOneStreamer.rejected]: handleRejected,
    [addStreamer.rejected]: handleRejected,
    [upvoteStreamer.rejected]: handleRejected,
    [downvoteStreamer.rejected]: handleRejected,

    [fetchAllStreamers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.allStreamers = action.payload;
    },
    [fetchOneStreamer.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.selectedStreamer = action.payload;
    },
    [addStreamer.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.allStreamers.push(action.payload);
    },

    [upvoteStreamer.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.upvotedStreamers.push(action.payload);
      state.allStreamers.filter(streamer => {
        return streamer._id === action.payload._id
          ? { ...action.payload }
          : streamer;
      });
    },

    [downvoteStreamer.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.allStreamers.filter(streamer => {
        return streamer._id === action.payload._id
          ? { ...action.payload }
          : streamer;
      });
      state.upvotedStreamers.filter(streamer => {
        console.log('streamer._id: ', streamer._id, typeof streamer._id);
        console.log(
          'action.payload._id: ',
          action.payload._id,
          typeof action.payload._id
        );

        console.log(
          'streamer._id !== action.payload._id? ',
          streamer._id !== action.payload._id
        );
        return streamer._id !== action.payload._id;
      });
    },
  },
});

export const streamersReducer = streamersSlice.reducer;
