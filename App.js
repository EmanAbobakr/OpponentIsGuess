import React from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { StartGameScreen } from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { GameScreen } from "./screens/GameScreen";
import { Colors } from "./constants/colors";
import { GameOverScreen } from "./screens/GameOverScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [enteredNum, setEnteredNum] = React.useState();
  const [gameIsOver, setGameIsOver] = React.useState(false);
  //why can not guessRoundsNum be a normal num not state?
  const [guessRounds, setGuessRounds] = React.useState(0);

  function pickedNumHandler(pickedNum) {
    setEnteredNum(pickedNum);
    //why do I need it even I can set gameIsOver to false not true?
    //setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    console.log("new game");
    setEnteredNum(null);
    setGameIsOver(false);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onConfirmNum={pickedNumHandler} />;

  if (enteredNum) {
    screen = (
      <GameScreen userNumber={enteredNum} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && enteredNum) {
    screen = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumbers={enteredNum}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        style={styles.rootScreen}
        colors={[Colors.primary700, Colors.accent500]}
      >
        <ImageBackground
          source={require("./assets/images/background.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backGroundImage}
        >
          {screen}
          {/* why do I need this safe area? */}
          {/* <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView> */}
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.15,
  },
});
