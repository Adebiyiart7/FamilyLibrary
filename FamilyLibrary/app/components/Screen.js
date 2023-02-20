import { ScrollView, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

// LOCAL IMPORTS
import colors from "../config/colors";

const Screen = ({ children, style, header, footer, scrollable = true }) => {
  if (scrollable) {
    return (
      <>
        <View
          style={styles.header}
        >
          {header}
        </View>
        <ScrollView style={[styles.container, style]}>{children}</ScrollView>
        {footer && <View style={styles.footer}>{footer}</View>}
      </>
    );
  }

  return (
    <>
      <View style={styles.header}>
        {header}
      </View>
      <View style={[styles.container, style]}>{children}</View>
      {footer && <View style={styles.footer}>{footer}</View>}
    </>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.appBackground,
    paddingTop: 16
  },
  header: {
    paddingHorizontal: 16,
    backgroundColor: colors.appBackground,
    paddingTop: Constants.statusBarHeight
  }
});
