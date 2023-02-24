import { useEffect } from "react";
import { View } from "react-native";

// LOCAL IMPORTS
import { useDispatch } from "react-redux";
import { getTags } from "../features/base/baseSlice";
import { getAllBooks } from "../features/books/booksSlice";

export default function BaseData() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
    dispatch(getTags());
  }, []);

  return <View />;
}
