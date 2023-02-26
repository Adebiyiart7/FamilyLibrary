import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// LOCAL IMPORTS
import { API_URI, axiosConfig } from "../config";

const initialState = {
  profile: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const getProfile = createAsyncThunk("profile", async (thunkAPI) => {
  try {
    const response = await axios.get(
      API_URI + "/users/me",
      axiosConfig(
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y5YTg1ZjZkYTY2NGZiZjc2ZjJhNjIiLCJpYXQiOjE2NzczOTI3MTcsImV4cCI6MTY3OTk4NDcxN30.huLAIkHRJIL_kEtK85MK-DhiLv0ehp-SMGBROawwL6Q`
      )
    );
    if (response.data) {
      return response.data.body;
    }
  } catch (error) {
    const message = error.response.data.body.message.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder

      // GET ME
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export default profileSlice.reducer;
export const { reset,  } = profileSlice.actions;
