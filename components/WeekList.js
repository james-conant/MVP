import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button } from "react-native-elements";

export default function WeekList({ navigation }) {
  const [weeks, setWeeks] = useState([
    { week: "Week1", key: "1" },
    { week: "Week2", key: "2" },
    { week: "Week3", key: "3" },
    { week: "Week4", key: "4" },
    { week: "Week5", key: "5" },
    { week: "Week6", key: "6" }
  ]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {weeks.map(item => (
          <View style={styles.item}>
            <Button
              color="yellow"
              title={item.week}
              onPress={event => {
                console.log(event);
                navigation.navigate(item.week);
              }}
            >
              {item.week}
            </Button>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 1200,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20
  },

  item: {
    // flex: 1,
    marginTop: 30,
    padding: 30,
    fontSize: 24,
    marginHorizontal: 10,
    color: "yellow"
  },
  header: {
    textAlign: "center",
    fontSize: 22,
    padding: 10,
    backgroundColor: "pink"
  }
});
