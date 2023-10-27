import React from "react";
import { Text, View, Alert, StyleSheet } from "react-native";
import { Title } from "../components/ui/Title";
import { NumberContainer } from "../components/game/NumberContainer";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import { GuessLogItem } from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  return rndNum === exclude ? generateRandomBetween(min, max, exclude) : rndNum;
}

let minBoundry = 1;
let maxBoundry = 100;

export function GameScreen({ userNumber, onGameOver }) {
  //the upper boundry is execluded
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = React.useState(initialGuess);
  const [guessRounds, setGuessRounds] = React.useState([]);

  //runs after the component fun has executed
  React.useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  React.useEffect(() => {
    (minBoundry = 1), (maxBoundry = 100);
  }, []);

  function nextGuessHandler(direction) {
    console.log("nxtGuessHandler");
    //the upper boundry is execluded
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that is wrong..", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    direction === "lower"
      ? (maxBoundry = currentGuess)
      : (minBoundry = currentGuess + 1);
    const newRandNumber = generateRandomBetween(
      minBoundry,
      maxBoundry,
      currentGuess
    );
    setCurrentGuess(newRandNumber);
    setGuessRounds((prevGuessRounds) => [newRandNumber, ...prevGuessRounds]);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        {guessRounds.map((guessRound, index) => (
          <GuessLogItem
            roundNumber={index + 1}
            guess={guessRound}
          ></GuessLogItem>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    marginTop: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
