import { useEffect } from "react";
import { View } from "react-native";

// LOCAL IMPORTS
import { useDispatch } from "react-redux";
import { getTags } from "../features/base/baseSlice";
import { getAllBookmarks, getAllBooks } from "../features/books/booksSlice";
import { getProfile } from "../features/profile/profileSlice";

export default function BaseData() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
    dispatch(getTags());
    dispatch(getAllBookmarks());
    dispatch(getProfile());
  }, []);

  return <View />;
}
