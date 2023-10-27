import { Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export function InstructionText({ children }) {
  return <Text style={styles.InstructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
