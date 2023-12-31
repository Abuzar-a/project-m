import * as React from "react";
import { Text, StyleSheet } from "react-native";

const Text1 = () => {
  return <Text style={styles.text}> 9:7</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 23,
    fontFamily: "ABeeZee-Regular",
    color: "#000",
    textAlign: "left",
  },
});

export default Text1;
