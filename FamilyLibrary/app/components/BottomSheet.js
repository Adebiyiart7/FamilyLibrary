// Using the provided hook
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Button, Text } from "react-native";
import AppText from "./AppText";

const BottomSheet = () => {
  const { showActionSheetWithOptions } = useActionSheet();

  const handleLongPress = () => {
    const options = ["Delete", "Save", "Cancel"];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 1:
            // Save
            break;

          case destructiveButtonIndex:
            // Delete
            break;

          case cancelButtonIndex:
          // Canceled
        }
      }
    );
  };

  return <Text selectable onLongPress={handleLongPress}>This is a text</Text>;
};

export default BottomSheet;
