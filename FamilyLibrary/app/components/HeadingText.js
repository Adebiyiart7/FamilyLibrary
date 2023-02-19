import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText'

const HeadingText = ({ children, style }) => {
  return <AppText style={[styles.text, style]}>{children}</AppText>;
};

export default HeadingText

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "700"
  }
});