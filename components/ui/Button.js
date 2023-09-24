import { Text, Pressable, StyleSheet, View } from "react-native";
import { COLORS } from "../../utils/Themes";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/*********************************************************************
 *A button with a Peri-Tool styling
 *
 *Props
 *   - children: the content of the button label <Text>
 *   - onPress: Handler to be called when user taps the button   *REQUIRED*
 *   - icon: string. Name of a MaterialCommunityIcons
 *        if precise, display to the left of the text.
 *  -style: style to apply to the outer <View> container (ex: margin)
 *********************************************************************/
export default function Button({ children, icon, onPress, style }) {
  if (icon !== undefined) {
    icon = (
      <MaterialCommunityIcons
        name={icon}
        color={COLORS.textOnPrimary500}
        size={24}
        style={{ paddingHorizontal: 6 }}
      />
    );
  } else {
    icon = <></>;
  }

  //-----Render------
  return (
    <View style={style}>
      <Pressable android_ripple={"black"} onPress={onPress}>
        <View style={styles.container}>
          {icon}
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: "row",

    borderRadius: 4,
    backgroundColor: COLORS.primary500,
    elevation: 4,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },

  text: {
    color: COLORS.background,
    fontSize: 16,
  },
});
