import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostList } from "../api/redditApi/post";

export const getPosts = createAsyncThunk('postList/getPosts', async (arg, thunkAPI) => {
    const { subreddit, mode } = arg;
    try {
        const response = await getPostList(subreddit, mode)
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const postListSlice = createSlice({
    name: 'postList',
    initialState: {
        mode: 'new',
        posts: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        togglePostMode: (state, action) => {
            state.mode = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log(action.payload)
                state.posts = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.posts = [];
                state.error = action.error.message;
            })
    }
})

export const { togglePostMode } = postListSlice.actions;
export default postListSlice.reducer;