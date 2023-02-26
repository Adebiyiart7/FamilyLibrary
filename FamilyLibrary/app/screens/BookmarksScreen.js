import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// LOCAL IMPORTS
import AppHeader from "../components/AppHeader";
import Screen from "../components/Screen";
import BookCard from "../components/BookCard";
import AppText from "../components/AppText";
import defaultStyles from "../config/styles";
import { getAllBookmarks } from "../features/books/booksSlice";

const Bookmarks = () => {
  const [refreshing, setRefreashing] = useState(false);
  const { bookmarks } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  return (
    <Screen
      header={<AppHeader hideBackButton title={"Bookmarks"} />}
      scrollable={false}
    >
      {bookmarks.length === 0 && (
        <View>
          <AppText style={defaultStyles.nullInfo}>No bookmarks yet!</AppText>
          <AppText style={defaultStyles.nullInfo}>pull to refresh</AppText>
        </View>
      )}

      <FlatList
        data={bookmarks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <BookCard item={item} />}
        refreshing={refreshing}
        onRefresh={() => dispatch(getAllBookmarks())}
      />
    </Screen>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({});
