import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "react-native-elements";
import EnterWorkout from "./EnterWorkout.js";

export default function App() {
  // console.log("hello console world!!");
  // const [name, setName] = useState("agata");
  // const [age, setAge] = useState(41);
  // const clickHandler = () => {
  //   setName("sean");
  // };
  return (
    <View>
      <EnterWorkout style={styles.container} />
    </View>
  );
}

const styles = StyleSheet.create({});
