import { ScrollView, View, StyleSheet } from "react-native";

// LOCAL IMPORTS
import colors from "../config/colors";

const Screen = ({ children, style, header, scrollable = true }) => {
  if (scrollable) {
    return (
      <>
        <View style={styles.header}>{header}</View>
        <ScrollView style={[styles.container, style]}>{children}</ScrollView>
      </>
    );
  }

  return (<>
    <View style={styles.header}>{header}</View>
    <View style={[styles.container, style]}>{children}</View>
  </>)
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: colors.appBackground
  },
  header: {
    paddingHorizontal: 16,
    backgroundColor: colors.appBackground
  }
});