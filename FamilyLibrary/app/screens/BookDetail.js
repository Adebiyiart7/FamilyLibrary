import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import bookList from "../data/bookList";
import colors from "../config/colors";
import DisplayStars from "../components/DisplayStars";
import HeadingText from "../components/HeadingText";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import AppButton from "../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux"

const BookDetail = ({ navigation, route }) => {
  const [reading, setReading] = useState(true);
  const book = bookList.find((book) => book._id === route.params._id);

  const { books } = useSelector(state => state.books)
  console.log(books);
  
  const Footer = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="book-open-page-variant-outline"
              size={24}
            />
            <AppText style={styles.iconText}>Screen 20 of 650</AppText>
          </View>
          <TouchableOpacity style={styles.icon}>
            <MaterialCommunityIcons name="book-plus-outline" size={24} />
            <AppText style={styles.iconText}>Bookmark</AppText>
          </TouchableOpacity>
        </View>
        <AppButton rounded style={styles.button}>
          {reading ? "Continue Reading" : "Start Reading"}
        </AppButton>
      </View>
    );
  };
  return (
    <Screen
      header={<AppHeader title={"Details"} />}
      footer={
        <AppFooter>
          <Footer />
        </AppFooter>
      }
    >
      <View style={styles.top}>
        <Image source={book.image} style={styles.image} />
        <View style={styles.basics}>
          <AppText numberOfLines={2} style={styles.title}>
            {book.title}
          </AppText>
          <AppText numberOfLines={2} style={styles.author}>
            {book.author}
          </AppText>
          <DisplayStars size={5} style={styles.displayStars} />
        </View>
      </View>
      <View style={styles.summary}>
        <HeadingText style={{ marginBottom: 5 }}>Summary</HeadingText>
        <AppText style={styles.summaryText}>{book.summary}</AppText>
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
  button: {
    flex: 1
  },
  displayStars: {
    display: "flex",
    justifyContent: "center",
    marginTop: 5
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  footerLeft: {
    display: "flex",
    flexDirection: "row"
  },
  icon: {
    display: "flex",
    alignItems: "center",
    marginRight: 16
  },
  iconText: {
    fontSize: 11,
    marginTop: 2
  },
  image: {
    width: 110,
    aspectRatio: 0.65,
    borderRadius: 5,
    marginBottom: 10
  },
  basics: {
    marginLeft: 10
  },
  summary: {
    marginTop: 10,
    marginBottom: 50
  },
  summaryText: {
    lineHeight: 24,
    fontSize: 16
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
