import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Picker } from "react-native";
import { Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function EnterWorkout({ navigation }) {
  const [workout, setWorkout] = useState("select");

  const handleUpdate = event => {
    console.log("event is", event.target.value);
    let text = event.target.value;
    setWorkout(text);
  };

  return (
    <View>
      <Text style={styles.header}>Choose Your Workout Type</Text>
      <Picker style={styles.container}>
        {/* <Picker style={styles.container} selectedValue={workout} onValueChange> */}

        <Picker.Item label="Body Building" value="body-building" />
        <Picker.Item
          label="Power Lifting (coming soon)"
          value="power-lifting"
        />
        <Picker.Item
          label="Create Your Own (coming soon)"
          value="create-your-own"
        />
      </Picker>
      <View style={styles.buttonContainer}>
        <Button
          title="Submit"
          onPress={event => {
            navigation.navigate("WeekList");
            // handleUpdate(event);
            // console.log("doodoo");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 100,
    justifyContent: "space-between",
    justifyContent: "center"
  },

  buttonContainer: {
    padding: 50
  },
  header: {
    textAlign: "center",
    fontSize: 24,
    backgroundColor: "grey",
    margin: 15
  }
});
