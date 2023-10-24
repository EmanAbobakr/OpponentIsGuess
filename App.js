import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { StartGameScreen } from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { GameScreen } from "./screens/GameScreen";
import { Colors } from "./constants/colors";

export default function App() {
  const [enteredNum, setEnteredNum] = React.useState();

  function pickedNumHandler(pickedNum) {
    setEnteredNum(pickedNum);
  }

  let screen = <StartGameScreen onConfirmNum={pickedNumHandler} />;

  if (enteredNum) {
    screen = <GameScreen />;
  }
  return (
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
      </ImageBackground>
    </LinearGradient>
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
