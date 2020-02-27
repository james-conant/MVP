import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button } from "react-native-elements";

export default function WeekList() {
  const [people, setPeople] = useState([
    { name: "name 1", key: "1" },
    { name: "name 2", key: "2" },
    { name: "name 3", key: "3" },
    { name: "name 4", key: "4" },
    { name: "name 5", key: "5" },
    { name: "name 6", key: "6" }
  ]);

  return (
    // <View style={styles.container}>
    //   <Text style={styles.header}>people</Text>
    //   <View>
    //     <FlatList
    //       keyExtractor={item => item.id}
    //       data={people}
    //       renderItem={({ item }) => (
    //         <Text style={styles.item}>{item.name}</Text>
    //       )}
    //     />
    //   </View>
    // </View>
    <ScrollView>
      <View style={styles.container}>
        {people.map(item => (
          <View>
            <Text style={styles.item}>{item.name}</Text>
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
    marginTop: 30,
    padding: 30,
    fontSize: 24,
    marginHorizontal: 10,
    backgroundColor: "pink"
  },
  header: {
    textAlign: "center",
    fontSize: 22,
    padding: 10,
    backgroundColor: "pink"
  }
});
