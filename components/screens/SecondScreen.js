import { Text, View, StyleSheet } from "react-native";

export default function SecondScreen() {
  return (
    <View style={myStyles.root}>
      <Text>Second Screen!</Text>
    </View>
  );
}

const myStyles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});
