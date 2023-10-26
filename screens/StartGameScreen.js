import React from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Colors } from "../constants/colors";

export function StartGameScreen({ onConfirmNum }) {
  const [enteredNum, setEnteredNum] = React.useState("");

  function enteredNumHandler(num) {
    setEnteredNum(num);
  }

  function confirmButtonHandler() {
    console.log("confirm");
    const chosenNum = parseInt(enteredNum);
    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      //title/msg/configured btns
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetButtonHandler }]
      );
      return;
    }

    onConfirmNum(chosenNum);
  }
  function resetButtonHandler() {
    console.log("presses");
    setEnteredNum("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={enteredNumHandler}
        value={enteredNum}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetButtonHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmButtonHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    //default of alignItems is stretch
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
