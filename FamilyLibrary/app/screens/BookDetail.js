import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { useSelector } from "react-redux";

// LOCAL IMPORTS
import routes from "../config/routes";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import bookList from "../data/bookList";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import DisplayStars from "../components/DisplayStars";
import HeadingText from "../components/HeadingText";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import AppButton from "../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Chip from "../components/Chip";

const BookDetail = ({ navigation, route }) => {
  const [reading, setReading] = useState(true);
  const [readTime, setReadTime] = useState(0);
  const { books, isLoading } = useSelector((state) => state.books);
  const book = books.find((book) => book._id === route.params._id);

  useEffect(() => {
    const wpm = 250;
    const wordCount = book.fullText.split(" ").length;
    const readTime = Math.ceil(wordCount / wpm);
    setReadTime(readTime);
  }, []);

  const Footer = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="book-open-page-variant-outline"
              size={24}
            />
            <AppText style={styles.iconText}>{readTime}mins Read</AppText>
          </View>
          <TouchableOpacity style={styles.icon}>
            <MaterialCommunityIcons name="book-plus-outline" size={24} />
            <AppText style={styles.iconText}>Bookmark</AppText>
          </TouchableOpacity>
        </View>
        <AppButton style={{ ...styles.button, ...styles.buyButton }}>
          Buy
        </AppButton>
        <AppButton
          style={styles.button}
          onPress={() =>
            navigation.navigate(routes.READ_SCREEN, {
              _id: route.params._id
            })
          }
        >
          {/* {reading ? "Continue Reading" : "Start Reading"} */}
          Read
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
      scrollable={false}
    >
      <FlatList
        horizontal
        style={{ height: 50 }}
        showsHorizontalScrollIndicator={false}
        data={book.tags.split(",")}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Chip text={item} />}
        ItemSeparatorComponent={<View style={{ marginRight: 10 }} />}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: book.image }} style={styles.image} />
          </View>
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
          <AppText style={defaultStyles.readingText}>{book.summary}</AppText>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  author: {
    color: colors.lightText,
    textAlign: "center",
    textTransform: "capitalize"
  },
  button: {
    flex: 1
  },
  buyButton: {
    marginRight: 16,
    backgroundColor: colors.secondaryColor
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
    borderRadius: 5
  },
  imageContainer: {
    backgroundColor: colors.background200,
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
  tags: {
    // width: "100%"
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
    marginTop: 5,
    textTransform: "capitalize"
  },
  top: {
    display: "flex",
    alignItems: "center",
    paddingTop: 16
  }
});
