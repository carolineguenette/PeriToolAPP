import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function ClientsPostnatalcreen() {
  return (
    <View style={myStyles.root}>
      <Text>Liste des clientes en postnatal pour User Logged.</Text>
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
