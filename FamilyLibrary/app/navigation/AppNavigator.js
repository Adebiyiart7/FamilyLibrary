import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// LOCAL IMPORTS
import routes from "../config/routes";
import TabNavigator from "./TabNavigator";
import BookDetail from "../screens/BookDetail";

const Stack = createStackNavigator();

const cardStyleInterpolator = ({ current: { progress } }) => ({
  cardStyle: {
    opacity: progress,
    transform: [
      {
        translateX: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [500, 0],
          extrapolate: "clamp"
        })
      }
    ]
  }
});

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.TAB}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name={routes.BOOK_DETAIL}
        component={BookDetail}
        options={{
          cardStyleInterpolator: cardStyleInterpolator
        }}
      />
      <Stack.Screen name={routes.TAB} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
