import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <LottieView
        style={styles.loading}
        autoPlay
        loop
        source={require("../assets/animations/loading.json")}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loading: {},
  loadingContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "#00000099",
    zIndex: 99999
  }
});
