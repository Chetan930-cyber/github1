
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('user/fetchUser', async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
});

export const fetchUserRepos = createAsyncThunk('user/fetchUserRepos', async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}/repos`);
  return response.data;
});

export const fetchStarredRepos = createAsyncThunk('user/fetchStarredRepos', async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}/starred`);
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    repos: [],
    starredRepos: [],
    loading: false,
    error: null,
    
    darkMode: false,
  },
  reducers: {
    toggleTheme(state) {
      state.darkMode = !state.darkMode;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUserRepos.fulfilled, (state, action) => {
        state.repos = action.payload;
      })
      .addCase(fetchStarredRepos.fulfilled, (state, action) => {
        state.starredRepos = action.payload;
      });
  },
});

export const { toggleTheme } = userSlice.actions;
export default userSlice.reducer;
