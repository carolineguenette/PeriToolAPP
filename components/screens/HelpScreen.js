import { Text, View, StyleSheet } from "react-native";

export default function HelpScreen() {
  return (
    <View style={myStyles.root}>
      <Text>Help Screen!</Text>
    </View>
  );
}

const myStyles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
