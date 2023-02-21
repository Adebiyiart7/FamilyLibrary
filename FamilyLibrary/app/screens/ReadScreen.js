import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Markdown from "react-native-markdown-display";

// LOCAL IMPORTS
import defaultStyles from "../config/styles";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import AppText from "../components/AppText";

const ReadScreen = ({ route }) => {
  const { books } = useSelector((state) => state.books);
  const book = books.find((b) => b._id === route.params._id);

  return (
    <Screen header={<AppHeader title={book.title} />}>
      <AppText style={styles.fullText}>
        <Markdown>{book.fullText}</Markdown>
      </AppText>
    </Screen>
  );
};

export default ReadScreen;

const styles = StyleSheet.create({
  fullText: defaultStyles.readingText
});
