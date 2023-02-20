import React, { useRef } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  TouchableWithoutFeedback
} from "react-native";

const BookmarksScreen = () => {
  const textInputRef = useRef(null);

  const onContextMenu = (event) => {
    event.preventDefault();
    const { pageX, pageY } = event.nativeEvent;
    const menuItems = [
      { title: "Cut", action: () => document.execCommand("cut") },
      { title: "Copy", action: () => document.execCommand("copy") },
      { title: "Paste", action: () => document.execCommand("paste") },
      {
        title: "Select All",
        action: () => textInputRef.current && textInputRef.current.focus()
      },
      {
        title: "All",
        action: () => textInputRef.current && textInputRef.current.focus()
      }
    ];
    Text.defaultProps.allowFontScaling = false; // disable text scaling for the context menu
    Text.defaultProps.maxFontSizeMultiplier = 1; // disable max font size multiplier for the context menu
    Text.showContextMenu(menuItems, { x: pageX, y: pageY });
  };

  return (
    <TouchableWithoutFeedback onPress={() => textInputRef.current.blur()}>
      <TextInput
        ref={textInputRef}
        style={styles.textInput}
        onContextMenu={onContextMenu} // handle the context menu event
        value="Some editable text"
      />
    </TouchableWithoutFeedback>
  );
};

export default BookmarksScreen;

const styles = StyleSheet.create({
  textInput: {
    marginTop: 100,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10
  }
});
