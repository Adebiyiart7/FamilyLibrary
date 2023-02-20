import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

// LOCAL IMPORTS
import colors from "../config/colors";
import routes from "../config/routes";

const tabBarIcon = (route, focused) => {
  let iconName;

  if (route.name === routes.HOME) {
    iconName = focused ? "ios-home" : "ios-home-outline";
  } else if (route.name === routes.BOOKMARKS) {
    iconName = focused ? "bookmark-multiple" : "bookmark-multiple-outline";
  } else if (route.name === routes.LIBRARY) {
    iconName = focused ? "ios-library" : "ios-library-outline";
  } else if (route.name === routes.SETTINGS) {
    iconName = focused ? "ios-settings" :"ios-settings-outline"
  }

  return (
    <View>
      {route.name === routes.BOOKMARKS ? (
        <MaterialCommunityIcons
        name={iconName}
        color={focused ? colors.primaryColor : colors.lightText}
        size={24}
        />
        ) : (
        <Ionicons
          name={iconName}
          color={focused ? colors.primaryColor : colors.lightText}
          size={24}
        />
      )}
    </View>
  );
}

export default tabBarIcon;