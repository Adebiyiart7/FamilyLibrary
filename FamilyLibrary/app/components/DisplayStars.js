import { StyleSheet, Text, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";

const DisplayStars = ({ style, size = 0 }) => {
  return (
    <View style={[styles.stars, style]}>
      <MaterialIcons size={18 + size} name="star" color={colors.primaryColor} />
      <MaterialIcons size={18 + size} name="star" color={colors.primaryColor} />
      <MaterialIcons size={18 + size} name="star" color={colors.primaryColor} />
      <MaterialIcons
        size={18 + size}
        name="star-half"
        color={colors.primaryColor}
      />
      <MaterialIcons
        size={18 + size}
        name="star-outline"
        color={colors.primaryColor}
      />
      <AppText style={{...styles.rating, fontSize: 14 + size}}>3.9</AppText>
    </View>
  );
};

export default DisplayStars;

const styles = StyleSheet.create({
  rating: {
    marginLeft: 5,
    fontWeight: "700",
  },
  stars: {
    display: "flex",
    flexDirection: "row"
  }
});
