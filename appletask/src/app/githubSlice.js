import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://api.github.com/users";

export const fetchApi = createAsyncThunk("users/fetchApi", async (q) => {
  const res = await axios.get(`${baseURL}/${q}`);
  return res.data;
});

export const githubSlice = createSlice({
  name: "github",
  initialState: {
    input: "",
    data: [],
    user: { name: "", follower: 0, following: 0, repos_url: "" },
    status: "",
    fetchError: null,
  },
  reducers: {
    updateInput: (state, action) => {
      state.input = action.payload;
    },
    updateFollowing: (state) => {
      state.user.following += 10;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApi.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchApi.fulfilled, (state, action) => {
      state.status = "success";
      state.error = null;
      state.data = action.payload;
      state.user = {
        name: action.payload.name,
        follower: action.payload.followers,
        following: action.payload.followers + 10,
        repos_url: action.payload.repos_url,
      };
    });
    builder.addCase(fetchApi.rejected, (state, action) => {
      state.fetchError = action.error.message;
      state.status = "failed";
    });
  },
});

export const getUser = (state) => state.github.user;

export const { updateInput, updateFollowing } = githubSlice.actions;
export default githubSlice.reducer;
