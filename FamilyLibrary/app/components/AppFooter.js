import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

const AppFooter = ({children}) => {
  return (
    <View style={styles.footer}>
      {children}
    </View>
  )
}

export default AppFooter

const styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.appBackground,
    borderTopColor: colors.border100,
    borderTopWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    minHeight: 60
  }
})