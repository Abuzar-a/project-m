import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const QUESTION1 = () => {
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
      <View style={[styles.questionInner, styles.questionInnerPosition]} />
      <View style={[styles.rectangleView, styles.questionInnerPosition]} />
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("QUIZBEGIN")}
      >
        <Text style={styles.back1}>Back</Text>
      </Pressable>
      <Text style={[styles.question1Of, styles.minLeftTypo]}>
        Question 1 of 7
      </Text>
      <Text style={[styles.minLeft, styles.minLeftTypo]}>4:45 Min Left</Text>
      <Pressable
        style={styles.options}
        onPress={() => navigation.navigate("RESULT")}
      >
        <Text style={[styles.paracrineSignaling, styles.aTypo]}>
          Paracrine signaling
        </Text>
        <Text style={[styles.a, styles.aTypo]}>A.</Text>
        <Text style={[styles.b, styles.bTypo]}>B.</Text>
        <Text style={[styles.c, styles.cTypo]}>C.</Text>
        <Text style={[styles.d, styles.dTypo]}>D.</Text>
        <Text style={[styles.autocrineSignaling, styles.bTypo]}>
          Autocrine signaling
        </Text>
        <Text style={[styles.endocrineSignaling, styles.cTypo]}>
          Endocrine signaling
        </Text>
        <Text style={[styles.allOfThe, styles.dTypo]}>All of the above</Text>
      </Pressable>
      <View style={[styles.lineView, styles.questionChildLayout]} />
      <View style={[styles.questionChild1, styles.questionChildLayout]} />
      <View style={[styles.questionChild2, styles.questionChildLayout]} />
      <Text style={[styles.whichOfThe, styles.aTypo]}>
        Which of the following are the basic categories of chemical signaling
        found in multicellular organisms?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  questionPosition: {
    left: 0,
    top: 0,
  },
  questionInnerPosition: {
    height: 74,
    top: 726,
    left: 0,
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
  aTypo: {
    fontSize: 23,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
    position: "absolute",
  },
  bTypo: {
    color: "#ff2a83",
    top: 58,
    fontSize: 23,
    textAlign: "left",
    fontFamily: "ABeeZee-Regular",
    position: "absolute",
  },
  cTypo: {
    top: 112,
    fontSize: 23,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
    position: "absolute",
  },
  dTypo: {
    top: 170,
    fontSize: 23,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
    position: "absolute",
  },
  questionChildLayout: {
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
    position: "absolute",
    height: 800,
  },
  image6Icon: {
    height: 814,
    display: "none",
    width: 360,
    position: "absolute",
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
    position: "absolute",
  },
  questionInner: {
    backgroundColor: "#ff2a83",
    width: 360,
  },
  rectangleView: {
    backgroundColor: "#4f494e",
    width: 27,
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
  question1Of: {
    top: 115,
    left: 25,
    width: 187,
  },
  minLeft: {
    top: 745,
    left: 93,
    width: 174,
  },
  paracrineSignaling: {
    left: 41,
    top: 0,
    fontSize: 23,
  },
  a: {
    left: 0,
    top: 0,
  },
  b: {
    left: 1,
  },
  c: {
    left: 1,
  },
  d: {
    left: 1,
  },
  autocrineSignaling: {
    left: 41,
  },
  endocrineSignaling: {
    left: 41,
  },
  allOfThe: {
    left: 41,
  },
  options: {
    top: 382,
    left: 26,
    width: 248,
    height: 197,
    position: "absolute",
  },
  lineView: {
    top: 425,
  },
  questionChild1: {
    top: 483,
  },
  questionChild2: {
    top: 541,
  },
  whichOfThe: {
    top: 197,
    left: 27,
    width: 289,
  },
  question: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default QUESTION1;
