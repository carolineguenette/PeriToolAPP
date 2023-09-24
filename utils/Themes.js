export const COLORS = {
  primary250: "#DF62DF",
  primary500: "#ab2cad",
  primary750: "#8b0b8d",
  accent250: "#9BFFFF",
  accent500: "#65D1DE",
  accent750: "#27A0AC",

  textOnPrimary500: "white",

  background: "white",
  text: "black",
  textLight: "#696969",

  cardBkg: "#ab2cad",
  cardText: "white",

  shadow: "black",
};

export const PeriToolLightTheme = {
  dark: false,
  colors: {
    primary: "white",
    bakcground: COLORS.background,
    card: COLORS.cardBkg,
    text: COLORS.text,
    border: "#aaaaaa",
    notification: COLORS.accent500,
  },
};

export const PeriToolDarkTheme = {
  dark: true,
  colors: {
    primary: COLORS.primary500,
    bakcground: COLORS.text,
    card: COLORS.cardBkg,
    text: COLORS.background,
    border: COLORS.primary500,
    notification: COLORS.accent500,
  },
};
