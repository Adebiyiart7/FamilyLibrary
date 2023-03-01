import { ScrollView, View, StyleSheet } from "react-native";

// LOCAL IMPORTS
import colors from "../config/colors";

const Screen = ({ children, style, header, footer,removeWall, scrollable = true }) => {
  if (scrollable) {
    return (
      <>
        <View style={styles.header}>
          {header}
          <View
            style={{
              borderBottomColor: colors.border200,
              borderWidthBottom: 1,
            }}
          />
        </View>
        <ScrollView
          style={[
            styles.container,
            {
              paddingHorizontal: removeWall ? 0 : 16
            },
            style
          ]}
        >
          {children}
        </ScrollView>
        {footer && <View style={styles.footer}>{footer}</View>}
      </>
    );
  }

  return (
    <>
      <View style={styles.header}>{header}</View>
      <View style={[styles.container, {    paddingHorizontal: removeWall? 0 : 16,}, style]}>{children}</View>
      {footer && <View style={styles.footer}>{footer}</View>}
    </>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
    paddingTop: 16
  },
  header: {
    // paddingHorizontal: 16,
    backgroundColor: colors.appBackground,
  }
});
