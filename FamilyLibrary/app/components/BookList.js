import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BookCard from './BookCard'

const BookList = ({ data, ListHeaderComponent }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.list}
      data={data}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <BookCard item={item} />}
      ItemSeparatorComponent={<View style={{ marginBottom: 16 }} />}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={<View style={{ marginBottom: 16 }} />}
    />
  );
};

export default BookList

const styles = StyleSheet.create({
  list: {
  
}});