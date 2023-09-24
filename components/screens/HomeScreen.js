import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import { COLORS } from "../../utils/Themes";
import Button from "../ui/Button";
import Title from "../ui/Title";
import TextPrimary from "../ui/TextPrimary";
import IconButton from "../ui/IconButton";

const datas = {
  idUser: 1,
  firstName: "Caroline",
  lastName: "Guénette",
  displayName: "Caroline",
  idEtablishment: 1,
  etablishmentName: "Maison de naissance Marie-Paule-Lanthier",
};

/*********************************************************
 * HomeScreen - first screen to be display after login OK
 */
export default function HomeScreen({ navigation, route }) {
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShadowVisible: false,
  //     headerStyle: {
  //       backgroundColor: COLORS.background,
  //     },
  //     headerTitle: () => {
  //       return <></>;
  //     },
  //     headerRight: () => {
  //       return (
  //         <View style={{ flexDirection: "row", paddingRight: 5 }}>
  //           <IconButton
  //             icon='help-circle-outline'
  //             color={COLORS.textLight}
  //             size={24}
  //             onPress={navigateHandler.bind(this, "Help")}
  //           />
  //           <IconButton
  //             icon='logout'
  //             color={COLORS.textLight}
  //             size={24}
  //             onPress={logoutHandler}
  //           />
  //         </View>
  //       );
  //     },
  //   });
  // }, [navigation, Header]);

  const dateToday = new Date();
  const strToday = dateToday.toLocaleDateString("fr-CA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <View style={myStyles.root}>
      <StatusBar style='light' />
      <Title>Péri-tool</Title>
      <Image style={myStyles.image} source={require("../../assets/images/logoPeritool.png")} />
      <TextPrimary>Bienvenue {datas.displayName}!</TextPrimary>
      <TextPrimary fontSize={14}>{datas.etablishmentName}</TextPrimary>
      <Text style={{ marginVertical: 20 }}>Aujourd'hui le {strToday}</Text>
      <View style={{ width: "100%" }}>
        <Button icon='human-pregnant' onPress={() => navigation.navigate("ListPrenatal")} style={{ margin: 5 }}>
          CLIENTES ENCEINTES
        </Button>
        <Button icon='account-child' onPress={() => navigation.navigate("ListPostnatal")} style={{ margin: 5 }}>
          CLIENTES EN POSTNATAL
        </Button>
      </View>
    </View>
  );
}

//*************************************************
const myStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    paddingHorizontal: 20,
    maxWidth: 500,
  },

  image: {
    height: 178,
    width: 141,
    margin: 20,
  },

  space: {
    margin: 20,
  },

  inRow: {
    flexDirection: "row",
  },
});
