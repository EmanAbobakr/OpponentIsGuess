import { StyleSheet, View, Image, Text } from "react-native";
import { Title } from "../components/ui/Title";
import { Colors } from "../constants/colors";
import { PrimaryButton } from "../components/ui/PrimaryButton";

export function GameOverScreen({ roundsNumber, userNumbers, onStartNewGame }) {
  return (
    <View style={styles.screen}>
      <Title>GAME OVER!</Title>
      <View style={styles.circularImageContainer}>
        <Image
          source={require("../assets/images/success.webp")}
          style={styles.img}
        ></Image>
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess
        the number <Text style={styles.highlightText}>{userNumbers}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 50,
    alignItems: "center",
  },
  circularImageContainer: {
    height: 280,
    width: 280,
    margin: 30,
    borderWidth: 3,
    borderRadius: 140,
    borderBlockColor: Colors.primary800,
    overflow: "hidden",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  summaryText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    color: Colors.primary500,
  },
});
