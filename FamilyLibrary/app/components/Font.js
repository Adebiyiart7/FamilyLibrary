import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    Labrada: require("../assets/fonts/Labrada/Labrada-Regular.ttf"),
    OpenSans: require("../assets/fonts/OpenSans/OpenSans-Regular.ttf"),
    LatoRegular: require("../assets/fonts/Lato/Lato-Regular.ttf"),
    LatoBold: require("../assets/fonts/Lato/Lato-Bold.ttf"),
    JosefinSansRegular: require("../assets/fonts/JosefinSan/JosefinSan-Regular.ttf")
    // Add additional font files here
  });
};
