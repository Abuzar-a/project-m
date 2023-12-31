import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const SignUp2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp2}>
      <View style={[styles.signUp2Child, styles.iconPosition]} />
      <Image
        style={[styles.bgIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />
      <Image
        style={[styles.bgIcon1, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/bg1.png")}
      />
      <Text style={[styles.skip, styles.skipFlexBox]}>Skip</Text>
      <View style={[styles.signUp21, styles.signLayout]}>
        <View style={[styles.signUpBenefits, styles.signLayout]}>
          <View style={[styles.signUpBenefits, styles.signLayout]}>
            <View style={[styles.signUp2Item, styles.signUp2ItemShadowBox]} />
            <Text style={[styles.signUp, styles.signPosition]}>Sign Up</Text>
            <Text
              style={[styles.step2Of, styles.signPosition]}
            >{`STEP 2 of 2: `}</Text>
            <Text style={[styles.registraionFee, styles.signPosition]}>
              Registraion fee
            </Text>
            <Text style={[styles.benefits, styles.signPosition]}>Benefits</Text>
            <Text style={[styles.unlimitedQuiz, styles.bonusGemsTypo]}>
              Unlimited quiz
            </Text>
            <Text style={[styles.bonusGems, styles.bonusGemsTypo]}>
              Bonus Gems
            </Text>
            <Text style={[styles.offersForIn, styles.bonusGemsTypo]}>
              Offers for In App Store
            </Text>
            <Text style={[styles.weekFreeTrial, styles.bonusGemsTypo]}>
              1 week free trial
            </Text>
            <Text style={[styles.payment, styles.signPosition]}>Payment</Text>
            <View style={[styles.rectangleParent, styles.groupChildLayout]}>
              <View style={[styles.groupChild, styles.childPosition]} />
              <Text style={[styles.gems, styles.gemsTypo]}>100 Gems</Text>
              <Text style={[styles.gems1, styles.gemsTypo]}>100 Gems</Text>
            </View>
            <Image
              style={[styles.checkCircleIcon, styles.checkIconLayout]}
              contentFit="cover"
              source={require("../assets/check-circle.png")}
            />
            <Image
              style={[styles.checkCircleIcon1, styles.checkIconLayout]}
              contentFit="cover"
              source={require("../assets/check-circle.png")}
            />
            <Image
              style={[styles.checkCircleIcon2, styles.checkIconLayout]}
              contentFit="cover"
              source={require("../assets/check-circle.png")}
            />
            <Image
              style={[styles.checkCircleIcon3, styles.checkIconLayout]}
              contentFit="cover"
              source={require("../assets/check-circle.png")}
            />
            <View style={[styles.signUp2Inner, styles.signPosition]} />
          </View>
        </View>
      </View>
      <View style={[styles.okButton1, styles.okButton1Layout]}>
        <Pressable
          style={[styles.okButton1Child, styles.okButton1Layout]}
          onPress={() => navigation.navigate("CATEGORIES")}
        />
        <Text style={[styles.okay, styles.skipFlexBox]}>OKAY</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  skipFlexBox: {
    textAlign: "left",
    color: "#fff",
  },
  signLayout: {
    height: 372,
    width: 296,
    position: "absolute",
  },
  signUp2ItemShadowBox: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  signPosition: {
    left: 23,
    position: "absolute",
  },
  bonusGemsTypo: {
    fontSize: 12,
    left: 23,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
    position: "absolute",
  },
  groupChildLayout: {
    height: 27,
    width: 91,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: "#ff2a83",
    left: 0,
    top: 0,
  },
  gemsTypo: {
    width: 69,
    fontSize: 15,
    top: 5,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
    position: "absolute",
  },
  checkIconLayout: {
    height: 14,
    width: 14,
    left: 246,
    position: "absolute",
  },
  okButton1Layout: {
    height: 80,
    width: 359,
    position: "absolute",
  },
  signUp2Child: {
    top: 0,
    width: 360,
    height: 800,
  },
  bgIcon: {
    height: 793,
    top: 0,
    width: 360,
  },
  bgIcon1: {
    top: -18,
    height: 469,
  },
  skip: {
    top: 62,
    left: 278,
    fontFamily: "ABeeZee-Regular",
    color: "#fff",
    fontSize: 18,
    position: "absolute",
  },
  signUp2Item: {
    borderRadius: 43,
    backgroundColor: "rgba(22, 22, 22, 0.7)",
    height: 372,
    width: 296,
    position: "absolute",
    left: 0,
    top: 0,
  },
  signUp: {
    top: 38,
    fontSize: 43,
    width: 186,
    height: 54,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
  },
  step2Of: {
    top: 96,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
    fontSize: 18,
  },
  registraionFee: {
    top: 135,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
    fontSize: 18,
  },
  benefits: {
    top: 236,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
    fontSize: 18,
  },
  unlimitedQuiz: {
    top: 270,
  },
  bonusGems: {
    top: 289,
  },
  offersForIn: {
    top: 309,
  },
  weekFreeTrial: {
    top: 328,
  },
  payment: {
    top: 180,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
    fontSize: 18,
  },
  groupChild: {
    borderRadius: 26,
    height: 27,
    width: 91,
    position: "absolute",
  },
  gems: {
    left: 11,
  },
  gems1: {
    left: 12,
  },
  rectangleParent: {
    top: 177,
    left: 170,
  },
  checkCircleIcon: {
    top: 270,
  },
  checkCircleIcon1: {
    top: 289,
  },
  checkCircleIcon2: {
    top: 308,
  },
  checkCircleIcon3: {
    top: 327,
  },
  signUp2Inner: {
    top: 220,
    borderStyle: "solid",
    borderColor: "#b3b3b3",
    borderTopWidth: 1,
    width: 245,
    height: 1,
  },
  signUpBenefits: {
    left: 0,
    width: 296,
    top: 0,
  },
  signUp21: {
    top: 254,
    left: 32,
  },
  okButton1Child: {
    backgroundColor: "#ff2a83",
    left: 0,
    top: 0,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  okay: {
    top: 17,
    left: 147,
    fontSize: 28,
    letterSpacing: 2.8,
    fontFamily: "Anton-Regular",
    width: 65,
    height: 35,
    position: "absolute",
  },
  okButton1: {
    top: 720,
    left: 1,
  },
  signUp2: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default SignUp2;
