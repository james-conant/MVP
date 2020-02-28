import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
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

export default class Week6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Lift", "Sets", "Reps", "RPE/Weight"],
      tableTitle: [
        "Pause Squat",
        "Deadlift",
        "Leg Curl",
        "Split Squat",
        "Plank",
        "Inc Bench",
        "Face Pull"
      ],
      tableData: [
        ["3", "5", "8"],
        ["5", "5", "8"],
        ["3", "8", "7"],
        ["3", "15", "7"],
        ["2", "60 Sec.", "8"],
        ["3", "8", "7"],
        ["2", "15", "7"]
      ],
      tableHead2: ["Lift", "Sets", "Reps", "RPE/Weight"],
      tableTitle2: [
        "F Squat",
        "Wtd Pullup",
        "Bb Row",
        "Pulldown",
        "Cbl Row",
        "Bb Curl",
        "Db Curl"
      ],
      tableData2: [
        ["5", "3", "8"],
        ["4", "6", "8"],
        ["3", "8", "7"],
        ["3", "12", "7"],
        ["3", "12", "7"],
        ["3", "8", "8"],
        ["3", "12", "8"]
      ],
      tableHead3: ["Lift", "Sets", "Reps", "RPE/Weight"],
      tableTitle3: [
        "P Squat",
        "P Bench",
        "Oh Press",
        "Db Press",
        "Cable Fly ",
        "Lat Raise",
        "Sk Cruher",
        "Cbl Tricep"
      ],
      tableData3: [
        ["3", "10 Sec.", "8"],
        ["5", "5", "8"],
        ["4", "8", "8"],
        ["3", "15", "7"],
        ["3", "12", "7"],
        ["3", "15", "7"],
        ["3", "12", "7"],
        ["3", "12", "7"]
      ],
      tableHead4: ["Lift", "Sets", "Reps", "RPE/Weight"],
      tableTitle4: [
        "Squat",
        "Deadlift",
        "L Press",
        "Leg Curl",
        "Cbl Row",
        "Spl Squat",
        "Plank"
      ],
      tableData4: [
        ["5", "5", "8"],
        ["4", "8", "8"],
        ["3", "12", "7"],
        ["3", "12", "7"],
        ["2", "15", "7"],
        ["3", "60 Sec.", "7"]
      ],
      tableHead5: ["Lift", "Sets", "Reps", "RPE/Weight"],
      tableTitle5: [
        "Pullup",
        "Bb Row",
        "Rev. Pldn",
        "Face Pull",
        "S Db Curl",
        "H Curl"
      ],
      tableData5: [
        ["6", "10", "9"],
        ["3", "8", "8"],
        ["3", "12", "7"],
        ["3", "15", "7"],
        ["3", "12", "7"],
        ["2", "15", "7"]
      ],
      tableHead6: ["Lift", "Sets", "Reps", "RPE/Weight"],
      tableTitle6: [
        "Tmp Squat",
        "Oh Press",
        "Cg Bench",
        "Wtd Dips",
        "Pushup",
        "Cbl Tricep",
        "Lat Raise"
      ],
      tableData6: [
        ["3", "5", "8"],
        ["5", "5", "8"],
        ["4", "6", "8"],
        ["3", "8", "7"],
        ["4", "20", "7"],
        ["3", "15", "7"],
        ["3", "15", "7"]
      ]
    };
  }
  render() {
    const state = this.state;
    return (
      <ScrollView>
        <Text>Day 1</Text>
        <View style={styles.container}>
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
        <Text>Day 2</Text>
        <View style={styles.container}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <Row
              data={state.tableHead2}
              flexArr={[1, 2, 1, 1]}
              style={styles.head}
              textStyle={styles.text}
            />
            <TableWrapper style={styles.wrapper}>
              <Col
                data={state.tableTitle2}
                style={styles.title}
                heightArr={[28, 28]}
                textStyle={styles.text}
              />
              <Rows
                data={state.tableData2}
                flexArr={[2, 1, 1]}
                style={styles.row}
                textStyle={styles.text}
              />
            </TableWrapper>
          </Table>
        </View>
        <Text>Day 3</Text>
        <View style={styles.container}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <Row
              data={state.tableHead3}
              flexArr={[1, 2, 1, 1]}
              style={styles.head}
              textStyle={styles.text}
            />
            <TableWrapper style={styles.wrapper}>
              <Col
                data={state.tableTitle3}
                style={styles.title}
                heightArr={[28, 28]}
                textStyle={styles.text}
              />
              <Rows
                data={state.tableData3}
                flexArr={[2, 1, 1]}
                style={styles.row}
                textStyle={styles.text}
              />
            </TableWrapper>
          </Table>
        </View>
        <Text>Day 4</Text>
        <View style={styles.container}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <Row
              data={state.tableHead4}
              flexArr={[1, 2, 1, 1]}
              style={styles.head}
              textStyle={styles.text}
            />
            <TableWrapper style={styles.wrapper}>
              <Col
                data={state.tableTitle4}
                style={styles.title}
                heightArr={[28, 28]}
                textStyle={styles.text}
              />
              <Rows
                data={state.tableData4}
                flexArr={[2, 1, 1]}
                style={styles.row}
                textStyle={styles.text}
              />
            </TableWrapper>
          </Table>
        </View>
        <Text>Day 5</Text>
        <View style={styles.container}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <Row
              data={state.tableHead5}
              flexArr={[1, 2, 1, 1]}
              style={styles.head}
              textStyle={styles.text}
            />
            <TableWrapper style={styles.wrapper}>
              <Col
                data={state.tableTitle5}
                style={styles.title}
                heightArr={[28, 28]}
                textStyle={styles.text}
              />
              <Rows
                data={state.tableData5}
                flexArr={[2, 1, 1]}
                style={styles.row}
                textStyle={styles.text}
              />
            </TableWrapper>
          </Table>
        </View>
        <Text>Day 6</Text>
        <View style={styles.container}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <Row
              data={state.tableHead6}
              flexArr={[1, 2, 1, 1]}
              style={styles.head}
              textStyle={styles.text}
            />
            <TableWrapper style={styles.wrapper}>
              <Col
                data={state.tableTitle6}
                style={styles.title}
                heightArr={[28, 28]}
                textStyle={styles.text}
              />
              <Rows
                data={state.tableData6}
                flexArr={[2, 1, 1]}
                style={styles.row}
                textStyle={styles.text}
              />
            </TableWrapper>
          </Table>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff"
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#f6f8fa" },
  row: { height: 28 },
  text: { textAlign: "center" }
});
