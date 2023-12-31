import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const LiveQuiz = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.liveQuiz}>
      <View style={styles.liveQuizChild} />
      <Image
        style={[styles.image6Icon, styles.image6IconLayout]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={[styles.liveQuizItem, styles.liveShadowBox]} />
      <Pressable
        style={styles.cancel}
        onPress={() => navigation.navigate("CATEGORIES")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/cancel.png")}
        />
      </Pressable>
      <Image
        style={styles.liveTvIcon}
        contentFit="cover"
        source={require("../assets/live-tv.png")}
      />
      <Text style={[styles.liveQuiz1, styles.okayTypo]}>LIVE QUIZ</Text>
      <Text style={[styles.guideForLiive, styles.okayTypo]}>
        Guide for LiIVE QUIZ:
      </Text>
      <Text style={[styles.competeMoreThan, styles.offersInAppTypo]}>
        Compete more than 100 users
      </Text>
      <Text style={[styles.greatRewardsIn, styles.offersInAppTypo]}>
        Great Rewards in less time
      </Text>
      <Text style={[styles.offersInApp, styles.offersInAppTypo]}>
        Offers in app store for Top 10
      </Text>
      <Text style={[styles.chanceToWin, styles.offersInAppTypo]}>
        Chance to win IPhone
      </Text>
      <Pressable
        style={[styles.liveQuizInner, styles.liveShadowBox]}
        onPress={() => navigation.navigate("LiveQuiz1")}
      />
      <Text style={[styles.okay, styles.okayTypo]}>OKAY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image6IconLayout: {
    display: "none",
    width: 360,
    left: 0,
  },
  liveShadowBox: {
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
    color: "#fff",
    fontFamily: "Anton-Regular",
    position: "absolute",
  },
  offersInAppTypo: {
    fontFamily: "ABeeZee-Regular",
    fontSize: 20,
    left: 29,
    textAlign: "left",
    color: "#fff",
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
    display: "none",
    position: "absolute",
  },
  liveQuizItem: {
    top: 2,
    backgroundColor: "rgba(22, 22, 22, 0.5)",
    height: 798,
    display: "none",
    width: 360,
    left: 0,
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
  guideForLiive: {
    top: 222,
    left: 33,
    fontSize: 24,
    letterSpacing: 2.3,
    width: 232,
  },
  competeMoreThan: {
    top: 507,
  },
  greatRewardsIn: {
    top: 397,
  },
  offersInApp: {
    top: 452,
  },
  chanceToWin: {
    top: 342,
  },
  liveQuizInner: {
    top: 688,
    left: 1,
    backgroundColor: "#ff2a83",
    width: 359,
    height: 80,
  },
  okay: {
    top: 707,
    left: 152,
    fontSize: 28,
    letterSpacing: 2.8,
    width: 65,
    height: 35,
  },
  liveQuiz: {
    backgroundColor: "#fff",
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
  },
});

export default LiveQuiz;
