import { FlatList, StyleSheet, StatusBar, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
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
  const { width: screenWidth } = useWindowDimensions();

  let paginatedText;
  let charCountPerPage = 800;

  for (let i = 0; i < book.fullText.length; i++) {
    if (i > 0 && i % charCountPerPage === 0) {
      paginatedText += "?=?";
    }
    paginatedText += book.fullText[i];
  }

  paginatedText = paginatedText.split("?=?");

  const pages = [];
  for (const item of paginatedText) {
    pages.push({ _id: pages.length + 1, text: item });
  }

  return (
    <Screen header={<AppHeader title={book.title} style={styles.screen} />}>
      {/* <StatusBar hidden /> */}
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={pages}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <AppText reading selectable style={{ width: screenWidth - 32 }}>
              {item.text}
            </AppText>
            {/* <View style={styles.pageContainer}> */}
              <AppText style={styles.page}>
                Page {item._id} of {pages.length}
              </AppText>
            {/* </View> */}
          </View>
        )}
      />
    </Screen>
  );
};

export default ReadScreen;

const styles = StyleSheet.create({
  page: {
    position: "absolute",
    color: colors.lightText,
    textAlign: "center",
    bottom: 24,
    right: 0,
    backgroundColor: colors.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  pageContainer: {
    display: "flex",
    alignItems: "center"
  }
  // screen: {
  //   paddingTop: -Constants.statusBarHeight
  // }
});
