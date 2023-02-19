import { Ionicons } from "@expo/vector-icons";

// LOCAL IMPORTS
import colors from "../config/colors";
import routes from "../config/routes";

const tabBarIcon = (route, focused) => {
  let iconName;

  if (route.name === routes.HOME) {
    iconName = focused ? "ios-home" : "ios-home-outline";
  } else if (route.name === routes.FAVORITES) {
    iconName = focused ? "ios-heart" : "ios-heart-outline";
  } else if (route.name === routes.LIBRARY) {
    iconName = focused ? "ios-library" : "ios-library-outline";
  } else if (route.name === routes.SETTINGS) {
    iconName = focused ? "ios-settings" :"ios-settings-outline"
  }

  return (
    <Ionicons
      name={iconName}
      color={focused ? colors.primaryColor : colors.lightText}
      size={24}
    />
  );
}

export default tabBarIcon;