import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Button } from "react-native-elements";

export default function WeekList() {
  const [weeks, setWeeks] = useState([
    { week: "week 1", id: "1" },
    { week: "week 2", id: "2" },
    { week: "week 3", id: "3" },
    { week: "week 4", id: "4" },
    { week: "week 5", id: "5" },
    { week: "week 6", id: "6" }
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        //   numColumns={2}
        keyExtractor={item => item.id}
        data={weeks}
        renderItem={({ item }) => <Text style={styles.item}>{item.week}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20
  },

  item: {
    marginTop: 30,
    padding: 30,
    fontSize: 24,
    marginHorizontal: 10,
    backgroundColor: "pink"
  }
});
