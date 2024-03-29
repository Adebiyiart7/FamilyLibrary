import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

// LOCAL IMPORTS
import colors, { theme } from "./app/config/colors";
import AppNavigator from "./app/navigation/AppNavigator";
import { loadFonts } from "./app/components/Font";
import store from "./app/store/store";
import { Provider } from "react-redux";
import BaseData from "./app/components/BaseData";
import { StatusBar } from "react-native";

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <ActionSheetProvider>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar
            backgroundColor={colors.primaryColor}
            barStyle={"light-content"}
          />
          <AppNavigator />
        </NavigationContainer>
        <BaseData />
      </Provider>
    </ActionSheetProvider>
  );
}

/**
 * eas build -p android --profile preview
 */