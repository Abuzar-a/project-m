import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const LiveQuiz1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.liveQuiz}>
      <View style={styles.liveQuizChild} />
      <Image
        style={[styles.image6Icon, styles.image6IconPosition]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={[styles.liveQuizItem, styles.image6IconPosition]} />
      <Text style={styles.back}>Back</Text>
      <Image
        style={styles.liveTvIcon}
        contentFit="cover"
        source={require("../assets/live-tv.png")}
      />
      <Text style={[styles.liveQuiz1, styles.liveQuiz1Typo]}>LIVE QUIZ</Text>
      <Text style={[styles.chemistry, styles.chemistryTypo]}>CHEMISTRY</Text>
      <Pressable
        style={[styles.mathematics, styles.chemistryPosition]}
        onPress={() => navigation.navigate("CHOSENCATEGORY")}
      >
        <Text style={[styles.mathematics1, styles.chemistryTypo]}>
          MATHEMATICS
        </Text>
      </Pressable>
      <Text style={[styles.physics, styles.physicsTypo]}>PHYSICS</Text>
      <Text style={[styles.biology, styles.physicsTypo]}>BIOLOGY</Text>
      <Text style={[styles.geography, styles.chemistryTypo]}>GEOGRAPHY</Text>
      <View style={[styles.liveQuizInner, styles.liveChildLayout]} />
      <View style={[styles.lineView, styles.liveChildLayout]} />
      <View style={[styles.liveQuizChild1, styles.liveChildLayout]} />
      <View style={[styles.liveQuizChild2, styles.liveChildLayout]} />
      <View style={[styles.liveQuizChild3, styles.liveChildLayout]} />
      <Image
        style={[styles.arrowForwardIosIcon, styles.arrowIconLayout]}
        contentFit="cover"
        source={require("../assets/arrow-forward-ios1.png")}
      />
      <Pressable
        style={[styles.arrowForwardIos, styles.arrowIconLayout]}
        onPress={() => navigation.navigate("CHOSENCATEGORY")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-forward-ios1.png")}
        />
      </Pressable>
      <Image
        style={[styles.arrowForwardIosIcon1, styles.arrowIconLayout]}
        contentFit="cover"
        source={require("../assets/arrow-forward-ios1.png")}
      />
      <Image
        style={[styles.arrowForwardIosIcon2, styles.arrowIconLayout]}
        contentFit="cover"
        source={require("../assets/arrow-forward-ios1.png")}
      />
      <Image
        style={[styles.arrowForwardIosIcon3, styles.arrowIconLayout]}
        contentFit="cover"
        source={require("../assets/arrow-forward-ios1.png")}
      />
      <Text style={[styles.selectCategory, styles.youCanCheckPosition]}>
        Select Category
      </Text>
      <Text style={[styles.youCanCheck, styles.youCanCheckPosition]}>
        You can check for other LIVE QUIZ after some time.
      </Text>
      <Text style={[styles.canYouSurvive, styles.liveQuiz1Typo]}>
        Can you survive the QUIZ Battlefield?
      </Text>
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
            source={require("../assets/local-convenience-store.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Store</Text>
        </View>
        <Pressable
          style={styles.liveTvParent}
          onPress={() => navigation.navigate("LiveQuiz")}
        >
          <Image
            style={[styles.liveTvIcon1, styles.iconLayout]}
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
  image6IconPosition: {
    display: "none",
    width: 360,
    left: 0,
    position: "absolute",
  },
  liveQuiz1Typo: {
    fontFamily: "Anton-Regular",
    textAlign: "left",
    color: "#fff",
    position: "absolute",
  },
  chemistryTypo: {
    height: 19,
    fontSize: 23,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
  },
  chemistryPosition: {
    left: 22,
    position: "absolute",
  },
  physicsTypo: {
    width: 98,
    height: 19,
    fontSize: 23,
    left: 22,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
    position: "absolute",
  },
  liveChildLayout: {
    height: 1,
    width: 317,
    borderTopWidth: 1,
    borderColor: "#6a6a6a",
    borderStyle: "solid",
    left: 24,
    position: "absolute",
  },
  arrowIconLayout: {
    height: 24,
    width: 24,
    left: 311,
    position: "absolute",
  },
  youCanCheckPosition: {
    left: 29,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
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
    fontSize: 14,
    top: 34,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
    position: "absolute",
  },
  liveQuizChild: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    height: 800,
  },
  image6Icon: {
    height: 814,
    top: 0,
  },
  liveQuizItem: {
    top: 2,
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
  },
  back: {
    top: 30,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
    fontSize: 13,
    left: 18,
    position: "absolute",
  },
  liveTvIcon: {
    height: "8.38%",
    width: "20.64%",
    top: "11.5%",
    right: "69.64%",
    bottom: "80.13%",
    left: "9.72%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  liveQuiz1: {
    top: 95,
    left: 137,
    fontSize: 38,
    letterSpacing: 3.8,
    width: 169,
    height: 47,
  },
  chemistry: {
    width: 134,
    left: 22,
    position: "absolute",
    top: 378,
  },
  mathematics1: {
    width: 160,
  },
  mathematics: {
    top: 426,
  },
  physics: {
    top: 474,
  },
  biology: {
    top: 522,
  },
  geography: {
    top: 570,
    width: 139,
    left: 22,
    position: "absolute",
  },
  liveQuizInner: {
    top: 416,
  },
  lineView: {
    top: 464,
  },
  liveQuizChild1: {
    top: 512,
  },
  liveQuizChild2: {
    top: 560,
  },
  liveQuizChild3: {
    top: 608,
  },
  arrowForwardIosIcon: {
    top: 378,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowForwardIos: {
    top: 429,
  },
  arrowForwardIosIcon1: {
    top: 479,
  },
  arrowForwardIosIcon2: {
    top: 526,
  },
  arrowForwardIosIcon3: {
    top: 572,
  },
  selectCategory: {
    top: 292,
    width: 181,
    height: 29,
    fontSize: 23,
    left: 29,
  },
  youCanCheck: {
    top: 640,
    width: 282,
    height: 27,
    left: 29,
    fontSize: 13,
  },
  canYouSurvive: {
    top: 188,
    left: 26,
    fontSize: 24,
    letterSpacing: 2.3,
    width: 290,
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
    width: 40,
    left: 18,
    top: 8,
  },
  localConvenienceStoreIcon: {
    left: 1,
  },
  localConvenienceStoreParent: {
    left: 115,
    width: 35,
  },
  liveTvIcon1: {
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
    top: 737,
  },
  liveQuiz: {
    backgroundColor: "#fff",
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
  },
});

export default LiveQuiz1;
