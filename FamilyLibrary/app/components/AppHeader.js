import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// LOCAL IMPORTS
import AppText from "./AppText";
import colors from "../config/colors";

const AppHeader = ({ title, style, textColor, hideBackButton = false }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.header, style]}>
      {!hideBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            size={30}
            name="ios-arrow-back"
            color={textColor || colors.primaryText}
          />
        </TouchableOpacity>
      )}
      <AppText style={[styles.title, {color: textColor}]} numberOfLines={1}>
        {title}
      </AppText>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  title: {
    marginLeft: 16,
    fontWeight: "800",
    fontSize: 20,
    textTransform: "capitalize"
  }
});
