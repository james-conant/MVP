import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
// import { Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import EnterWorkout from "./EnterWorkout.js";
import WeekList from "./WeekList.js";
import Week1 from "./weeks/Week1.js";
import Week2 from "./weeks/Week2.js";
import Week3 from "./weeks/Week3.js";
import Week4 from "./weeks/Week4.js";
import Week5 from "./weeks/Week5.js";
import Week6 from "./weeks/Week6.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="EnterWorkout" component={EnterWorkout} />
        <Stack.Screen name="WeekList" component={WeekList} />
        <Stack.Screen name="Week1" component={Week1} />
        <Stack.Screen name="Week2" component={Week2} />
        <Stack.Screen name="Week3" component={Week3} />
        <Stack.Screen name="Week4" component={Week4} />
        <Stack.Screen name="Week5" component={Week5} />
        <Stack.Screen name="Week6" component={Week6} />
      </Stack.Navigator>
    </NavigationContainer>
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
