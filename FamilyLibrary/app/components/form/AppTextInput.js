import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import colors from "../../config/colors";

const AppTextInput = ({ Icon, style, ...otherProps }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.icon}>{Icon}</View>
      <TextInput
        {...otherProps}
        style={styles.input}
        placeholderTextColor={colors.lightText}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border200,
    borderRadius: 50,
    marginVertical: 10,
    padding: 8,
    // backgroundColor: colors.background100,
  },
  icon: {
    position: "absolute",
    left: 12
  },
  input: {
    paddingHorizontal: 30,
    fontWeight: "500",
  },
});
