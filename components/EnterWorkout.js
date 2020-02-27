import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Picker } from "react-native";
import { Button } from "react-native-elements";

export default function EnterWorkout() {
  const [workout, setWorkout] = useState("select");
  return (
    <View>
      <Picker
        style={styles.container}
        selectedValue={workout}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ workout: itemValue })
        }
      >
        <Picker.Item label="bodyBuilding" value="Body Building" />
        <Picker.Item label="createYourOwn" value="Create Your Own" />
      </Picker>
      <View style={styles.buttonContainer}>
        <Button title="submit" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    justifyContent: "center"
  },

  buttonContainer: {
    padding: 30
  }
});
