import { FlatList, StyleSheet, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
import BookCard from "./BookCard";
import { useDispatch } from "react-redux";
import { getAllBooks } from "../features/books/booksSlice";
import AppText from "./AppText";
import colors from "../config/colors";
import { getTags } from "../features/base/baseSlice";

const BookList = ({ data, isLoading, ListHeaderComponent }) => {
  const [refreshing] = useState(false);
  const dispatch = useDispatch();
  const { height: screenHeight } = useWindowDimensions();
  
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={[styles.list, { height: screenHeight - 200}]}
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <BookCard item={item} />}
        ItemSeparatorComponent={<View style={{ marginBottom: 16 }} />}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={<View style={{ marginBottom: 16 }} />}
        refreshing={refreshing}
        onRefresh={() => {
          dispatch(getAllBooks());
          dispatch(getTags());
        }}
      />
    </View>
  );
};

export default BookList;

const styles = StyleSheet.create({
  list: {},

});
