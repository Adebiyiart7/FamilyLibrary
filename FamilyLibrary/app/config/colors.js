export let theme = "light";

const colors = () => {
  if (theme === "light") {
    return {
      appBackground: "#FFFFE6",
      black: "#000",
      danger: "#ff5252",
      disabled: "#EBE4E4",
      background100: "#f8f4f4",
      background200: "#e9e9e9",
      border100: "#EEE",
      border200: "#DDD",
      lightText: "#6d6d6d",
      mediumText: "#6e6969",
      primaryColor: "#7E57C2",
      primaryText: "#222",
      selectionColor: "#FFFF00",
      white: "#FFF"
    };
  }

  return {
    appBackground: "#FFFFE0",
    black: "#FFF",
    danger: "#ff5252",
    disabled: "#EBE4E4",
    background100: "#181a20",
    background200: "#e9e9e9",
    border100: "#333",
    border200: "#DDD",
    lightText: "#9d9d9d",
    mediumText: "#6e6969",
    primaryColor: "#7E57C2",
    primaryText: "#FFF",
    selectionColor: "#FFFF00",
    white: "#000"
  };
};

export default colors();

/**
 * 	alertBackground: "#323232",
	primaryColor: "rgb(255, 255, 255)",
	primaryBg: "rgb(36, 37, 38)",
	primaryText: "rgb(255, 255, 255)",
	primaryTextTwo: "rgb(185, 175, 165)",
	primaryIcon: "rgb(255, 255, 255)",
	primaryOrange: "#D1771E",
	appBackground: "rgb(50, 52, 54)",
	readingText: "rgb(152, 152, 152)",
	primaryBorder: "rgb(51, 51, 51)",
	secondaryBorder: "rgb(70, 70, 70)",
	generalBorder: "rgb(100, 100, 100)",
	lightText: "rgb(152, 152, 152)",
	danger: "rgb(178, 34, 34)",
	white: "rgb(0, 0, 0)",
	actionButtonPrimary: appColor,
	actionButtonPrimaryText: "rgb(255, 255, 255)",
	appColor: appColor,
	likedBg: "rgb(56, 80, 54)",
	appGray: appColor,
	muiInputBorder: "rgb(70, 70, 70)",
	disabled: "rgb(121, 121, 121)",
	zIndex: 1100,
 */
