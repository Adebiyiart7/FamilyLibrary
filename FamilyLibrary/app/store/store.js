import { configureStore } from "@reduxjs/toolkit";

// LOCAL IMPORTS
import authReducer from "../features/auth/authSlice";
import booksReducer from "../features/books/booksSlice";
import baseReducer from "../features/base/baseSlice";
import profileReducer from "../features/profile/profileSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
    base: baseReducer,
    profile: profileReducer
  }
});

export default store;