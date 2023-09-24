import { Pressable, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/*****************************************************************
 *IconButton
 *
 * Props
 *  icon: string. Icon name from MaterialCommunityIcons
 *
 * Example
 *  <IconButton icon='home'size=24 color='#ffffff' onPress={iconPressHandler} />
 */
export default function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && myStyles.pressed}
    >
      <MaterialCommunityIcons name={icon} size={size} color={color} />
    </Pressable>
  );
}

const myStyles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
