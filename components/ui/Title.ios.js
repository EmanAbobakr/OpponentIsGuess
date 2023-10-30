import { Text, StyleSheet } from "react-native";

export function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 0,
    borderColor: "white",
    padding: 12,
  },
});
