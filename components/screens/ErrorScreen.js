import { StyleSheet, Text, View } from "react-native";

/*********************************************************
 * ErrorScreen -
 */
export default function ErrorScreen({ children }) {
  return (
    <View style={myStyles.root}>
      <Text>{children}</Text>
    </View>
  );
}

const myStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f79c9c",
    alignItems: "center",
    justifyContent: "center",
  },
});
