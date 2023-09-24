import { Text } from "react-native";
import { COLORS } from "../../utils/Themes";

/*********************************************************
 * TextPrimary - a <Text> component of the Primary Color
 * Props
 *  children: the content of the <Text>
 *  style: optional. To add more style (color cannot be changed and fontSize must be change be props.fontSize)
 *  fontSize: can be set directly by Prop and have preceance over all.
 */
export default function TextPrimary({ children, style, fontSize = 16 }) {
  return (
    <Text style={[style, { fontSize: fontSize, color: COLORS.primary500 }]}>
      {children}
    </Text>
  );
}
