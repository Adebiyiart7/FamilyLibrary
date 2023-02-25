import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// LOCAL IMPORTS
import { API_URI, axiosConfig } from "../config";

const initialState = {
  books: [],
  bookSearch: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ""
};

export const getAllBooks = createAsyncThunk("books/all", async (thunkAPI) => {
  try {
    const response = await axios.get(API_URI + `/books/all`);

    if (response.data) {
      return response.data.body;
    }
  } catch (error) {
    const message = error.response.data.body.message.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getBookSearch = createAsyncThunk(
  "books/search",
  async (search = "", thunkAPI) => {
    let query = `?search=${search}`;

    try {
      const response = await axios.get(API_URI + `/books/all${query}`);

      if (response.data) {
        return response.data.body;
      }
    } catch (error) {
      const message = error.response.data.body.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

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
        state.books = action.payload;
      })
      .addCase(getAllBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      // BOOK SEARCH
      .addCase(getBookSearch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookSearch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bookSearch = action.payload;
      })
      .addCase(getBookSearch.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export default booksSlice.reducer;
export const { reset } = booksSlice.actions;
