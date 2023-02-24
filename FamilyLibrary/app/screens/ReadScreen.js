import { FlatList, StyleSheet, StatusBar, View, Text } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWindowDimensions } from "react-native";
import Constants from "expo-constants";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import AppText from "../components/AppText";
import colors from "../config/colors";

const ReadScreen = ({ route }) => {
  const { books } = useSelector((state) => state.books);
  const book = books.find((b) => b._id === route.params._id);
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();


  let paginatedText;
  // let charCountPerPage = 700;

  // for (let i = 0; i < book.fullText.length; i++) {
  //   if (i > 0 && i % charCountPerPage === 0) {
  //     paginatedText += "?=?";
  //   }

  //   paginatedText += book.fullText[i];
  // }

  paginatedText = book.fullText.split("?=?");

  const pages = [];
  for (const item of paginatedText) {
    pages.push({ _id: pages.length + 1, text: item });
  }

  return (
    <Screen header={<AppHeader title={book.title} />} style={styles.screen}>
      <View style={styles.container}>
        {/* <StatusBar hidden /> */}
        {/* <FlatList
        style={styles.flatlist}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={pages}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <AppText reading selectable style={{ width: screenWidth - 32,  }}>
              {item.text}
            </AppText>
            <AppText style={styles.page}>
              Page {item._id} of {pages.length}
            </AppText>
          </View>
        )}
      /> */}
        <AppText markdown reading selectable>
          {book.fullText}
        </AppText>
      </View>
    </Screen>
  );
};

export default ReadScreen;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  flatlist: {},
  page: {
    position: "absolute",
    color: colors.lightText,
    textAlign: "center",
    top: 24,
    right: 0,
    backgroundColor: colors.white,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.border100,
    fontSize: 12,
    zIndex: 9999,
  }
});
