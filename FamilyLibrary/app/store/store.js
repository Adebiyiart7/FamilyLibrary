import { configureStore } from "@reduxjs/toolkit";

// LOCAL IMPORTS
import booksReducer from "../features/books/booksSlice";
import baseReducer from "../features/base/baseSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    base: baseReducer,
  }
});

export default store;