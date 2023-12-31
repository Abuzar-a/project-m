import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const SignUp1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp1}>
      <View style={[styles.signUp1Child, styles.iconPosition]} />
      <Image
        style={[styles.bgIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/bg2.png")}
      />
      <Image
        style={[styles.bggIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/bgg.png")}
      />
      <View style={[styles.signUp, styles.signLayout1]}>
        <View style={[styles.signUpChild, styles.childShadowBox]} />
        <Text style={[styles.signUp2, styles.okayFlexBox]}>Sign Up</Text>
        <Text style={[styles.firstName, styles.nameTypo]}>First Name</Text>
        <Text style={styles.step1Of}>STEP 1 of 2:</Text>
        <Text style={[styles.mobile, styles.nameTypo]}>Mobile</Text>
        <Text style={[styles.email, styles.nameTypo]}>Email</Text>
        <Text style={[styles.lastName, styles.nameTypo]}>Last Name</Text>
        <View style={[styles.signUpItem, styles.signLayout]} />
        <View style={[styles.signUpInner, styles.signLayout]} />
        <View style={[styles.lineView, styles.signLayout]} />
      </View>
      <View style={[styles.okButton, styles.buttonLayout]}>
        <Pressable
          style={[styles.okButtonChild, styles.buttonLayout]}
          onPress={() => navigation.navigate("SignUp2")}
        />
        <Text style={[styles.okay, styles.okayFlexBox]}>OKAY</Text>
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
  signLayout1: {
    height: 372,
    width: 296,
    position: "absolute",
  },
  childShadowBox: {
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
  okayFlexBox: {
    textAlign: "left",
    color: "#fff",
    position: "absolute",
  },
  nameTypo: {
    color: "#807c7c",
    fontSize: 18,
    textAlign: "left",
    fontFamily: "ABeeZee-Regular",
    position: "absolute",
  },
  signLayout: {
    height: 1,
    width: 245,
    borderTopWidth: 1,
    borderColor: "#585858",
    borderStyle: "solid",
    position: "absolute",
  },
  buttonLayout: {
    height: 80,
    width: 359,
    position: "absolute",
  },
  signUp1Child: {
    top: 0,
    left: 0,
    position: "absolute",
    height: 800,
  },
  bgIcon: {
    top: -12,
    height: 823,
    left: 0,
    position: "absolute",
  },
  bggIcon: {
    top: -16,
    height: 451,
    left: 0,
    position: "absolute",
  },
  signUpChild: {
    borderRadius: 43,
    backgroundColor: "rgba(22, 22, 22, 0.7)",
    height: 372,
    width: 296,
    position: "absolute",
  },
  signUp2: {
    top: 38,
    fontSize: 43,
    width: 186,
    height: 54,
    fontFamily: "ABeeZee-Regular",
    color: "#fff",
    left: 23,
  },
  firstName: {
    top: 175,
    left: 23,
  },
  step1Of: {
    top: 95,
    fontSize: 18,
    textAlign: "left",
    color: "#fff",
    fontFamily: "ABeeZee-Regular",
    left: 23,
    position: "absolute",
  },
  mobile: {
    top: 265,
    left: 22,
  },
  email: {
    top: 310,
    left: 23,
  },
  lastName: {
    top: 220,
    left: 22,
  },
  signUpItem: {
    top: 204,
    left: 21,
  },
  signUpInner: {
    top: 253,
    left: 23,
  },
  lineView: {
    top: 299,
    left: 22,
  },
  signUp: {
    top: 254,
    left: 32,
  },
  okButtonChild: {
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
  okay: {
    top: 17,
    left: 147,
    fontSize: 28,
    letterSpacing: 2.8,
    fontFamily: "Anton-Regular",
    width: 65,
    height: 35,
  },
  okButton: {
    top: 720,
    left: 1,
  },
  signUp1: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default SignUp1;
