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
    selectedStreamer: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAllStreamers.pending, handlePending)
      .addCase(fetchOneStreamer.pending, handlePending)
      .addCase(addStreamer.pending, handlePending)
      .addCase(upvoteStreamer.pending, handlePending)
      .addCase(downvoteStreamer.pending, handlePending)
      .addCase(fetchAllStreamers.rejected, handleRejected)
      .addCase(fetchOneStreamer.rejected, handleRejected)
      .addCase(addStreamer.rejected, handleRejected)
      .addCase(upvoteStreamer.rejected, handleRejected)
      .addCase(downvoteStreamer.rejected, handleRejected)
      .addCase(fetchAllStreamers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allStreamers = action.payload;
      })
      .addCase(fetchOneStreamer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.selectedStreamer = action.payload;
      })
      .addCase(addStreamer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allStreamers.push(action.payload);
      })
      .addCase(upvoteStreamer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.allStreamers.findIndex(
          streamer => streamer._id === action.payload._id
        );
        state.allStreamers.splice(index, 1, action.payload);
        if (state.selectedStreamer._id === action.payload._id) {
          state.selectedStreamer = action.payload;
        }
      })
      .addCase(downvoteStreamer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.allStreamers.findIndex(
          streamer => streamer._id === action.payload._id
        );
        state.allStreamers.splice(index, 1, action.payload);
        if (state.selectedStreamer._id === action.payload._id) {
          state.selectedStreamer = action.payload;
        }
      }),
});

export const streamersReducer = streamersSlice.reducer;
