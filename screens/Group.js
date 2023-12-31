import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

const Group = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.iPosition]} />
      <Text style={[styles.i, styles.iPosition]}>i</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iPosition: {
    top: 0,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    borderRadius: 16,
    backgroundColor: "#565656",
    width: 8,
    height: 7,
  },
  i: {
    left: 3,
    fontSize: 6,
    fontFamily: "ABeeZee-Regular",
    color: "#fff",
    textAlign: "center",
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 8,
  },
});

export default Group;
