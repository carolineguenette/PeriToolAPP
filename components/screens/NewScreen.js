import { Text, View, StyleSheet } from "react-native";

export default function TODO() {
  return (
    <View style={myStyles.root}>
      <Text>TODO Screen!</Text>
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
