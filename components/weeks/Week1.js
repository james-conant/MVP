import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col
} from "react-native-table-component";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { Button } from "react-native-elements";

export default class Week1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Lift", "weight", "Sets", "Reps", "RPE"],
      tableTitle: [
        "Pause Squat",
        "Deadlift",
        "Leg Curl",
        "Split Squat",
        "Plank",
        "Incline Bench",
        "Face Pull"
      ],
      tableData: [
        ["1", "2", "3", "4"],
        ["a", "b", "c", "d"],
        ["1", "2", "3", "4"],
        ["a", "b", "c", "d"],
        ["1", "2", "3", "4"],
        ["a", "b", "c", "d"],
        ["1", "2", "3", "4"]
      ]
    };
  }
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Text>Day 1</Text>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={state.tableHead}
            flexArr={[1, 2, 1, 1]}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Col
              data={state.tableTitle}
              style={styles.title}
              heightArr={[28, 28]}
              textStyle={styles.text}
            />
            <Rows
              data={state.tableData}
              flexArr={[2, 1, 1]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#f6f8fa" },
  row: { height: 28 },
  text: { textAlign: "center" }
});
