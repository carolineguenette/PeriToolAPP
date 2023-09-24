import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../../utils/Themes";

/*********************************************************
 * Title
 * Props
 *  children: render in a <Text>
 *  style: optionnal. Will be overwrite the default <Title> styles
 *
 * Info
 *  Default styles: center, fontSize 42, fontWeight: bold, color: primary500
 */
export default function Title({ children, styles }) {
  return (
    <View style={myStyles.root}>
      <Text style={[myStyles.text, styles]}>{children}</Text>
    </View>
  );
}

const myStyles = StyleSheet.create({
  root: {
    minWidth: "60%",
    alignItems: "center",
    marginTop: 30,
  },

  text: {
    fontSize: 42,
    fontWeight: "bold",
    color: COLORS.primary500,
  },
});
