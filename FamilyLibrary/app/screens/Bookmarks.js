import React from "react";
import { Text, View } from "react-native";
import { ActionSheet } from "@expo/react-native-action-sheet";
import BottomSheet from "../components/BottomSheet";

const MyText = () => {
  const handleLongPress = () => {
    const options = ["Copy", "Select All", "My Custom Action", "Cancel"];
    const destructiveButtonIndex = options.indexOf("Cancel");
    const cancelButtonIndex = options.indexOf("Cancel");
    ActionSheet.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case options.indexOf("Copy"):
            // Implement copy functionality here
            break;
          case options.indexOf("Select All"):
            // Implement select all functionality here
            break;
          case options.indexOf("My Custom Action"):
            // Implement custom action functionality here
            console.log("My custom action was selected!");
            break;
          default:
            break;
        }
      }
    );
  };

  return (
    <View style={{marginTop: 100}}>
      <Text selectable={true} onLongPress={handleLongPress}>
        This is some text that can be highlighted.
      </Text>
    </View>
  );
};

export default MyText;
