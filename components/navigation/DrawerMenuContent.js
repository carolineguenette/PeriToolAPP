import { View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

export default function DrawerMenuContent(props) {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView style={{ backgroundColor: "#ffffff" }} contentContainerStyle={{ backgroundColor: "#b53fd9" }}>
      <View style={{ backgroundColor: "#ffffff" }}>
        <View style={{ backgroundColor: "#b53fd9" }}>
          <DrawerItem label='Home' onPress={() => navigation.navigate("Home")} inactiveTintColor='#ffffff' />
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#cccccc" }}>
          <DrawerItem label='Clientes enceintes' onPress={() => navigation.navigate("ListPrenatal")} />
          <DrawerItem label='Clientes en postnatal' onPress={() => navigation.navigate("ListPostnatal")} />
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#cccccc" }}>
          <DrawerItem label='Second' onPress={() => navigation.navigate("Second")} />
          <DrawerItem label='Third' onPress={() => navigation.navigate("Third")} />
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#cccccc" }}>
          <DrawerItem label='Help' onPress={() => alert("Link to help")} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
