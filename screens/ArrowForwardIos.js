import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const ArrowForwardIos = () => {
  return (
    <View style={styles.arrowForwardIos}>
      <Image
        style={styles.arrowForwardIosIcon}
        contentFit="cover"
        source={require("../assets/arrow-forward-ios.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  arrowForwardIosIcon: {
    position: "absolute",
    height: "82.89%",
    width: "48.68%",
    top: "26.32%",
    right: "42.76%",
    bottom: "-9.21%",
    left: "8.55%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    transform: [
      {
        rotate: "88.97deg",
      },
    ],
  },
  arrowForwardIos: {
    flex: 1,
    width: "100%",
    height: 15,
    display: "none",
    transform: [
      {
        rotate: "88.97deg",
      },
    ],
  },
});

export default ArrowForwardIos;
