import { useEffect } from "react";
import { View } from "react-native";

// LOCAL IMPORTS
import { useDispatch } from "react-redux";
import { getAllBooks } from "../features/books/booksSlice";

export default function BaseData() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  return <View />;
}
