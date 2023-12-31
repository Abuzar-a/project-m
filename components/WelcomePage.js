import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const WelcomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcomePage}>
      <View style={[styles.welcomePageChild, styles.bgIconPosition]} />
      <Image
        style={[styles.bgIcon, styles.bgIconPosition]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={[styles.quizWrapper, styles.quizLayout]}>
        <View style={[styles.quiz, styles.quizLayout]}>
          <Text style={[styles.q, styles.qTypo]}>Q</Text>
          <Text style={[styles.u, styles.qTypo]}>U</Text>
          <Text style={[styles.i, styles.qTypo]}>I</Text>
          <Text style={[styles.z, styles.qTypo]}>Z</Text>
        </View>
      </View>
      <Pressable
        style={[styles.login, styles.loginLayout]}
        onPress={() => navigation.navigate("SignUp1")}
      >
        <View style={[styles.rectangleParent, styles.loginLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.loginWithGoogle, styles.loginTypo]}>
            Login with google
          </Text>
          <Text style={[styles.loginWithFacebook, styles.loginTypo]}>
            Login with facebook
          </Text>
          <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
          <Text style={[styles.forgotPassword, styles.signUpTypo]}>
            Forgot Password
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bgIconPosition: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 360,
  },
  quizLayout: {
    height: 48,
    width: 221,
    position: "absolute",
  },
  qTypo: {
    textAlign: "left",
    color: "#fff",
    fontFamily: "Barlow-Bold",
    fontWeight: "700",
    fontSize: 40,
    top: 0,
    position: "absolute",
  },
  loginLayout: {
    height: 106,
    width: 218,
    position: "absolute",
  },
  groupLayout: {
    height: 37,
    borderRadius: 27,
    width: 218,
    left: 0,
    position: "absolute",
    backgroundColor: "#fff",
  },
  loginTypo: {
    color: "#070707",
    fontFamily: "ABeeZee-Regular",
    fontSize: 18,
    textAlign: "left",
    position: "absolute",
  },
  signUpTypo: {
    fontSize: 14,
    top: 90,
    fontFamily: "ABeeZee-Regular",
    textAlign: "left",
    color: "#fff",
    position: "absolute",
  },
  welcomePageChild: {
    left: 0,
    top: 0,
    height: 800,
  },
  bgIcon: {
    height: 814,
    left: 0,
    top: 0,
  },
  q: {
    left: 0,
  },
  u: {
    left: 66,
  },
  i: {
    left: 139,
  },
  z: {
    left: 198,
  },
  quiz: {
    left: 0,
    top: 0,
  },
  quizWrapper: {
    top: 325,
    left: 71,
  },
  groupChild: {
    top: 0,
  },
  groupItem: {
    top: 48,
  },
  loginWithGoogle: {
    top: 8,
    left: 32,
  },
  loginWithFacebook: {
    top: 56,
    left: 29,
  },
  signUp: {
    left: 16,
  },
  forgotPassword: {
    left: 109,
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  login: {
    top: 494,
    left: 71,
  },
  welcomePage: {
    overflow: "hidden",
    height: 800,
    width: 360,
    backgroundColor: "#fff",
  },
});

export default WelcomePage;
