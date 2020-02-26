import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "react-native-elements";

export default function App() {
  console.log("hello console world!!");
  const [name, setName] = useState("agata");
  const [person, setPerson] = useState({ name: "mario", age: 41 });
  const clickHandler = () => {
    setName("sean");
    setPerson({ name: "luigi", age: 39 });
  };
  return (
    <View style={styles.container}>
      <Text>enter name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        onChangeText={val => setName(val)}
      />
      <Text>
        his name is {name} and his age is {person.age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 2.5,
    borderColor: "#777",
    padding: 9,
    margin: 15,
    width: 210
  }
});
