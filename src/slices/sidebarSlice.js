// src/slices/counterSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSubreddits } from '../api/redditApi/subreddit';

export const fetchSubreddits = createAsyncThunk('sidebar/fetchSubreddits', async (arg, thunkAPI) => {
    const { mode } = arg;
    try {
        const response = await getSubreddits(mode)
        return response.json()
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
      }
})

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
      mode: 'default',
      subreddits: {
          data: [],
          status: 'idle',
          error:null,
      }
  },
  reducers: {
      toggleMode: (state, action) => {
          state.mode = action.payload;
    },
  }
})

export const { toggleMode } = sidebarSlice.actions
export default sidebarSlice.reducer