import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    Labrada: require("../assets/fonts/Labrada/Labrada-Medium.ttf"),
    OpenSans: require("../assets/fonts/OpenSans/OpenSans-Medium.ttf")
    // Add additional font files here
  });
};
