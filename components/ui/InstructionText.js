import { Text, StyleSheet, Platform } from "react-native";
import { Colors } from "../../constants/colors";

export function InstructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Platform.select({ android: Colors.accent500, ios: "white" }),
    fontSize: 24,
  },
});
