import { StyleSheet, Text, View, Button } from "react-native";

import COLORS from "../..//utils/Theme";
import IconMenu from "../../components/PressableIcons/IconMenu";

/**************************************************
 * ClientScreen
 * Props:
 *  idClient: integer
 */
export default function ClientScreen({ navigation }) {
  const headerLeftSetup = <IconMenu color={COLORS.textOnBckPrimary500} />;

  navigation.setOptions({
    title: "FirstName Lastname",
  });

  return (
    <View style={myStyles.root}>
      <Text>This is the Client Details Screen (TODO)</Text>
    </View>
  );
}

const myStyles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
  },
});
