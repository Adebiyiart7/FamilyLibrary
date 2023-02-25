import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// LOCAL IMPORTS
import { API_URI, axiosConfig } from "../config";

const initialState = {
  books: [],
  bookSearch: [],
  bookmarks: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ""
};

export const getAllBooks = createAsyncThunk("books/all", async (thunkAPI) => {
  try {
    const response = await axios.get(
      API_URI + `/books/all`,
      axiosConfig(
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y5YTg1ZjZkYTY2NGZiZjc2ZjJhNjIiLCJpYXQiOjE2NzczNDk1MDYsImV4cCI6MTY3OTk0MTUwNn0.gEA0iJPuQrwCm5xrI5Je9JbYd4xjcOjcQzw5BpdmR6g`
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

export const getAllBookmarks = createAsyncThunk("bookmarks/all", async (thunkAPI) => {
  try {
    const response = await axios.get(
      API_URI + `/bookmarks/all`,
      axiosConfig(
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y5YTg1ZjZkYTY2NGZiZjc2ZjJhNjIiLCJpYXQiOjE2NzczNDk1MDYsImV4cCI6MTY3OTk0MTUwNn0.gEA0iJPuQrwCm5xrI5Je9JbYd4xjcOjcQzw5BpdmR6g`
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

export const addToBookmarks = createAsyncThunk(
  "bookmarks/add",
  async (bookID, thunkAPI) => {
    try {
      const response = await axios.put(
        API_URI + `/bookmarks/add?_id=${bookID}`,
        axiosConfig(
          `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y5YTg1ZjZkYTY2NGZiZjc2ZjJhNjIiLCJpYXQiOjE2NzczNTExNDAsImV4cCI6MTY3OTk0MzE0MH0._nYG48JggObRAXNvENh5eBtS0Zi7PZLJGlMzhlztaWw`
        )
      );console.log(response);
      if (response.data) {
        return response.data.body;
      }
    } catch (error) {
      console.log(error.response)
      const message = error.response.data.body.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getBookSearch = createAsyncThunk(
  "books/search",
  async (search = "", thunkAPI) => {
    let query = `?search=${search}`;

    try {
      const response = await axios.get(
        API_URI + `/books/all${query}`,
        axiosConfig(
          `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y5YTg1ZjZkYTY2NGZiZjc2ZjJhNjIiLCJpYXQiOjE2NzczNDk1MDYsImV4cCI6MTY3OTk0MTUwNn0.gEA0iJPuQrwCm5xrI5Je9JbYd4xjcOjcQzw5BpdmR6g`
        )
      );

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
      })

      // BOOKMARKS
      .addCase(getAllBookmarks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBookmarks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bookmarks = action.payload;
      })
      .addCase(getAllBookmarks.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export default booksSlice.reducer;
export const { reset } = booksSlice.actions;
