import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { loadFonts } from './app/components/Font';

// LOCAL IMPORTS
import colors, { theme } from './app/config/colors';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
  useEffect(() => {
    loadFonts();
  }, [])
  
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