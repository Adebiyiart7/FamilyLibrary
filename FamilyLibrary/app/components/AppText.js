import React from "react";
import { StyleSheet, Text } from "react-native";
// import Markdown from "react-native-markdown-display";
// import SelectableText from "react-native-selectable-text";

// LOCAL IMPORTS
import colors from "../config/colors";
import defaultStyles from "../config/styles";

const AppText = ({
  style,
  children,
  numberOfLines,
  onPress,
  onSelectionChange,
  selectable = false,
  reading = false,
  markdown = false
}) => {
  const readingText = () => {
    if (reading) {
      return {
        ...defaultStyles.readingText
      };
    }

    return {};
  };

  // if (markdown) {
  //   return (
  //     // <SelectableText>
  //       <Markdown
  //         onPress={onPress}
  //         numberOfLines={numberOfLines}
  //         style={{ text: [styles.text, readingText(), style] }}
  //     >

  //         {children}
  //       </Markdown>
  //     // </SelectableText>
  //   );
  // }

  return (
    <Text
      onPress={onPress}
      suppressHighlighting
      onSelectionChange={onSelectionChange}
      selectable={selectable}
      selectionColor={colors.selectionColor}
      numberOfLines={numberOfLines}
      style={[styles.text, readingText(), style]}
    >
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: colors.primaryText,
    // fontFamily: "JosefinSansRegular",
    // fontFamily: "Labrada",
    fontFamily: "LatoRegular"
    // fontFamily: "OpenSans",
  }
});
