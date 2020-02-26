import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Picker } from "react-native";
import { Button } from "react-native-elements";

export default function EnterWeeks() {
  const [week, setWeek] = useState("select");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={week}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ week: itemValue })
        }
      >
        <Picker.Item label="6Weeks" value="6 Weeks" />
        <Picker.Item label="12Weeks" value="12 weeks" />
      </Picker>
      <Button title="submit" style={styles.buttonContainer} />
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
