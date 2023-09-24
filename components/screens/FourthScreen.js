import { Text, View, StyleSheet } from "react-native";

export default function FourthScreen() {
  return (
    <View style={myStyles.root}>
      <Text>Fourth Screen! (not in routes)</Text>
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
