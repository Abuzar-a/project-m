import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const RESULT = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.result}>
      <View style={[styles.resultChild, styles.image6IconPosition]} />
      <Image
        style={[styles.image6Icon, styles.image6IconPosition]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={[styles.resultItem, styles.resultShadowBox]} />
      <View style={[styles.resultInner, styles.resultShadowBox]} />
      <Pressable
        style={styles.cancel}
        onPress={() => navigation.navigate("QUIZBEGIN")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/cancel.png")}
        />
      </Pressable>
      <Text style={[styles.yayyYouHaveContainer, styles.containerTypo]}>
        <Text style={styles.yayyYouHaveAnswered}>{`YAYY!!
YOU HAVE ANSWERED ALL QUESTIONS OF`}</Text>
        <Text style={styles.quiz1}> QUIZ 1</Text>
        <Text style={styles.yayyYouHaveAnswered}> CORRECTLY</Text>
      </Text>
      <Text style={[styles.moveToQuiz, styles.moveToQuizTypo]}>
        Move to QUIZ 2
      </Text>
      <Text style={[styles.of7Correct, styles.moveToQuizTypo]}>
        7 of 7 CORRECT
      </Text>
      <Text style={[styles.gemsAddedToContainer, styles.containerTypo]}>
        <Text style={styles.gems}>30 GEMS</Text>
        <Text style={styles.quiz1}> added to your account</Text>
      </Text>
      <Text style={[styles.scoreboard, styles.moveToQuizTypo]}>SCOREBOARD</Text>
      <View style={[styles.menu, styles.menuLayout]}>
        <View style={[styles.menuChild, styles.menuLayout]} />
        <Pressable
          style={[styles.homeParent, styles.parentPosition]}
          onPress={() => navigation.navigate("CATEGORIES")}
        >
          <Image
            style={[styles.homeIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </Pressable>
        <View
          style={[styles.localConvenienceStoreParent, styles.parentPosition]}
        >
          <Image
            style={[styles.localConvenienceStoreIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/local-convenience-store1.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Store</Text>
        </View>
        <Pressable
          style={styles.liveTvParent}
          onPress={() => navigation.navigate("LiveQuiz")}
        >
          <Image
            style={[styles.liveTvIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/live-tv2.png")}
          />
          <Text style={[styles.live, styles.homeTypo]}>Live</Text>
        </Pressable>
        <View style={[styles.accountCircleParent, styles.parentPosition]}>
          <Image
            style={[styles.accountCircleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/account-circle1.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Profile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image6IconPosition: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  resultShadowBox: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 360,
    left: 0,
    position: "absolute",
  },
  containerTypo: {
    width: 291,
    textAlign: "left",
    fontFamily: "Anton-Regular",
    letterSpacing: 2.5,
    fontSize: 25,
    left: 27,
    position: "absolute",
  },
  moveToQuizTypo: {
    height: 31,
    color: "#fff",
    textAlign: "left",
    fontFamily: "Anton-Regular",
    letterSpacing: 2.5,
    fontSize: 25,
    position: "absolute",
  },
  menuLayout: {
    height: 64,
    width: 360,
    left: 0,
    position: "absolute",
  },
  parentPosition: {
    height: 51,
    top: 8,
    position: "absolute",
  },
  iconLayout: {
    height: 32,
    width: 32,
    top: 0,
    position: "absolute",
  },
  homeTypo: {
    fontFamily: "ABeeZee-Regular",
    fontSize: 14,
    top: 34,
    color: "#fff",
    textAlign: "left",
    position: "absolute",
  },
  resultChild: {
    height: 800,
  },
  image6Icon: {
    height: 814,
    display: "none",
  },
  resultItem: {
    backgroundColor: "rgba(22, 22, 22, 0.5)",
    height: 798,
    top: 0,
  },
  resultInner: {
    top: 620,
    backgroundColor: "#ff2a83",
    height: 72,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  cancel: {
    left: 316,
    top: 25,
    width: 24,
    height: 24,
    position: "absolute",
  },
  yayyYouHaveAnswered: {
    color: "#ff2a83",
  },
  quiz1: {
    color: "#fff",
  },
  yayyYouHaveContainer: {
    top: 258,
    height: 113,
  },
  moveToQuiz: {
    top: 636,
    left: 85,
    width: 190,
  },
  of7Correct: {
    top: 153,
    width: 187,
    left: 27,
    height: 31,
  },
  gems: {
    color: "#f6d050",
  },
  gemsAddedToContainer: {
    top: 490,
    height: 68,
  },
  scoreboard: {
    top: 70,
    left: 23,
    width: 152,
  },
  menuChild: {
    backgroundColor: "#6c1c32",
    top: 0,
  },
  homeIcon: {
    left: 4,
  },
  home: {
    left: 0,
  },
  homeParent: {
    left: 18,
    width: 40,
  },
  localConvenienceStoreIcon: {
    left: 1,
  },
  localConvenienceStoreParent: {
    left: 115,
    width: 35,
  },
  liveTvIcon: {
    left: 0,
  },
  live: {
    left: 3,
  },
  liveTvParent: {
    left: 207,
    width: 32,
    height: 51,
    top: 8,
    position: "absolute",
  },
  accountCircleIcon: {
    left: 6,
  },
  accountCircleParent: {
    left: 296,
    width: 43,
  },
  menu: {
    top: 734,
  },
  result: {
    backgroundColor: "#fff",
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
  },
});

export default RESULT;
