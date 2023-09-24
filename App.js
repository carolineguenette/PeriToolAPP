import "react-native-gesture-handler"; //must be inline 1
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import DrawerMenuContent from "./components/navigation/DrawerMenuContent";
import NavigationSetup from "./components/navigation/NavigationSetup";

const DrawerMenu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DrawerMenu.Navigator
        drawerContent={(props) => <DrawerMenuContent {...props} />}
      >
        <DrawerMenu.Screen
          name='NavRoot'
          component={NavigationSetup}
          options={{ drawerType: "front", headerShown: false }}
        />
      </DrawerMenu.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
