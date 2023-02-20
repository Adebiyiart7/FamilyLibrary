import { configureStore } from "@reduxjs/toolkit";

// LOCAL IMPORTS
import booksReducer from "../features/books/booksSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
  }
});

export default store;