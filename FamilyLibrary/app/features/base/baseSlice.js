import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// LOCAL IMPORTS
import { API_URI, axiosConfig } from "../config";

const initialState = {
  tags: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ""
};

export const getTags = createAsyncThunk("base/tags", async (thunkAPI) => {
  try {
    const response = await axios.get(
      API_URI + "/base/tags/get20tags",
      axiosConfig(
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y5YTg1ZjZkYTY2NGZiZjc2ZjJhNjIiLCJpYXQiOjE2NzczMDU5NTIsImV4cCI6MTY3OTg5Nzk1Mn0.Tex7RwQhl1psQesJ6TXeZ0D_xxJhX9_FqqNegBokwmk`
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

const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTags.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tags = action.payload;
      })
      .addCase(getTags.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export default baseSlice.reducer;
export const { reset } = baseSlice.actions;
