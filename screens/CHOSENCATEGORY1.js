import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const CHOSENCATEGORY1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chosenCategory}>
      <View style={[styles.chosenCategoryChild, styles.chosenPosition]} />
      <Image
        style={[styles.image6Icon, styles.chosenPosition]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={[styles.chosenCategoryItem, styles.chosenShadowBox]} />
      <Text
        style={[styles.categoryBiology, styles.okayTypo]}
      >{`CATEGORY: BIOLOGY `}</Text>
      <View style={styles.details}>
        <Text style={[styles.duration5Min, styles.bestScore90Typo]}>
          Duration: 5 min each
        </Text>
        <Text
          style={[styles.questionPerQuiz, styles.bestScore90Typo]}
        >{`Question per quiz: 5 - 7 `}</Text>
        <Text style={[styles.reward150Gems, styles.bestScore90Typo]}>
          Reward: 150 Gems
        </Text>
        <Text style={[styles.bestScore90, styles.bestScore90Typo]}>
          Best Score: 90 questions
        </Text>
      </View>
      <Text style={[styles.quiz, styles.quizTypo]}>20 Quiz</Text>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group2.png")}
      />
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("CATEGORIES")}
      >
        <Text style={[styles.back1, styles.quizTypo]}>Back</Text>
      </Pressable>
      <Pressable
        style={[styles.chosenCategoryInner, styles.chosenShadowBox]}
        onPress={() => navigation.navigate("QUIZBEGIN")}
      />
      <Text style={[styles.okay, styles.okayTypo]}>OKAY</Text>
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
            source={require("../assets/local-convenience-store2.png")}
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
  chosenPosition: {
    width: 360,
    left: 0,
    top: 0,
  },
  chosenShadowBox: {
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
  okayTypo: {
    textAlign: "left",
    fontFamily: "Anton-Regular",
    color: "#fff",
    position: "absolute",
  },
  bestScore90Typo: {
    height: 29,
    fontSize: 23,
    fontFamily: "ABeeZee-Regular",
    textAlign: "left",
    color: "#fff",
    left: 0,
    position: "absolute",
  },
  quizTypo: {
    fontFamily: "ABeeZee-Regular",
    textAlign: "left",
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
  chosenCategoryChild: {
    position: "absolute",
    height: 800,
  },
  image6Icon: {
    height: 814,
    display: "none",
    position: "absolute",
  },
  chosenCategoryItem: {
    backgroundColor: "rgba(22, 22, 22, 0.5)",
    height: 798,
    width: 360,
    left: 0,
    top: 0,
  },
  categoryBiology: {
    top: 93,
    left: 64,
    fontSize: 25,
    letterSpacing: 2.5,
    width: 223,
    height: 31,
  },
  duration5Min: {
    width: 235,
    top: 0,
  },
  questionPerQuiz: {
    top: 32,
    width: 275,
  },
  reward150Gems: {
    top: 69,
    width: 209,
  },
  bestScore90: {
    top: 106,
    width: 275,
  },
  details: {
    top: 460,
    left: 43,
    height: 135,
    width: 275,
    position: "absolute",
  },
  quiz: {
    top: 399,
    left: 119,
    fontSize: 31,
    color: "#878787",
    width: 114,
    height: 26,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 166,
    left: 69,
    width: 213,
    height: 213,
    position: "absolute",
  },
  back1: {
    fontSize: 13,
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
  },
  back: {
    top: 30,
    left: 18,
    position: "absolute",
  },
  chosenCategoryInner: {
    top: 616,
    backgroundColor: "#ff2a83",
    width: 359,
    height: 80,
    left: 1,
  },
  okay: {
    top: 633,
    left: 148,
    fontSize: 28,
    letterSpacing: 2.8,
    width: 65,
    height: 35,
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
    top: 735,
    left: 1,
  },
  chosenCategory: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default CHOSENCATEGORY1;
