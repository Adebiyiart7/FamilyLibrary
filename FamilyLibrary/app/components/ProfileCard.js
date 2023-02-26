import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'

// LOCAL IMPORTS
import AppText from './AppText';

const ProfileCard = ({ title, Icon, RightItem }) => {
  return (
    <TouchableOpacity>
      <View>{Icon}</View>
      <AppText>{title}</AppText>
      <View>{RightItem}</View>
    </TouchableOpacity>
  );
};

export default ProfileCard

const styles = StyleSheet.create({})