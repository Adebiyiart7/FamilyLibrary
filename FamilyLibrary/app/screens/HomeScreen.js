import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import React from "react";
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
import bookList from "../data/bookList";

const categories = [
  { _id: "1", name: "all", focused: "true" },
  { _id: "2", name: "drama", focused: "false" },
  { _id: "3", name: "fiction", focused: "false" },
  { _id: "4", name: "non fiction", focused: "false" },
  { _id: "5", name: "thriller", focused: "false" },
  { _id: "6", name: "young adult", focused: "false" },
  { _id: "7", name: "fantasy", focused: "false" },
  { _id: "8", name: "romance", focused: "false" },
  { _id: "9", name: "bible story", focused: "false" },
  { _id: "10", name: "historical", focused: "false" },
  { _id: "11", name: "science fiction", focused: "false"}
];

const Home = () => {
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
          style={styles.categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          ItemSeparatorComponent={<View style={{ marginRight: 10 }} />}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <Chip text={item.name} />}
        />
        <HeadingText style={styles.headingText}>Recommended</HeadingText>
      </>
    );
  }

  return (
    <Screen scrollable={false}>
      <Header />
      <AppTextInput
        style={styles.searchInput}
        placeholder="Search Library..."
        Icon={<Ionicons name="search" size={20} color={colors.mediumText} />}
      />
     <BookList ListHeaderComponent={ListHeaderComponent} data={bookList} />
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
    marginTop: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
  headingText: {
    marginVertical: 10,
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
    marginTop: 15,
  },
});
