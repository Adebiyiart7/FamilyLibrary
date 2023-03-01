import { StyleSheet, Pressable, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import CAppText from "./AppText";
import colors from "../config/colors";

const Card1 = ({ title, Icon, RightItem, onPress }) => {
  const AppText = ({ children }) => {
    return (
      <CAppText style={{ fontFamily: "JosefinSansRegular", fontSize: 17 }}>
        {children}
      </CAppText>
    );
  };
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View style={styles.leftItem}>
        <View style={styles.icon}>{Icon}</View>
        <AppText style={styles.title}>{title}</AppText>
      </View>
      <View style={styles.rightItem}>{RightItem}</View>
    </Pressable>
  );
};

export default Card1;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12
  },
  icon: {
    marginRight: 16,
    backgroundColor: colors.background100,
    display: "flex",
    alignItems: "center",
justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 5
  },
  leftItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
