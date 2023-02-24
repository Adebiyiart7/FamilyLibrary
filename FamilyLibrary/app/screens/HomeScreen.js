import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";
import AppTextInput from "../components/form/AppTextInput";
import Chip from "../components/Chip";
import HeadingText from "../components/HeadingText";
import BookList from "../components/BookList";
import { useSelector } from "react-redux";

const Home = () => {
  const { books, isLoading: isLoadingBooks } = useSelector((state) => state.books);
  const { tags, isLoadingTags } = useSelector((state) => state.base);

  
  const Header = () => {
    return (
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <AppText style={styles.logoText}>Family Library</AppText>
        </View>
        <TouchableOpacity>
          <Image source={avatar} style={styles.avatar} />
        </TouchableOpacity>
      </View>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <>
        <FlatList
          style={styles.tags}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={tags}
          ItemSeparatorComponent={<View style={{ marginRight: 10 }} />}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <Chip text={item.name} />}
        />
        {books && (
          <HeadingText style={styles.headingText}>Recommended</HeadingText>
        )}
        {isLoadingBooks && (
          <AppText style={styles.loadingText}>Loading books...</AppText>
        )}
      </>
    );
  };

  return (
    <Screen scrollable={false}>
      <Header />
      <AppTextInput
        style={styles.searchInput}
        placeholder="Search Library..."
        Icon={<Ionicons name="search" size={20} color={colors.mediumText} />}
      />
      <>
        {/* <BookList ListHeaderComponent={ListHeaderComponent} data={bookList} /> */}
        <BookList
          ListHeaderComponent={ListHeaderComponent}
          data={books}
          isLoading={isLoadingBooks}
        />
      </>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 30
  },
  categories: {
    marginTop: 10
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10
  },
  headingText: {
    marginVertical: 10
  },
  loadingText: {
    textAlign: "center",
    color: colors.mediumText,
    fontSize: 16,
    marginVertical: 16
  },
  logo: {
    height: 29,
    width: 29
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  logoText: {
    fontWeight: "800",
    fontSize: 22,
    marginLeft: 10
  },
  searchInput: {
    marginTop: 15
  }
});
