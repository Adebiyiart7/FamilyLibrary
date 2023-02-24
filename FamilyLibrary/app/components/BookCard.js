import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// LOCAL IMPORTS
import AppText from "./AppText";
import colors from "../config/colors";
import DisplayStars from "./DisplayStars";
import routes from "../config/routes";

const BookCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate(routes.BOOK_DETAIL, {
          _id: item._id
        })
      }
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.details}>
        <AppText numberOfLines={2} style={styles.title}>
          {item.title}
        </AppText>
        <AppText numberOfLines={2} style={styles.summary}>
          {item.summary}
        </AppText>
        <DisplayStars />
      </View>
    </TouchableOpacity>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    display: "flex",
    flexDirection: "row"
  },
  details: {
    marginLeft: 10,
    flexShrink: 1
  },
  image: {
    width: 70,
    height: 110,
    borderRadius: 5
  },
  imageContainer: {
    backgroundColor: colors.background200,
    borderRadius: 5
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 5,
    textTransform: "capitalize"
  },
  summary: {
    marginBottom: 5,
    color: colors.lightText
  }
});
