import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import BookCard from "./BookCard";
import { useDispatch } from "react-redux";
import { getAllBooks } from "../features/books/booksSlice";
import AppText from "./AppText";
import colors from "../config/colors";

const BookList = ({ data, isLoading, ListHeaderComponent }) => {
  const [refreshing] = useState(false);
  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
 
            <BookCard item={item} />
        )}
        ItemSeparatorComponent={<View style={{ marginBottom: 16 }} />}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={<View style={{ marginBottom: 16 }} />}
        refreshing={refreshing}
        onRefresh={() => {
          dispatch(getAllBooks());
        }}
      />
    </View>
  );
};

export default BookList;

const styles = StyleSheet.create({
  list: {},

});
