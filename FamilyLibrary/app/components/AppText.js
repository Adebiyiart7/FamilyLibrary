import React from 'react'
import { StyleSheet, Text, } from 'react-native'

// LOCAL IMPORTS
import colors from '../config/colors';

const AppText = ({ style, children, numberOfLines, onPress }) => {
  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      style={[styles.text, style]}
    >
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: colors.primaryText,
  }
});