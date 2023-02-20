import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// LOCAL IMPORTS
import { API_URI, axiosConfig } from "../config";

const initialState = {
  books: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ""
};

export const getAllBooks = createAsyncThunk("books/all", async (thunkAPI) => {
  try {
    const response = await axios.get(API_URI + "/books/all");

    if (response.data) {
      return response.data.body;
    }
  } catch (error) {
    const message = error.response.data.body.message.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

const booksSlice = createSlice({
  name: "books",
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
      .addCase(getAllBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile = action.payload;
      })
      .addCase(getAllBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export default booksSlice.reducer;
export const { reset } = booksSlice.actions;
