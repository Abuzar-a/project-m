import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const CATEGORIES = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.categories}>
      <View style={[styles.categoriesChild, styles.image6IconPosition]} />
      <Image
        style={[styles.image6Icon, styles.image6IconPosition]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <Text style={styles.areYouA}>Are you a genius?</Text>
      <Text style={[styles.selectCategory, styles.weAreGladTypo]}>
        Select Category
      </Text>
      <Text style={[styles.history, styles.sportsTypo]}>HISTORY</Text>
      <Text style={[styles.mathematics, styles.sportsTypo]}>MATHEMATICS</Text>
      <Text style={[styles.physics, styles.sportsTypo]}>PHYSICS</Text>
      <Pressable
        style={styles.biology}
        onPress={() => navigation.navigate("CHOSENCATEGORY1")}
      >
        <Text style={[styles.biology1, styles.sportsTypo]}>BIOLOGY</Text>
      </Pressable>
      <Text style={[styles.geography, styles.sportsTypo]}>GEOGRAPHY</Text>
      <Text style={[styles.sports, styles.sportsTypo]}>SPORTS</Text>
      <Text style={[styles.currentAffair, styles.sportsTypo]}>
        CURRENT AFFAIR
      </Text>
      <Text style={[styles.chemistry, styles.sportsTypo]}>CHEMISTRY</Text>
      <Text style={[styles.language, styles.sportsTypo]}>LANGUAGE</Text>
      <Image
        style={styles.lineSeperationIcon}
        contentFit="cover"
        source={require("../assets/line-seperation.png")}
      />
      <Pressable
        style={styles.arrows}
        onPress={() => navigation.navigate("CHOSENCATEGORY1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrows.png")}
        />
      </Pressable>
      <Image
        style={styles.arrowForwardIosIcon}
        contentFit="cover"
        source={require("../assets/arrow-forward-ios1.png")}
      />
      <View style={[styles.topMenu, styles.topMenuPosition]}>
        <Text style={[styles.weAreGlad, styles.weAreGladTypo]}>
          We are glad to have you ALI!
        </Text>
        <Image
          style={[styles.micIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/mic.png")}
        />
        <View style={[styles.topMenuChild, styles.topPosition]} />
        <View style={[styles.topMenuItem, styles.topPosition]} />
        <Image
          style={[styles.searchIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
        <Text style={[styles.levelEasy, styles.topMenuPosition]}>
          Level: EASY
        </Text>
        <Image
          style={[styles.translateIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/translate.png")}
        />
      </View>
      <View style={[styles.menu, styles.menuLayout]}>
        <View style={[styles.menuChild, styles.menuLayout]} />
        <View style={[styles.homeParent, styles.parentPosition]}>
          <Image
            style={[styles.homeIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </View>
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
      <View style={styles.categoriesItem} />
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
  weAreGladTypo: {
    fontFamily: "ABeeZee-Regular",
    textAlign: "left",
    color: "#fff",
  },
  sportsTypo: {
    height: 19,
    fontFamily: "ABeeZee-Regular",
    fontSize: 23,
    textAlign: "left",
    color: "#fff",
  },
  topMenuPosition: {
    top: 61,
    position: "absolute",
  },
  iconPosition: {
    top: 59,
    height: 24,
    width: 24,
    position: "absolute",
  },
  topPosition: {
    height: 27,
    backgroundColor: "#7e7e7e",
    top: 57,
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
    fontFamily: "ABeeZee-Regular",
    textAlign: "left",
    color: "#fff",
    position: "absolute",
  },
  categoriesChild: {
    height: 800,
  },
  image6Icon: {
    height: 814,
    display: "none",
  },
  areYouA: {
    top: 186,
    fontSize: 24,
    letterSpacing: 2.3,
    fontFamily: "Anton-Regular",
    textAlign: "left",
    color: "#fff",
    left: 23,
    position: "absolute",
  },
  selectCategory: {
    top: 263,
    width: 181,
    height: 29,
    fontSize: 23,
    fontFamily: "ABeeZee-Regular",
    left: 23,
    position: "absolute",
  },
  history: {
    width: 98,
    height: 19,
    top: 321,
    left: 23,
    position: "absolute",
  },
  mathematics: {
    top: 369,
    width: 160,
    left: 23,
    position: "absolute",
  },
  physics: {
    top: 417,
    width: 98,
    height: 19,
    left: 23,
    position: "absolute",
  },
  biology1: {
    width: 98,
    height: 19,
  },
  biology: {
    top: 465,
    left: 23,
    position: "absolute",
  },
  geography: {
    top: 513,
    width: 139,
    left: 23,
    position: "absolute",
  },
  sports: {
    top: 561,
    width: 98,
    height: 19,
    left: 23,
    position: "absolute",
  },
  currentAffair: {
    top: 609,
    width: 191,
    left: 23,
    position: "absolute",
  },
  chemistry: {
    top: 657,
    width: 128,
    left: 23,
    position: "absolute",
  },
  language: {
    top: 705,
    width: 121,
    left: 23,
    position: "absolute",
  },
  lineSeperationIcon: {
    top: 359,
    left: 25,
    width: 316,
    height: 336,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrows: {
    height: 363,
    width: 24,
    left: 312,
    top: 321,
    position: "absolute",
  },
  arrowForwardIosIcon: {
    top: 706,
    height: 24,
    width: 24,
    left: 312,
    position: "absolute",
  },
  weAreGlad: {
    left: 2,
    fontSize: 22,
    width: 308,
    top: 0,
    position: "absolute",
  },
  micIcon: {
    left: 264,
  },
  topMenuChild: {
    borderRadius: 15,
    width: 146,
    left: 115,
  },
  topMenuItem: {
    borderRadius: 9,
    width: 109,
    left: 0,
  },
  searchIcon: {
    left: 230,
  },
  levelEasy: {
    left: 12,
    fontSize: 15,
    width: 87,
    height: 20,
    fontFamily: "ABeeZee-Regular",
    textAlign: "left",
    color: "#fff",
  },
  translateIcon: {
    left: 295,
  },
  topMenu: {
    width: 319,
    height: 84,
    left: 23,
  },
  menuChild: {
    backgroundColor: "#711831",
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
    width: 35,
    left: 115,
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
    top: 736,
  },
  categoriesItem: {
    top: 409,
    left: 20,
    borderStyle: "solid",
    borderColor: "#6a6a6a",
    borderTopWidth: 1,
    width: 317,
    height: 1,
    position: "absolute",
  },
  categories: {
    backgroundColor: "#fff",
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
  },
});

export default CATEGORIES;
