import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { Button } from "react-native-elements";

export default function Week2(component) {
  return (
    <View>
      <Text style={styles.text}>greetings from week 2</Text>
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
