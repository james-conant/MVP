import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
// import { Button } from "react-native-elements";
import EnterWorkout from "./EnterWorkout.js";
import WeekList from "./WeekList.js";

export default function App() {
  return (
    <View>
      <Text style={styles.text}>Really Good Workout Log App</Text>
      <EnterWorkout />
      <WeekList />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingTop: 50,
    backgroundColor: "#fff",
    // needs backgrnd clr
    textAlign: "center",
    fontSize: 24
  }
});
