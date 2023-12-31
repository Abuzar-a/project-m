import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const QUIZBEGIN = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizBegin}>
      <View style={[styles.quizBeginChild, styles.quizPosition]} />
      <Image
        style={[styles.image6Icon, styles.quizPosition]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={[styles.quizBeginItem, styles.quizShadowBox]} />
      <Text
        style={[styles.categoryBiology, styles.quiz1Typo]}
      >{`CATEGORY: BIOLOGY `}</Text>
      <Text style={[styles.quiz1, styles.quiz1Typo]}>QUIZ: 1</Text>
      <View style={styles.details}>
        <Text
          style={[styles.duration5Min, styles.duration5MinTypo]}
        >{`Duration: 5 min `}</Text>
        <Text
          style={[styles.questionPerQuiz, styles.duration5MinTypo]}
        >{`Question per quiz: 7 `}</Text>
        <Text style={[styles.reward30Gems, styles.duration5MinTypo]}>
          Reward: 30 Gems
        </Text>
      </View>
      <Pressable
        style={[styles.quizBeginInner, styles.quizShadowBox]}
        onPress={() => navigation.navigate("QUESTION1")}
      />
      <Text style={styles.start}>START</Text>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("CHOSENCATEGORY1")}
      >
        <Text style={styles.back1}>Back</Text>
      </Pressable>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
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
            source={require("../assets/live-tv1.png")}
          />
          <Text style={[styles.live, styles.homeTypo]}>Live</Text>
        </Pressable>
        <View style={[styles.accountCircleParent, styles.parentPosition]}>
          <Image
            style={[styles.accountCircleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/account-circle.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Profile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quizPosition: {
    width: 360,
    left: 0,
    top: 0,
  },
  quizShadowBox: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  quiz1Typo: {
    height: 31,
    letterSpacing: 2.5,
    fontSize: 25,
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
  menuLayout: {
    height: 64,
    width: 360,
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
    fontSize: 14,
    top: 34,
    fontFamily: "ABeeZee-Regular",
    textAlign: "left",
    color: "#fff",
    position: "absolute",
  },
  quizBeginChild: {
    position: "absolute",
    height: 800,
  },
  image6Icon: {
    height: 814,
    display: "none",
    position: "absolute",
  },
  quizBeginItem: {
    backgroundColor: "rgba(22, 22, 22, 0.5)",
    height: 798,
    width: 360,
    left: 0,
    top: 0,
  },
  categoryBiology: {
    top: 93,
    left: 64,
    width: 223,
  },
  quiz1: {
    top: 147,
    left: 131,
    width: 90,
  },
  duration5Min: {
    width: 179,
    top: 0,
  },
  questionPerQuiz: {
    top: 32,
    width: 230,
  },
  reward30Gems: {
    top: 69,
    width: 209,
  },
  details: {
    top: 488,
    left: 65,
    height: 98,
    width: 230,
    position: "absolute",
  },
  quizBeginInner: {
    top: 618,
    backgroundColor: "#ff2a83",
    width: 359,
    height: 76,
    left: 1,
  },
  start: {
    top: 636,
    left: 139,
    fontSize: 28,
    letterSpacing: 2.8,
    width: 84,
    height: 37,
    textAlign: "left",
    color: "#fff",
    fontFamily: "Anton-Regular",
    position: "absolute",
  },
  back1: {
    fontSize: 13,
    fontFamily: "ABeeZee-Regular",
    textAlign: "left",
    color: "#fff",
  },
  back: {
    top: 30,
    left: 18,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 230,
    left: 74,
    width: 213,
    height: 213,
    position: "absolute",
  },
  menuChild: {
    backgroundColor: "#6c1c32",
    left: 0,
    top: 0,
  },
  homeIcon: {
    left: 4,
  },
  home: {
    left: 0,
  },
  homeParent: {
    width: 40,
    left: 18,
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
    top: 739,
    left: 2,
  },
  quizBegin: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default QUIZBEGIN;
