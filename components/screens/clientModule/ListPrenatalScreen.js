import { Text, View, StyleSheet } from "react-native";

export default function ClientsListPrenatalScreen() {
  return (
    <View style={myStyles.root}>
      <Text>Liste des clientes enceintes pour User Logged.</Text>
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
