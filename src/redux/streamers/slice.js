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
    },

    [downvoteStreamer.fulfilled](state, _) {
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const streamersReducer = streamersSlice.reducer;
