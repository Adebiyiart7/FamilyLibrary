import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

// LOCAL IMPORTS
import colors, { theme } from './app/config/colors';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={colors.appBackground}
        barStyle={theme === "light" ? "dark-content" : "light-content"}
      />
      <AppNavigator />
    </NavigationContainer>
  );
}