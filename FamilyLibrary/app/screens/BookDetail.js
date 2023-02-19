import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import bookList from "../data/bookList";
import colors from "../config/colors";
import DisplayStars from "../components/DisplayStars";

const BookDetail = ({ navigation, route }) => {
  const book = bookList.find((book) => book._id === route.params._id);

  return (
    <Screen>
      <View style={styles.top}>
        <Image source={book.image} style={styles.image} />
        <View style={styles.right}>
          <AppText numberOfLines={2} style={styles.title}>
            {book.title}
          </AppText>
          <AppText numberOfLines={2} style={styles.author}>
            {book.author}
          </AppText>
              <DisplayStars
                size={5}
                style={styles.displayStars}
                />
                <View style={styles.card}>
                  <View>
              <AppText></AppText>
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  author: {
    color: colors.lightText,
    textAlign: "center"
  },
  displayStars: {
    display: "flex",
    justifyContent: "center",
    marginTop: 5
  },
  image: {
    width: 110,
    aspectRatio: 0.65,
    borderRadius: 5,
    marginBottom: 10
  },
  right: {
    marginLeft: 10
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
    marginTop: 5
  },
  top: {
    display: "flex",
    alignItems: "center"
  }
});
