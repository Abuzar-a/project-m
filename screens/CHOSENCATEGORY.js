import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const CHOSENCATEGORY = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chosenCategory}>
      <View style={[styles.chosenCategoryChild, styles.chosenLayout]} />
      <Image
        style={[styles.image6Icon, styles.chosenLayout]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={[styles.chosenCategoryItem, styles.timerChildShadowBox]} />
      <Text style={[styles.categoryMathematics, styles.quizTypo]}>
        CATEGORY: MATHEMATICS
      </Text>
      <View style={styles.duration5MinParent}>
        <Text style={[styles.duration5Min, styles.duration5MinTypo]}>
          Duration: 5 min
        </Text>
        <Text style={[styles.questionPerQuiz, styles.duration5MinTypo]}>
          Question per quiz: 10
        </Text>
        <Text style={[styles.reward300Gems, styles.duration5MinTypo]}>
          Reward: 300 Gems
        </Text>
      </View>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("LiveQuiz1")}
      >
        <Text style={styles.back1}>Back</Text>
      </Pressable>
      <Pressable
        style={[styles.timer, styles.timerLayout]}
        onPress={() => navigation.navigate("QUESTION")}
      >
        <View style={[styles.timerChild, styles.timerLayout]} />
        <Text style={[styles.quizStartsIn, styles.quizTypo]}>
          Quiz starts in 00:05
        </Text>
      </Pressable>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group1.png")}
      />
      <View style={styles.liveTvParent}>
        <Image
          style={styles.liveTvIcon}
          contentFit="cover"
          source={require("../assets/live-tv3.png")}
        />
        <Text style={[styles.liveQuiz, styles.quizTypo]}>LIVE QUIZ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chosenLayout: {
    width: 360,
    position: "absolute",
  },
  timerChildShadowBox: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
  },
  quizTypo: {
    textAlign: "left",
    color: "#fff",
    fontFamily: "Anton-Regular",
    position: "absolute",
  },
  duration5MinTypo: {
    height: 29,
    fontSize: 23,
    fontFamily: "ABeeZee-Regular",
    textAlign: "left",
    color: "#fff",
    left: 0,
    position: "absolute",
  },
  timerLayout: {
    height: 80,
    width: 359,
    position: "absolute",
  },
  chosenCategoryChild: {
    left: 0,
    width: 360,
    top: 0,
    height: 800,
  },
  image6Icon: {
    height: 814,
    display: "none",
    left: 0,
    width: 360,
    top: 0,
  },
  chosenCategoryItem: {
    backgroundColor: "rgba(22, 22, 22, 0.5)",
    height: 798,
    width: 360,
    position: "absolute",
  },
  categoryMathematics: {
    top: 173,
    left: 33,
    fontSize: 25,
    letterSpacing: 2.5,
    width: 295,
    height: 31,
  },
  duration5Min: {
    width: 235,
    top: 0,
    fontSize: 23,
  },
  questionPerQuiz: {
    top: 32,
    width: 243,
  },
  reward300Gems: {
    top: 69,
    width: 209,
  },
  duration5MinParent: {
    top: 515,
    left: 59,
    height: 98,
    width: 243,
    position: "absolute",
  },
  back1: {
    fontSize: 13,
    fontFamily: "ABeeZee-Regular",
    textAlign: "left",
    color: "#fff",
  },
  back: {
    left: 18,
    top: 30,
    position: "absolute",
  },
  timerChild: {
    backgroundColor: "#ff2a83",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
  },
  quizStartsIn: {
    top: 19,
    left: 44,
    fontSize: 28,
    letterSpacing: 2.8,
    width: 271,
    height: 35,
  },
  timer: {
    top: 694,
    left: 1,
  },
  maskGroupIcon: {
    top: 232,
    left: 73,
    width: 213,
    height: 213,
    position: "absolute",
  },
  liveTvIcon: {
    height: "100%",
    width: "27.43%",
    top: "0%",
    right: "72.57%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  liveQuiz: {
    top: 2,
    left: 81,
    fontSize: 30,
    letterSpacing: 3,
    width: 134,
    height: 37,
  },
  liveTvParent: {
    height: "6.63%",
    width: "59.56%",
    top: "9.75%",
    right: "20.17%",
    bottom: "83.63%",
    left: "20.28%",
    position: "absolute",
  },
  chosenCategory: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default CHOSENCATEGORY;
