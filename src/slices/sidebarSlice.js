// src/slices/counterSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSubreddits } from '../api/redditApi/subreddit';

export const fetchSubreddits = createAsyncThunk('sidebar/fetchSubreddits', async (arg, thunkAPI) => {
  const { mode } = arg;
  try {
    const response = await getSubreddits(mode)
    console.log('response',response)
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    mode: 'default',
    subreddits: {
      data: {},
      isLoading: false,
      error: null,
    }
  },
  reducers: {
    toggleMode: (state, action) => {
      state.mode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubreddits.pending, (state) => {
        state.subreddits.isLoading = true;
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.subreddits.isLoading = false;
        console.log('payload',action.payload)
        state.subreddits.data = action.payload;
      })
      .addCase(fetchSubreddits.rejected, (state, action) => {
        state.subreddits.isLoading = false;
        state.error = action.error.message
      })
  }
})

export const { toggleMode } = sidebarSlice.actions
export default sidebarSlice.reducer