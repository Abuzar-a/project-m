import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const QUESTION = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.question}>
      <View style={[styles.questionChild, styles.questionPosition]} />
      <Image
        style={[styles.image6Icon, styles.questionPosition]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={[styles.questionItem, styles.questionPosition]} />
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("CHOSENCATEGORY")}
      >
        <Text style={styles.back1}>Back</Text>
      </Pressable>
      <Text style={[styles.question8Of, styles.minLeftTypo]}>
        Question 8 of 10
      </Text>
      <View style={[styles.timer1, styles.timer1Position]}>
        <View style={[styles.timer1Child, styles.timer1Position]} />
        <View style={[styles.timer1Item, styles.timer1Position]} />
        <Text style={[styles.minLeft, styles.minLeftTypo]}>1:45 Min Left</Text>
      </View>
      <Text style={[styles.text, styles.aTypo]}>9:7</Text>
      <Text style={[styles.a, styles.aTypo]}>A.</Text>
      <Text style={[styles.b, styles.bTypo]}>B.</Text>
      <Text style={[styles.c, styles.cTypo]}>C.</Text>
      <Text style={[styles.d, styles.dTypo]}>D.</Text>
      <Text style={[styles.text1, styles.bTypo]}>7:9</Text>
      <Text style={[styles.text2, styles.cTypo]}>6:5</Text>
      <Text style={[styles.text3, styles.dTypo]}>81:49</Text>
      <View style={[styles.questionInner, styles.questionLayout]} />
      <View style={[styles.lineView, styles.questionLayout]} />
      <View style={[styles.questionChild1, styles.questionLayout]} />
      <Text style={[styles.theAreasOf, styles.aTypo]}>
        The areas of two similar triangles are 81 sq. cm and 49 sq. cm. Find the
        ratio of their corresponding heights.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  questionPosition: {
    left: 0,
    width: 360,
    top: 0,
    position: "absolute",
  },
  minLeftTypo: {
    height: 31,
    fontFamily: "Anton-Regular",
    letterSpacing: 2.5,
    fontSize: 25,
    textAlign: "left",
    color: "#fff",
    position: "absolute",
  },
  timer1Position: {
    height: 74,
    left: 0,
    position: "absolute",
  },
  aTypo: {
    fontSize: 23,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
    position: "absolute",
  },
  bTypo: {
    color: "#ff2a83",
    top: 440,
    fontSize: 23,
    textAlign: "left",
    fontFamily: "ABeeZee-Regular",
    position: "absolute",
  },
  cTypo: {
    top: 494,
    fontSize: 23,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
    position: "absolute",
  },
  dTypo: {
    top: 552,
    fontSize: 23,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
    position: "absolute",
  },
  questionLayout: {
    height: 1,
    width: 317,
    borderTopWidth: 1,
    borderColor: "#6a6a6a",
    borderStyle: "solid",
    left: 22,
    position: "absolute",
  },
  questionChild: {
    width: 360,
    height: 800,
  },
  image6Icon: {
    height: 814,
    display: "none",
    width: 360,
  },
  questionItem: {
    backgroundColor: "rgba(22, 22, 22, 0.5)",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    height: 798,
    width: 360,
  },
  back1: {
    fontSize: 13,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
  },
  back: {
    left: 18,
    top: 30,
    position: "absolute",
  },
  question8Of: {
    top: 115,
    left: 25,
    width: 199,
  },
  timer1Child: {
    backgroundColor: "#ff2a83",
    width: 360,
    top: 0,
    height: 74,
  },
  timer1Item: {
    backgroundColor: "#4f494e",
    width: 278,
    top: 0,
    height: 74,
  },
  minLeft: {
    top: 19,
    left: 93,
    width: 174,
  },
  timer1: {
    top: 726,
    width: 360,
  },
  text: {
    left: 67,
    top: 382,
    fontSize: 23,
  },
  a: {
    left: 26,
    top: 382,
    fontSize: 23,
  },
  b: {
    left: 27,
  },
  c: {
    left: 27,
  },
  d: {
    left: 27,
  },
  text1: {
    left: 67,
  },
  text2: {
    left: 67,
  },
  text3: {
    left: 67,
  },
  questionInner: {
    top: 425,
  },
  lineView: {
    top: 483,
  },
  questionChild1: {
    top: 541,
  },
  theAreasOf: {
    top: 197,
    width: 289,
    left: 27,
  },
  question: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default QUESTION;
